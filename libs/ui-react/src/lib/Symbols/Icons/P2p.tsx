import createIcon from "../../Components/Icon/createIcon";

/**
 * P2p icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:P2p Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { P2p } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <P2p />
 *
 * @example
 * // With custom size and className
 * <P2p size={40} className="text-warning" />
 */
export const P2p = createIcon(
  "P2p",
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
      d="M10.502 7.5V7a1.474 1.474 0 0 0-1.5-1.5H8M6 7.5V7a1.474 1.474 0 0 0-1.5-1.5H2.998a1.474 1.474 0 0 0-1.5 1.5v.5M9 10.055V8.775H7.705m-4.706 0a3.309 3.309 0 0 0 5.812 0M5 2.75a1.25 1.25 0 1 1-2.501 0 1.25 1.25 0 0 1 2.5 0m4.501.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
