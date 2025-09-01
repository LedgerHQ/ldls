import createIcon from "../../Components/Icon/createIcon";

/**
 * AlarmClock icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:AlarmClock Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { AlarmClock } from '@ldls/ui-react/symbols';
 *
 * <AlarmClock />
 *
 * @example
 * // With custom size and className
 * <AlarmClock size={40} className="text-warning" />
 */
export const AlarmClock = createIcon(
  "AlarmClock",
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
      d="M2.335 8.605c.292.41.65.768 1.06 1.06M1.568 5.25A4.5 4.5 0 0 0 1.5 6c0 .256.026.505.067.75m.768-3.354c.292-.411.65-.769 1.06-1.061m1.855 8.097c.245.041.494.068.75.068a4.5 4.5 0 1 0 0-9c-.256 0-.505.026-.75.067M8 5 5.5 7.5 4 6"
    />
  </svg>
);
