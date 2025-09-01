import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsCrypto icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:CoinsCrypto Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CoinsCrypto } from '@ldls/ui-react/symbols';
 *
 * <CoinsCrypto />
 *
 * @example
 * // With custom size and className
 * <CoinsCrypto size={40} className="text-warning" />
 */
export const CoinsCrypto = createIcon(
  "CoinsCrypto",
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
      d="M4.84 2.471A3.315 3.315 0 1 1 9.529 7.16m-5.679.015v-1.4h1.411c.385 0 .695.31.695.695a.7.7 0 0 1-.7.695m-.521-1.79v.4m0 3.215v-.455m3.397-1.351a3.317 3.317 0 1 1-6.634-.002 3.317 3.317 0 0 1 6.634.002m-2.697 1.35H3.85v-1.36h1.583a.675.675 0 1 1-.005 1.35z"
    />
  </svg>
);
