import createIcon from "../../Components/Icon/createIcon";

/**
 * PenEdit icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:PenEdit Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { PenEdit } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <PenEdit />
 *
 * @example
 * // With custom size and className
 * <PenEdit size={40} className="text-warning" />
 */
export const PenEdit = createIcon(
  "PenEdit",
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
      d="M6.875 3.58 8.42 5.125m-5.775 2.68 5.16-5.165a.5.5 0 0 1 .705 0l.835.835a.5.5 0 0 1 0 .705L4.18 9.345a.53.53 0 0 1-.355.145h-1.34V8.15c0-.135.05-.26.145-.355z"
    />
  </svg>
);
