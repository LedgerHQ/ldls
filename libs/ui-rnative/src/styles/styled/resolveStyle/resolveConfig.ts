import { LumenTextStyleProps, LumenViewStyleProps } from '../../types';

/**
 * Configuration for each style prop
 * - path: Theme path for token lookup (array of keys)
 * - spread: true for props that spread into multiple style properties (variant)
 * - No path = passthrough prop (value passed as-is)
 */
export type PropConfig = {
  path?: string[];
  spread?: boolean;
};

/**
 * View style props configuration
 */
export const VIEW_PROP_CONFIG: Record<string, PropConfig> = {
  // Spacing props
  padding: { path: ['spacings'] },
  paddingTop: { path: ['spacings'] },
  paddingBottom: { path: ['spacings'] },
  paddingLeft: { path: ['spacings'] },
  paddingRight: { path: ['spacings'] },
  paddingHorizontal: { path: ['spacings'] },
  paddingVertical: { path: ['spacings'] },
  margin: { path: ['spacings'] },
  marginTop: { path: ['spacings'] },
  marginBottom: { path: ['spacings'] },
  marginLeft: { path: ['spacings'] },
  marginRight: { path: ['spacings'] },
  marginHorizontal: { path: ['spacings'] },
  marginVertical: { path: ['spacings'] },
  gap: { path: ['spacings'] },
  rowGap: { path: ['spacings'] },
  columnGap: { path: ['spacings'] },

  // Size props
  width: { path: ['sizes'] },
  height: { path: ['sizes'] },
  minWidth: { path: ['sizes'] },
  minHeight: { path: ['sizes'] },
  maxWidth: { path: ['sizes'] },
  maxHeight: { path: ['sizes'] },

  // Background color
  backgroundColor: { path: ['colors', 'bg'] },

  // Border colors
  borderColor: { path: ['colors', 'border'] },
  borderTopColor: { path: ['colors', 'border'] },
  borderBottomColor: { path: ['colors', 'border'] },
  borderLeftColor: { path: ['colors', 'border'] },
  borderRightColor: { path: ['colors', 'border'] },

  // Border radius
  borderRadius: { path: ['borderRadius'] },
  borderTopLeftRadius: { path: ['borderRadius'] },
  borderTopRightRadius: { path: ['borderRadius'] },
  borderBottomLeftRadius: { path: ['borderRadius'] },
  borderBottomRightRadius: { path: ['borderRadius'] },

  // Shadow
  boxShadow: { path: ['shadows'] },

  // Passthrough props (no path = pass value as-is)
  flex: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignSelf: {},
  alignContent: {},
  flexGrow: {},
  flexShrink: {},
  flexBasis: {},
  position: {},
  top: {},
  bottom: {},
  left: {},
  right: {},
  zIndex: {},
  overflow: {},
  display: {},
  opacity: {},
  borderWidth: {},
  borderStyle: {},
} as const;

/**
 * Text style props configuration (extends view props + color + variant)
 */
export const TEXT_PROP_CONFIG: Record<string, PropConfig> = {
  ...VIEW_PROP_CONFIG,
  color: { path: ['colors', 'text'] },
  variant: { path: ['typographies'], spread: true },
} as const;

/**
 * Set for O(1) view prop lookup
 */
export const LUMEN_VIEW_STYLE_PROPS = new Set(
  Object.keys(VIEW_PROP_CONFIG),
) as Set<keyof LumenViewStyleProps>;

/**
 * Set for O(1) text prop lookup
 */
export const LUMEN_TEXT_STYLE_PROPS = new Set(
  Object.keys(TEXT_PROP_CONFIG),
) as Set<keyof LumenTextStyleProps>;
