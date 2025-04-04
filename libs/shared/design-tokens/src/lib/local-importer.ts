import invariant from "invariant";
import get from "lodash/get";
import fs from "node:fs";

const FIGMA_FILE_PATH = process.argv[2];
invariant(FIGMA_FILE_PATH, "FIGMA_FILE is required");

const FIGMA_FILE = JSON.parse(fs.readFileSync(FIGMA_FILE_PATH, "utf-8")) as FigmaFile;

const OUTPUT_FILE_PATH = "./design-tokens.ts";

type FigmaFile = {
  "1": {
    "Primitives/Value": {
      Colors: FigmaColorMap;
      Spacing: FigmaSpacingMap;
    };
  };
  "2": {
    "Mode/Light": FigmaColorMap;
    "Mode/Dark": FigmaColorMap;
  };
  "3": {
    "Brand/Entreprise": {
      Colors: FigmaColorMap;
    };
  };
  "4": {
    "Breakpoint/SM - 360 to 639 px": FigmaBreakpointDefinition;
    "Breakpoint/MD - 640 to 767 px": FigmaBreakpointDefinition;
    "Breakpoint/LG - 768 to 1023 px": FigmaBreakpointDefinition;
    "Breakpoint/XL - 1024 & more": FigmaBreakpointDefinition;
  };
};

type Breakpoint = keyof FigmaFile["4"];

type FigmaBreakpointDefinition = {
  Spacings: FigmaSpacingLinkMap;
  Margings: FigmaSpacingLinkMap;
};

type FigmaColor = {
  value: string;
};

type FigmaSpacing = {
  value: number;
};

type FigmaSpacingLink = {
  value: string;
};

interface FigmaColorMap {
  [key: string]: FigmaColor | FigmaColorMap;
}

interface FigmaSpacingMap {
  [key: string]: FigmaSpacing;
}

interface FigmaSpacingLinkMap {
  [key: string]: FigmaSpacingLink;
}

const PRIMITIVES = FIGMA_FILE["1"]["Primitives/Value"];
const ENTERPRISE_BRAND = FIGMA_FILE["3"]["Brand/Entreprise"];
const DARK_MODE = FIGMA_FILE["2"]["Mode/Dark"];
const LIGHT_MODE = FIGMA_FILE["2"]["Mode/Light"];

const isColor = (item: FigmaColorMap | FigmaColor): item is FigmaColor => {
  return "value" in item;
};

const isPlainColor = (item: FigmaColor): boolean => {
  return item.value.startsWith("#");
};

const getLink = (item: { value: string }): string => {
  return item.value.substring(1, item.value.length - 1);
};

const resolvePrimitiveColor = (color: FigmaColor): string | null => {
  while (!isPlainColor(color)) {
    const link = getLink(color);
    color = get(PRIMITIVES, link.split(".")) as FigmaColor;
    if (!color) {
      console.warn("[warn] can't resolve primitive color", link);
      return null;
    }
  }
  return color.value;
};

const resolveModeColor = (key: string, themeKey: "Light" | "Dark"): string | null => {
  const mode = themeKey === "Light" ? LIGHT_MODE : DARK_MODE;
  let color = get(mode, key.split(".")) as FigmaColor;
  invariant(color, `Color ${key} not found in ${themeKey} theme`);
  return resolvePrimitiveColor(color);
};

const normalizeKey = (key: string): string => {
  return key.toLowerCase().replaceAll(".", "-").replaceAll(" ", "-");
};

const getBrandColors = (
  input: FigmaColorMap,
  theme: "Light" | "Dark",
  keys: string[] = [],
): Record<string, string> => {
  const colors: Record<string, string> = {};
  for (const key in input) {
    const item = input[key]!;
    if (isColor(item)) {
      const colorKey = keys.concat(key).join(".");
      if (isPlainColor(item)) {
        colors[normalizeKey(colorKey)] = item.value;
      } else {
        const link = getLink(item);
        const value = resolveModeColor(link, theme);
        if (value) {
          colors[normalizeKey(colorKey)] = value;
        }
      }
    } else {
      Object.assign(colors, getBrandColors(item, theme, [...keys, key]));
    }
  }
  return colors;
};

