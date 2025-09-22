import createIcon from "../../Components/Icon/createIcon";

/**
 * Coins icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Coins Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Coins } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Coins />
 *
 * @example
 * // With custom size and className
 * <Coins size={40} className="text-warning" />
 */
export const Coins = createIcon(
  "Coins",
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
      d="M1.5 4.5c0 .55 1.115 1 2.5 1m0 2c-1.38 0-2.5-.45-2.5-1m4.995-4V4M5.5 8c0 .55 1.115 1 2.5 1 1.38 0 2.5-.45 2.5-1m-5-2c0 .55 1.115 1 2.5 1 1.38 0 2.5-.45 2.5-1v4c0 .55-1.12 1-2.5 1-1.385 0-2.5-.45-2.5-1zm0 0c0-.555 1.12-1 2.5-1s2.5.445 2.495 1M4 9.5c-1.38 0-2.5-.45-2.5-1v-6m0 0c0-.265.263-.52.732-.707C2.702 1.605 3.337 1.5 4 1.5s1.299.105 1.768.293c.469.187.732.442.732.707s-.263.52-.732.707C5.298 3.395 4.663 3.5 4 3.5s-1.299-.105-1.768-.293C1.763 3.02 1.5 2.765 1.5 2.5"
    />
  </svg>
);
