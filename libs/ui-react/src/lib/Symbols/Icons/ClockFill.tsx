import createIcon from "../../Components/Icon/createIcon";

/**
 * ClockFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:ClockFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ClockFill } from '@ldls/ui-react/symbols';
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
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.5 8c0-3.596 2.91-6.5 6.5-6.5a6.5 6.5 0 1 1 0 13c-3.596 0-6.5-2.91-6.5-6.5"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M11.1 8H8zM8 8V4.267z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M11.1 8H8V4.267"
    />
  </svg>
);
