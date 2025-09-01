import createIcon from "../../Components/Icon/createIcon";

/**
 * ExitLogout icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ExitLogout Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ExitLogout } from '@ldls/ui-react/symbols';
 *
 * <ExitLogout />
 *
 * @example
 * // With custom size and className
 * <ExitLogout size={40} className="text-warning" />
 */
export const ExitLogout = createIcon(
  "ExitLogout",
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
      d="M5.5 6h5m0 0L8.75 7.75M10.5 6 8.75 4.25M6 1.5H3c-.83 0-1.5.67-1.5 1.5v6c0 .825.67 1.5 1.5 1.5h3"
    />
  </svg>
);
