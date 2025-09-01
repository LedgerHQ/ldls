import createIcon from "../../Components/Icon/createIcon";

/**
 * Magnet icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Magnet Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Magnet } from '@ldls/ui-react/symbols';
 *
 * <Magnet />
 *
 * @example
 * // With custom size and className
 * <Magnet size={40} className="text-warning" />
 */
export const Magnet = createIcon(
  "Magnet",
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
      d="M7.5 2v2.5m0 3V10m1.75-2.5H6a1.5 1.5 0 1 1 0-3h3.25a.75.75 0 0 0 .75-.75v-1A.75.75 0 0 0 9.25 2H6a4 4 0 0 0 0 8h3.25a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75"
    />
  </svg>
);
