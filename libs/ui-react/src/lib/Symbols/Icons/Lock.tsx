import createIcon from "../../Components/Icon/createIcon";

/**
 * Lock icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Lock Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Lock } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Lock />
 *
 * @example
 * // With custom size and className
 * <Lock size={40} className="text-warning" />
 */
export const Lock = createIcon(
  "Lock",
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
      d="M4 5V3.5a2 2 0 1 1 4 0V5m.5 5.5h-5a1 1 0 0 1-1-1V6c0-.555.445-1 1-1h5a1 1 0 0 1 1 1v3.5c0 .55-.45 1-1 1"
    />
  </svg>
);
