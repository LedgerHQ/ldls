import createIcon from "../../Components/Icon/createIcon";

/**
 * MoreVertical icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:MoreVertical Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { MoreVertical } from '@ldls/ui-react/symbols';
 *
 * <MoreVertical />
 *
 * @example
 * // With custom size and className
 * <MoreVertical size={40} className="text-warning" />
 */
export const MoreVertical = createIcon(
  "MoreVertical",
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
      d="M5.995 8.75c-.14 0-.25.11-.25.25 0 .135.11.25.25.25.135 0 .25-.115.25-.25 0-.14-.115-.25-.255-.25m.005-3c-.14 0-.25.11-.25.25 0 .135.11.25.25.25.135 0 .25-.115.25-.25 0-.14-.115-.25-.255-.25m.005-3c-.14 0-.25.11-.25.25 0 .135.11.25.25.25.135 0 .25-.115.25-.25 0-.14-.115-.25-.255-.25"
    />
  </svg>
);
