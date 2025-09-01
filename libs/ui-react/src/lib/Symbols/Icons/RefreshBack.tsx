import createIcon from "../../Components/Icon/createIcon";

/**
 * RefreshBack icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:RefreshBack Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { RefreshBack } from '@ldls/ui-react/symbols';
 *
 * <RefreshBack />
 *
 * @example
 * // With custom size and className
 * <RefreshBack size={40} className="text-warning" />
 */
export const RefreshBack = createIcon(
  "RefreshBack",
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
      d="M2.256 2.32v1.768h1.767m-1.537 0A4 4 0 0 1 10 6a4 4 0 0 1-8 0"
    />
  </svg>
);
