import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsCheck icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:CoinsCheck Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CoinsCheck } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <CoinsCheck />
 *
 * @example
 * // With custom size and className
 * <CoinsCheck size={40} className="text-warning" />
 */
export const CoinsCheck = createIcon(
  "CoinsCheck",
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
      d="M4 9c-1.38 0-2.5-.45-2.5-1V4m0 0c0-.265.263-.52.732-.707C2.702 3.105 3.337 3 4 3s1.299.105 1.768.293c.469.187.732.442.732.707m-5 0c0 .265.263.52.732.707C2.702 4.895 3.337 5 4 5s1.299-.105 1.768-.293C6.237 4.52 6.5 4.265 6.5 4m-1 3.5c0 .55 1.115 1 2.5 1 1.38 0 2.5-.45 2.5-1m-5 0v2c0 .55 1.115 1 2.5 1 1.38 0 2.5-.45 2.5-1v-2m-5 0c0-.555 1.115-1 2.5-1 1.38 0 2.5.445 2.5 1M6.5 4v1.25M4 7c-1.38 0-2.5-.45-2.5-1M11 1.969l-1.5 1.5-.9-.9"
    />
  </svg>
);
