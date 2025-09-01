import createIcon from "../../Components/Icon/createIcon";

/**
 * Charon icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Charon Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Charon } from '@ldls/ui-react/symbols';
 *
 * <Charon />
 *
 * @example
 * // With custom size and className
 * <Charon size={40} className="text-warning" />
 */
export const Charon = createIcon(
  "Charon",
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
      d="M8.785 7.5H6.5m2.5 2H3A1.5 1.5 0 0 1 1.5 8V4A1.5 1.5 0 0 1 3 2.5h6A1.5 1.5 0 0 1 10.5 4v4A1.5 1.5 0 0 1 9 9.5"
    />
  </svg>
);
