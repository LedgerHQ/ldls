import createIcon from "../../Components/Icon/createIcon";

/**
 * Devices icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Devices Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Devices } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Devices />
 *
 * @example
 * // With custom size and className
 * <Devices size={40} className="text-warning" />
 */
export const Devices = createIcon(
  "Devices",
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
      d="M5 10.5H2.5a1 1 0 0 1-1-1v-7c0-.555.445-1 1-1h5a1 1 0 0 1 1 1v1M8 9.245h1m.6 1.255H7.4a.9.9 0 0 1-.9-.9V5.9c0-.5.4-.9.9-.9h2.2c.495 0 .9.4.9.9v3.7c0 .495-.405.9-.9.9"
    />
  </svg>
);
