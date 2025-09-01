import createIcon from "../../Components/Icon/createIcon";

/**
 * MinusCircleFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:MinusCircleFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { MinusCircleFill } from '@ldls/ui-react/symbols';
 *
 * <MinusCircleFill />
 *
 * @example
 * // With custom size and className
 * <MinusCircleFill size={40} className="text-warning" />
 */
export const MinusCircleFill = createIcon(
  "MinusCircleFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      d="M6 1.012A4.988 4.988 0 1 1 6 10.988 4.988 4.988 0 0 1 6 1.012M4 5.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1z"
    />
  </svg>
);
