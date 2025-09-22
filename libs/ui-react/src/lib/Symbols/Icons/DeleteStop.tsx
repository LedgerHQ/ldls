import createIcon from "../../Components/Icon/createIcon";

/**
 * DeleteStop icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:DeleteStop Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { DeleteStop } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <DeleteStop />
 *
 * @example
 * // With custom size and className
 * <DeleteStop size={40} className="text-warning" />
 */
export const DeleteStop = createIcon(
  "DeleteStop",
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
      d="m9.182 2.818-6.365 6.36 6.36-6.365z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 1.5A4.5 4.5 0 1 0 10.5 6c0-2.49-2.014-4.5-4.5-4.5"
    />
  </svg>
);
