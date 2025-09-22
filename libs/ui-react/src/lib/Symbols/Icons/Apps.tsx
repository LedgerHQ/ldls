import createIcon from "../../Components/Icon/createIcon";

/**
 * Apps icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Apps Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Apps } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Apps />
 *
 * @example
 * // With custom size and className
 * <Apps size={40} className="text-warning" />
 */
export const Apps = createIcon(
  "Apps",
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
      d="M8.75 7.5V10M10 8.75H7.5M4 5H2.5c-.552 0-1-.45-1-1V2.5a1 1 0 0 1 1-1H4c.55 0 1 .448 1 1V4c0 .55-.45 1-1 1m5.5 0H8a1 1 0 0 1-1-1V2.5c0-.552.445-1 1-1h1.5c.55 0 1 .448 1 1V4c0 .55-.45 1-1 1M4 10.5H2.5c-.552 0-1-.45-1-1V8c0-.555.448-1 1-1H4a1 1 0 0 1 1 1v1.5c0 .55-.45 1-1 1"
    />
  </svg>
);
