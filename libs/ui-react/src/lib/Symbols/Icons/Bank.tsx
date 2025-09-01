import createIcon from "../../Components/Icon/createIcon";

/**
 * Bank icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Bank Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Bank } from '@ldls/ui-react/symbols';
 *
 * <Bank />
 *
 * @example
 * // With custom size and className
 * <Bank size={40} className="text-warning" />
 */
export const Bank = createIcon(
  "Bank",
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
      d="M7.322 5v4M9.5 9V5m-7 0v4m2.178 0V5M10.5 5h-9V3.497L6.076 1.5 10.5 3.43zm-9 5.5h9V10L10 9H2l-.5 1z"
    />
  </svg>
);
