import createIcon from "../../Components/Icon/createIcon";

/**
 * Folder icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Folder Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Folder } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Folder />
 *
 * @example
 * // With custom size and className
 * <Folder size={40} className="text-warning" />
 */
export const Folder = createIcon(
  "Folder",
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
      d="M10.5 4.5v-1a1 1 0 0 0-1-1H5.375m.72 1.445-.7-1.395c-.17-.34-.52-.555-.895-.555H2.49V1.99c-.555 0-1 .445-1 1v6a1 1 0 0 0 1 1h7c.55 0 1-.45 1-1v-4.5H6.98a.99.99 0 0 1-.895-.555z"
    />
  </svg>
);
