import createIcon from "../../Components/Icon/createIcon";

/**
 * StarFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:StarFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { StarFill } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <StarFill />
 *
 * @example
 * // With custom size and className
 * <StarFill size={40} className="text-warning" />
 */
export const StarFill = createIcon(
  "StarFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6 8.617-2.91 1.38.6-3.06L1.495 4.69l3.09-.39 1.41-2.815 1.41 2.81 3.09.385L8.3 6.92l.6 3.06z"
    />
  </svg>
);
