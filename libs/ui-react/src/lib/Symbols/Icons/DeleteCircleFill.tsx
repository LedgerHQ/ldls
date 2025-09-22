import createIcon from "../../Components/Icon/createIcon";

/**
 * DeleteCircleFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:DeleteCircleFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { DeleteCircleFill } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <DeleteCircleFill />
 *
 * @example
 * // With custom size and className
 * <DeleteCircleFill size={40} className="text-warning" />
 */
export const DeleteCircleFill = createIcon(
  "DeleteCircleFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.125 6A4.87 4.87 0 0 1 6 1.125a4.875 4.875 0 1 1 0 9.75A4.87 4.87 0 0 1 1.125 6M4.85 4.32a.375.375 0 1 0-.53.53L5.47 6 4.32 7.15a.375.375 0 1 0 .53.53L6 6.53l1.15 1.15a.375.375 0 0 0 .53-.53L6.53 6l1.15-1.15a.375.375 0 0 0-.53-.53L6 5.47z"
      clipRule="evenodd"
    />
  </svg>
);
