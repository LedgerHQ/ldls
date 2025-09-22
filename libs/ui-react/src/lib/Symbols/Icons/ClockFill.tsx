import createIcon from "../../Components/Icon/createIcon";

/**
 * ClockFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ClockFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ClockFill } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <ClockFill />
 *
 * @example
 * // With custom size and className
 * <ClockFill size={40} className="text-warning" />
 */
export const ClockFill = createIcon(
  "ClockFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.125 6A4.87 4.87 0 0 1 6 1.125a4.875 4.875 0 1 1 0 9.75A4.87 4.87 0 0 1 1.125 6"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M8.325 6H6zM6 6V3.2z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.325 6H6V3.2"
    />
  </svg>
);
