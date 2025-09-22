import createIcon from "../../Components/Icon/createIcon";

/**
 * Unlock icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Unlock Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Unlock } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Unlock />
 *
 * @example
 * // With custom size and className
 * <Unlock size={40} className="text-warning" />
 */
export const Unlock = createIcon(
  "Unlock",
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
      d="M11 3.01c-.22-.87-1-1.51-1.935-1.51-1.1 0-2 .895-2 2V5M8 10.5H3a1 1 0 0 1-1-1V6c0-.555.445-1 1-1h5a1 1 0 0 1 1 1v3.5c0 .55-.45 1-1 1"
    />
  </svg>
);
