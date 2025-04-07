import invariant from "invariant";
import { get } from "lodash";
import fs from "node:fs";
const FIGMA_FILE_PATH = process.argv[2];
invariant(FIGMA_FILE_PATH, "FIGMA_FILE is required");
const FIGMA_FILE = JSON.parse(fs.readFileSync(FIGMA_FILE_PATH, "utf-8"));
const OUTPUT_FILE_PATH = "./design-tokens.ts";
const PRIMITIVES = FIGMA_FILE["1"]["Primitives/Value"];
const ENTERPRISE_BRAND = FIGMA_FILE["3"]["Brand/Entreprise"];
const DARK_MODE = FIGMA_FILE["2"]["Mode/Dark"];
const LIGHT_MODE = FIGMA_FILE["2"]["Mode/Light"];
const isColor = (item) => {
    return "value" in item;
};
const isPlainColor = (item) => {
    return item.value.startsWith("#");
};
const getLink = (item) => {
    return item.value.substring(1, item.value.length - 1);
};
const resolvePrimitiveColor = (color) => {
    while (!isPlainColor(color)) {
        const link = getLink(color);
        color = get(PRIMITIVES, link.split("."));
        if (!color) {
            console.warn("[warn] can't resolve primitive color", link);
            return null;
        }
    }
    return color.value;
};
const resolveModeColor = (key, themeKey) => {
    const mode = themeKey === "Light" ? LIGHT_MODE : DARK_MODE;
    const color = get(mode, key.split("."));
    invariant(color, `Color ${key} not found in ${themeKey} theme`);
    return resolvePrimitiveColor(color);
};
const normalizeKey = (key) => {
    return key.toLowerCase().replaceAll(".", "-").replaceAll(" ", "-");
};
const getBrandColors = (input, theme, keys = []) => {
    const colors = {};
    for (const key in input) {
        const item = input[key];
        if (isColor(item)) {
            const colorKey = keys.concat(key).join(".");
            if (isPlainColor(item)) {
                colors[normalizeKey(colorKey)] = item.value;
            }
            else {
                const link = getLink(item);
                const value = resolveModeColor(link, theme);
                if (value) {
                    colors[normalizeKey(colorKey)] = value;
                }
            }
        }
        else {
            Object.assign(colors, getBrandColors(item, theme, [...keys, key]));
        }
    }
    return colors;
};
const collectPrimitiveColors = (input, keys = []) => {
    const colors = {};
    for (const key in input) {
        const item = input[key];
        if (isColor(item)) {
            const colorKey = keys.concat(key).join(".");
            if (isPlainColor(item)) {
                colors[normalizeKey(colorKey)] = item.value;
            }
            else {
                const value = resolvePrimitiveColor(item);
                if (value) {
                    colors[normalizeKey(colorKey)] = value;
                }
            }
        }
        else {
            Object.assign(colors, collectPrimitiveColors(item, [...keys, key]));
        }
    }
    return colors;
};
const renderMode = (mode) => Object.entries(mode)
    .map(([key, value]) => `  "${key}": "${value}",`)
    .join("\n");
const collectSpacingFacet = (breakpointDefinition, facet) => {
    const spacings = {};
    const prefix = facet === "Spacings"
        ? "spacing"
        : // sic, i love this typo
            "marging";
    for (const key in breakpointDefinition[facet]) {
        // special case for none
        if (key === "None") {
            spacings[`${prefix}-none`] = 0;
            continue;
        }
        const link = getLink(breakpointDefinition.Spacings[key]);
        const resolved = get(PRIMITIVES, link.split("."));
        if (!resolved) {
            console.warn("[warn] can't resolve spacing", link);
            continue;
        }
        spacings[`${prefix}-${normalizeKey(key)}`] = resolved.value;
    }
    return spacings;
};
const collectSpacings = (breakpoint) => {
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
const output = [
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
