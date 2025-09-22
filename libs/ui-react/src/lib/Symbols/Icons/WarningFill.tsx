import createIcon from "../../Components/Icon/createIcon";

/**
 * WarningFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:WarningFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { WarningFill } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <WarningFill />
 *
 * @example
 * // With custom size and className
 * <WarningFill size={40} className="text-warning" />
 */
export const WarningFill = createIcon(
  "WarningFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.33 1.88C6.738.837 5.238.834 4.649 1.88L.824 8.58a1.544 1.544 0 0 0 1.34 2.31h7.66c1.181 0 1.929-1.283 1.34-2.31zm-.955 2.81a.375.375 0 0 0-.75 0v1.87a.375.375 0 1 0 .75 0zm-.38 2.997H5.99q-.015 0-.03.002a.5.5 0 0 0-.465.498c0 .263.213.5.5.5a.5.5 0 0 0 .352-.147.5.5 0 0 0 .148-.352.5.5 0 0 0-.5-.5"
      clipRule="evenodd"
    />
  </svg>
);
