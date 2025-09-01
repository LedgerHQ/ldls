import createIcon from "../../Components/Icon/createIcon";

/**
 * PinLocation icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:PinLocation Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { PinLocation } from '@ldls/ui-react/symbols';
 *
 * <PinLocation />
 *
 * @example
 * // With custom size and className
 * <PinLocation size={40} className="text-warning" />
 */
export const PinLocation = createIcon(
  "PinLocation",
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
      d="M6 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 10.5S2.5 7.625 2.5 5a3.5 3.5 0 0 1 7 0c0 2.625-3.5 5.5-3.5 5.5"
    />
  </svg>
);
