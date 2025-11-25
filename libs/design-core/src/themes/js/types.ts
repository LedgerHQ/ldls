export type PrimitiveTokens = {
  /**
   * Colors
   */
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

  /**
   * Sizes & Spacing
   */
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

  /**
   * Font
   */
  fontFamily: Record<string, string>;
  fontWeight: Record<string, string>;
  fontSize: Record<string, number>;
  fontLineHeight: Record<string, number>;
  fontLetterSpacing: Record<string, number>;

  /**
   * Others
   */
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
    first: ShadowTokenDefinition;
    second: ShadowTokenDefinition;
  };
  md: {
    first: ShadowTokenDefinition;
    second: ShadowTokenDefinition;
  };
  lg: {
    first: ShadowTokenDefinition;
    second: ShadowTokenDefinition;
  };
  xl: {
    first: ShadowTokenDefinition;
    second: ShadowTokenDefinition;
  };
  '2xl': {
    first: ShadowTokenDefinition;
  };
};
