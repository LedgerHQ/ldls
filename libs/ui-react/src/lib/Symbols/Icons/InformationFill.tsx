import createIcon from "../../Components/Icon/createIcon";

/**
 * InformationFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:InformationFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { InformationFill } from '@ldls/ui-react/symbols';
 *
 * <InformationFill />
 *
 * @example
 * // With custom size and className
 * <InformationFill size={40} className="text-warning" />
 */
export const InformationFill = createIcon(
  "InformationFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      fill="currentColor"
      d="M8 1.35a6.65 6.65 0 0 1 0 13.3A6.646 6.646 0 0 1 1.35 8c0-3.679 2.978-6.65 6.65-6.65m0 6a.65.65 0 0 0-.65.65v3.333a.65.65 0 1 0 1.3 0V8A.65.65 0 0 0 8 7.35m-.01-2.666-.003-.001-.009.001a.814.814 0 0 0-.797.732l-.005.084.005.08c.04.395.373.737.813.737.242 0 .443-.11.575-.241A.82.82 0 0 0 8.81 5.5.82.82 0 0 0 8 4.684l-.006-.001zm-.003 1.3L7.9 5.975l-.002-.001c.03.004.059.01.089.01"
    />
  </svg>
);
