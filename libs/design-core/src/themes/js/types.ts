export type PrimitiveTokens = {
  // colors
  colors: {
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
  // sizes & spacing
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
  // font
  fontFamily: Record<string, string>;
  fontWeight: Record<string, string>;
  fontSize: Record<string, number>;
  fontLineHeight: Record<string, number>;
  fontLetterSpacing: Record<string, number>;
  // others
  borderRadius: Record<string, number>;
  stroke: Record<string, number>;
  blur: Record<string, number>;
};

type ShadowTokenDefinition = {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
};

export type ShadowTokens = {
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

export type TypographyBreakpoint = {
  responsiveDisplay: {
    '1': Record<string, string | number>;
    '2': Record<string, string | number>;
    '3': Record<string, string | number>;
    '4': Record<string, string | number>;
  };
  heading: {
    '0': Record<string, string | number>;
    '1': Record<string, string | number>;
    '2': Record<string, string | number>;
    '3': Record<string, string | number>;
    '4': Record<string, string | number>;
  };
  body: {
    '1': Record<string, string | number>;
    '2': Record<string, string | number>;
    '3': Record<string, string | number>;
    '4': Record<string, string | number>;
  };
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
