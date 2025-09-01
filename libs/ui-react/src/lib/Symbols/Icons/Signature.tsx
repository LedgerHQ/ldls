import createIcon from "../../Components/Icon/createIcon";

/**
 * Signature icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Signature Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Signature } from '@ldls/ui-react/symbols';
 *
 * <Signature />
 *
 * @example
 * // With custom size and className
 * <Signature size={40} className="text-warning" />
 */
export const Signature = createIcon(
  "Signature",
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
      d="M6.755 9.5h3M1.767 4.025A1.9 1.9 0 0 1 1.5 3.04 1.42 1.42 0 0 1 2.75 1.5c1.38 0 2.5 2.015 2.5 4.5S4.243 10.5 3 10.5h.001c-.691 0-1.251-.895-1.251-2a4 4 0 0 1 4.003-4H5.75a1.89 1.89 0 0 1 1.75 2A4.9 4.9 0 0 1 7.25 8C8.15 5.293 9 5 9.5 5a1 1 0 0 1 1 1"
    />
  </svg>
);
