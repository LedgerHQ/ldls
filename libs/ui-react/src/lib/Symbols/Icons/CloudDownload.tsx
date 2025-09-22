import createIcon from "../../Components/Icon/createIcon";

/**
 * CloudDownload icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:CloudDownload Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CloudDownload } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <CloudDownload />
 *
 * @example
 * // With custom size and className
 * <CloudDownload size={40} className="text-warning" />
 */
export const CloudDownload = createIcon(
  "CloudDownload",
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
      d="M6 8v2.5m0 0-1-1m1 1 1-1m-3.3-1h-.205a2.498 2.498 0 0 1-.34-4.97v-.005A2.985 2.985 0 0 1 5.99 1.49a3 3 0 0 1 3 3c1.1 0 2 .895 2 2 0 1.1-.9 2-2 2h-.706"
    />
  </svg>
);
