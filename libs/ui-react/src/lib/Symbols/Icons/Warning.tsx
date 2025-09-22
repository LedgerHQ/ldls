import createIcon from "../../Components/Icon/createIcon";

/**
 * Warning icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Warning Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Warning } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Warning />
 *
 * @example
 * // With custom size and className
 * <Warning size={40} className="text-warning" />
 */
export const Warning = createIcon(
  "Warning",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_3_232)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6.56V4.69m-.005 3.372a.124.124 0 0 0-.125.126c0 .064.055.124.125.124a.13.13 0 0 0 .125-.124c0-.07-.06-.126-.13-.126m1.025-5.997 3.824 6.702a1.17 1.17 0 0 1-1.014 1.749h-7.66c-.897 0-1.46-.97-1.014-1.749l3.824-6.702c.445-.79 1.58-.79 2.029 0z"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_232">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
