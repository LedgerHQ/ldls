import createIcon from "../../Components/Icon/createIcon";

/**
 * Information icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Information Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Information } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Information />
 *
 * @example
 * // With custom size and className
 * <Information size={40} className="text-warning" />
 */
export const Information = createIcon(
  "Information",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.995 4a.124.124 0 0 0-.125.125c0 .065.055.125.125.125a.13.13 0 0 0 .125-.125c0-.07-.06-.125-.13-.125M6 6v2.5m0 2c-2.49 0-4.5-2.014-4.5-4.5A4.5 4.5 0 1 1 6 10.5"
    />
  </svg>
);
