import createIcon from "../../Components/Icon/createIcon";

/**
 * SpeedFast icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:SpeedFast Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { SpeedFast } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <SpeedFast />
 *
 * @example
 * // With custom size and className
 * <SpeedFast size={40} className="text-warning" />
 */
export const SpeedFast = createIcon(
  "SpeedFast",
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
      d="M6.705 5.795 9.25 3.25m.84 1.405a4.46 4.46 0 0 1-1.27 5.34m-.98-7.59a4.45 4.45 0 0 0-1.845-.41h0A4.5 4.5 0 0 0 1.488 6.49a4.49 4.49 0 0 0 1.67 3.5M6 5.495a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