const collectPrimitiveColors = (
  input: FigmaColorMap,
  keys: string[] = [],
): Record<string, string> => {
  const colors: Record<string, string> = {};
  for (const key in input) {
    const item = input[key]!;
    if (isColor(item)) {
      const colorKey = keys.concat(key).join(".");
      if (isPlainColor(item)) {
        colors[normalizeKey(colorKey)] = item.value;
      } else {
        const value = resolvePrimitiveColor(item);
        if (value) {
          colors[normalizeKey(colorKey)] = value;
        }
      }
    } else {
      Object.assign(colors, collectPrimitiveColors(item, [...keys, key]));
    }
  }
  return colors;
};

const renderMode = (mode: Record<string, string>): string =>
  Object.entries(mode)
    .map(([key, value]) => `  "${key}": "${value}",`)
    .join("\n");

const collectSpacingFacet = (
  breakpointDefinition: FigmaBreakpointDefinition,
  facet: "Spacings" | "Margings",
): Record<string, number> => {
  const spacings: Record<string, number> = {};
  const prefix =
    facet === "Spacings"
      ? "spacing"
      : // sic, i love this typo
        "marging";
  for (const key in breakpointDefinition[facet]) {
    // special case for none
    if (key === "None") {
      spacings[`${prefix}-none`] = 0;
      continue;
    }
    const link = getLink(breakpointDefinition.Spacings[key]!);
    const resolved = get(PRIMITIVES, link.split(".")) as FigmaSpacing | undefined;
    if (!resolved) {
      console.warn("[warn] can't resolve spacing", link);
      continue;
    }
    spacings[`${prefix}-${normalizeKey(key)}`] = resolved.value;
  }
  return spacings;
};

const collectSpacings = (breakpoint: Breakpoint): Record<string, number> => {
  const breakpointDefinition = FIGMA_FILE["4"][breakpoint];
  return {
    ...collectSpacingFacet(breakpointDefinition, "Spacings"),
    ...collectSpacingFacet(breakpointDefinition, "Margings"),
  };
};

const light = getBrandColors(ENTERPRISE_BRAND.Colors, "Light");
const dark = getBrandColors(ENTERPRISE_BRAND.Colors, "Dark");
const primitiveColors = collectPrimitiveColors(PRIMITIVES.Colors);
const spacings = collectSpacings("Breakpoint/MD - 640 to 767 px");

const output =
  [
    "// This file is auto-generated. Do not modify manually.",
    "",
    "export type SpacingScale = {",
    Object.entries(spacings)
      .map(([key]) => `  "${key}": string;`)
      .join("\n"),
    "};",
    "",
    "export const spacing: SpacingScale = {",
    Object.entries(spacings)
      .map(([key, val]) => `  "${key}": "${val}px",`)
      .join("\n"),
    "};",
    "",
    "export type ModeColors = {",
    Object.entries(light)
      .map(([key]) => `  "${key}": string;`)
      .join("\n"),
    "};",
    "",
    "export const light: ModeColors = {",
    renderMode(light),
    "};",
    "",
    "export const dark: ModeColors = {",
    renderMode(dark),
    "};",
    "",
    "export const tailwindColors = {",
    Object.keys(light)
      .map((key) => `  "${key}": "var(--${key})",`)
      .join("\n"),
    "} as const;",
    "",
    "export const primitiveColors = {",
    Object.entries(primitiveColors)
      .map(([key, value]) => `  "${key}": "${value}",`)
      .join("\n"),
    "} as const;",
  ].join("\n") + "\n";

fs.writeFileSync(OUTPUT_FILE_PATH, output);

console.log("Successfully outputted to", OUTPUT_FILE_PATH);