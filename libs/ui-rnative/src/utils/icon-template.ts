import { Template } from '@svgr/babel-plugin-transform-svg-component';

const template: Template = (variables, { tpl }) => {
  const componentName = variables.componentName;
  const jsDocComment = `
/**
 * ${componentName} icon component for React Native.
 * 
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props (from react-native-svg)
 * and additional size variants defined in the Icon component.
 * 
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon (via NativeWind).
 * @param {SVGProps} [...props] - All standard SVG element props (from react-native-svg).
 * 
 * @example
 * // Basic usage with default size (24px)
 * import { ${componentName} } from '@ledgerhq/ldls-ui-rnative/symbols';
 * 
 * <${componentName} />
 * 
 * @example
 * // With custom size and className (NativeWind)
 * <${componentName} size={40} className="text-warning" />
 * 
 * @example
 * // Used within a Button component
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 * 
 * <Button icon={${componentName}} size="md">
 *   Click me
 * </Button>
 */
`;

  return tpl`
${variables.imports};
import createIcon from '../../Components/Icon/createIcon';

${variables.interfaces};

${jsDocComment}
export const ${variables.componentName} = createIcon('${variables.componentName}', ${variables.jsx});
`;
};

export default template;
