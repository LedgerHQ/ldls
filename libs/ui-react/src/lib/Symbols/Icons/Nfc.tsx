import createIcon from "../../Components/Icon/createIcon";

/**
 * Nfc icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Nfc Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Nfc } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Nfc />
 *
 * @example
 * // With custom size and className
 * <Nfc size={40} className="text-warning" />
 */
export const Nfc = createIcon(
  "Nfc",
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
      d="M4.5 3.62a2.12 2.12 0 0 1 3 0M2.817 8.683a4.502 4.502 0 1 1 6.366 0M5.25 4.81a1.06 1.06 0 0 1 1.5 0M5.625 9.877h.75M5.15 11.002h1.702a.9.9 0 0 0 .9-.9V7.4a.9.9 0 0 0-.9-.9H5.149a.9.9 0 0 0-.9.9v2.702a.9.9 0 0 0 .9.9"
    />
  </svg>
);
