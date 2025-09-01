import createIcon from "../../Components/Icon/createIcon";

/**
 * Download icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Download Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Download } from '@ldls/ui-react/symbols';
 *
 * <Download />
 *
 * @example
 * // With custom size and className
 * <Download size={40} className="text-warning" />
 */
export const Download = createIcon(
  "Download",
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
      d="M7.778 5.556 6 7.333m0 0L4.222 5.557M6 7.333V2m4 6.222A1.78 1.78 0 0 1 8.222 10H3.778A1.78 1.78 0 0 1 2 8.222"
    />
  </svg>
);
