import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsCross icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:CoinsCross Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CoinsCross } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <CoinsCross />
 *
 * @example
 * // With custom size and className
 * <CoinsCross size={40} className="text-warning" />
 */
export const CoinsCross = createIcon(
  "CoinsCross",
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
      d="M1.5 4c0 .55 1.115 1 2.5 1M1.5 4v4c0 .55 1.12 1 2.5 1M1.5 4c0-.265.263-.52.732-.707C2.702 3.105 3.337 3 4 3s1.299.105 1.768.293c.469.187.732.442.732.707m-5 0c0 .265.263.52.732.707C2.702 4.895 3.337 5 4 5m0 0c.663 0 1.299-.105 1.768-.293.469-.187.732-.442.732-.707m0 0v1.25m2.25-2 1.5-1.5m0 1.5-1.5-1.5M1.5 6c0 .55 1.115.995 2.5.995M3.995 7c-1.385 0-2.5-.45-2.5-1M5.5 7.5c0 .55 1.115 1 2.5 1 1.38 0 2.5-.45 2.5-1v2c0 .55-1.12 1-2.5 1-1.385 0-2.5-.45-2.5-1zm4.999 0c0-.555-1.12-1-2.5-1s-2.5.445-2.5 1c0 .55 1.115 1 2.5 1 1.38 0 2.5-.45 2.5-1"
    />
  </svg>
);
