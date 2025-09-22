import createIcon from "../../Components/Icon/createIcon";

/**
 * PlusCircleFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:PlusCircleFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { PlusCircleFill } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <PlusCircleFill />
 *
 * @example
 * // With custom size and className
 * <PlusCircleFill size={40} className="text-warning" />
 */
export const PlusCircleFill = createIcon(
  "PlusCircleFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      d="M6 1.012A4.988 4.988 0 1 1 6 10.988 4.988 4.988 0 0 1 6 1.012M6 3.5a.5.5 0 0 0-.5.5v1.5H4a.5.5 0 1 0 0 1h1.5V8a.5.5 0 0 0 1 0V6.5H8a.5.5 0 0 0 0-1H6.5V4a.5.5 0 0 0-.5-.5"
    />
  </svg>
);
