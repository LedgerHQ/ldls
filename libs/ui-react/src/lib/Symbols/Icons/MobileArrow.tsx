import createIcon from "../../Components/Icon/createIcon";

/**
 * MobileArrow icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:MobileArrow Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { MobileArrow } from '@ldls/ui-react/symbols';
 *
 * <MobileArrow />
 *
 * @example
 * // With custom size and className
 * <MobileArrow size={40} className="text-warning" />
 */
export const MobileArrow = createIcon(
  "MobileArrow",
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
      strokeWidth={1.3}
      d="M4.75 1.5v1c0 .135.115.25.25.25h2a.25.25 0 0 0 .25-.25v-1M3 8.5v1c0 .55.45 1 1 1h4a1 1 0 0 0 1-1v-7c0-.555-.445-1-1-1H4a1 1 0 0 0-1 1v1M1 6h2.5m0 0-1-1m1 1-1 1"
    />
  </svg>
);
