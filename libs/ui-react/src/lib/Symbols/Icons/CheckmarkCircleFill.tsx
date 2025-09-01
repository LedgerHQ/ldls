import createIcon from "../../Components/Icon/createIcon";

/**
 * CheckmarkCircleFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:CheckmarkCircleFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CheckmarkCircleFill } from '@ldls/ui-react/symbols';
 *
 * <CheckmarkCircleFill />
 *
 * @example
 * // With custom size and className
 * <CheckmarkCircleFill size={40} className="text-warning" />
 */
export const CheckmarkCircleFill = createIcon(
  "CheckmarkCircleFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      d="M6.001 1.012a4.988 4.988 0 1 1-.002 9.975 4.988 4.988 0 0 1 .002-9.975m2.096 3.436a.5.5 0 0 0-.708 0l-2.091 2.09-.723-.722a.5.5 0 0 0-.707.707l1.083 1.083a.5.5 0 0 0 .77-.078l2.376-2.373a.5.5 0 0 0 0-.707"
    />
  </svg>
);
