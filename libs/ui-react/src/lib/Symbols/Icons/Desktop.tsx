import createIcon from "../../Components/Icon/createIcon";

/**
 * Desktop icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Desktop Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Desktop } from '@ldls/ui-react/symbols';
 *
 * <Desktop />
 *
 * @example
 * // With custom size and className
 * <Desktop size={40} className="text-warning" />
 */
export const Desktop = createIcon(
  "Desktop",
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
      d="m7 8.5.25 2M5 8.5l-.25 2m-1.15 0h4.8m2.1-3.75h-9m8 1.75h-7c-.552 0-1-.45-1-1v-5a1 1 0 0 1 1-1h7c.55 0 1 .448 1 1v5c0 .55-.45 1-1 1"
    />
  </svg>
);
