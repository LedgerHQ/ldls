/**
 * Color primitives
 */
export type PrimitiveColorTokens = {
  light: {
    constant: Record<string, string>;
    grey: Record<string, string>;
    orange: Record<string, string>;
    purple: Record<string, string>;
    blue: Record<string, string>;
    green: Record<string, string>;
    yellow: Record<string, string>;
    red: Record<string, string>;
    crypto: Record<string, string>;
    discover: Record<string, string>;
  };
  dark: {
    constant: Record<string, string>;
    grey: Record<string, string>;
    purple: Record<string, string>;
    orange: Record<string, string>;
    blue: Record<string, string>;
    green: Record<string, string>;
    yellow: Record<string, string>;
    red: Record<string, string>;
    crypto: Record<string, string>;
    discover: Record<string, string>;
  };
};

/**
 * Typography primitives
 */
export type PrimitiveTypographyTokens = {
  fontFamily: Record<string, string>;
  fontWeight: Record<string, string>;
  fontSize: Record<string, number>;
  lineHeight: Record<string, number>;
  letterSpacing: Record<string, number>;
};

/**
 * Size & Spacing & Other primitives
 */
export type PrimitiveOtherTokens = {
  spacing: Record<string, number>;
  size: Record<string, number>;
  icon: {
    width: Record<string, number>;
    height: Record<string, number>;
    borderWidth: Record<string, number>;
  };
  spot: {
    width: Record<string, number>;
    height: Record<string, number>;
  };
  spinner: {
    borderWidth: Record<string, number>;
  };
  borderRadius: Record<string, number>;
  stroke: Record<string, number>;
  borderWidth: Record<string, number>;
  blur: Record<string, number>;
};

type ShadowTokenDefinition = {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
};

export type PrimitiveShadowTokens = {
  sm: {
    primary: ShadowTokenDefinition;
    secondary: ShadowTokenDefinition;
  };
  md: {
    primary: ShadowTokenDefinition;
    secondary: ShadowTokenDefinition;
  };
  lg: {
    primary: ShadowTokenDefinition;
    secondary: ShadowTokenDefinition;
  };
  xl: {
    primary: ShadowTokenDefinition;
    secondary: ShadowTokenDefinition;
  };
  '2xl': {
    primary: ShadowTokenDefinition;
  };
};

export type TypographyDefinition = {
  fontWeight: any;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
};

export type TypographyBreakpoint = {
  /**
   * responsive display
   */
  responsiveDisplay1: TypographyDefinition;
  responsiveDisplay2: TypographyDefinition;
  responsiveDisplay3: TypographyDefinition;
  responsiveDisplay4: TypographyDefinition;
  /**
   * headings
   */
  heading0: TypographyDefinition;
  heading0SemiBold: TypographyDefinition;
  heading1: TypographyDefinition;
  heading1SemiBold: TypographyDefinition;
  heading2: TypographyDefinition;
  heading2SemiBold: TypographyDefinition;
  heading3: TypographyDefinition;
  heading3SemiBold: TypographyDefinition;
  heading4: TypographyDefinition;
  heading4SemiBold: TypographyDefinition;
  /**
   * body
   */
  body1: TypographyDefinition;
  body1SemiBold: TypographyDefinition;
  body2: TypographyDefinition;
  body2SemiBold: TypographyDefinition;
  body3: TypographyDefinition;
  body3SemiBold: TypographyDefinition;
  body4: TypographyDefinition;
  body4SemiBold: TypographyDefinition;

  grid: {
    columnCount: number;
    gutter: number;
  };
};

export type TypographyTokens = {
  sm: TypographyBreakpoint;
  md?: TypographyBreakpoint;
  lg?: TypographyBreakpoint;
  xl?: TypographyBreakpoint;
};

export type ThemeColorTokens = {
  border: Record<string, string>;
  bg: Record<string, string>;
  text: Record<string, string>;
  discover: Record<string, string>;
  crypto: Record<string, string>;
};

export type ThemeCoreTokens = PrimitiveOtherTokens & {
  shadows: PrimitiveShadowTokens;
  typographies: TypographyTokens;
};
