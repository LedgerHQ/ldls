import createIcon from "../../Components/Icon/createIcon";

/**
 * DatabaseLock icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:DatabaseLock Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { DatabaseLock } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <DatabaseLock />
 *
 * @example
 * // With custom size and className
 * <DatabaseLock size={40} className="text-warning" />
 */
export const DatabaseLock = createIcon(
  "DatabaseLock",
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
      d="M2 7.055c0 .73 1.685 1.32 3.765 1.32M9.5 2.82c0 .73-1.68 1.32-3.75 1.32C3.675 4.14 2 3.545 2 2.815M9.5 4.94c0 .73-1.68 1.32-3.75 1.32C3.675 6.26 2 5.665 2 4.935M9.861 9v-.64a.88.88 0 0 0-.865-.865.86.86 0 0 0-.864.86v.635M5.768 10.5C3.687 10.5 2 9.905 2 9.175V2.82c0-.735 1.675-1.325 3.75-1.325 2.07 0 3.75.59 3.75 1.32V5.99m.513 5.01H7.987a.49.49 0 0 1-.49-.49V9.48c0-.27.215-.49.485-.49h2.026c.265 0 .485.215.485.485V10.5a.49.49 0 0 1-.49.485z"
    />
  </svg>
);
