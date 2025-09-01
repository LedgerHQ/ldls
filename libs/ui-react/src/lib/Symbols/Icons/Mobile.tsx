import createIcon from "../../Components/Icon/createIcon";

/**
 * Mobile icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Mobile Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Mobile } from '@ldls/ui-react/symbols';
 *
 * <Mobile />
 *
 * @example
 * // With custom size and className
 * <Mobile size={40} className="text-warning" />
 */
export const Mobile = createIcon(
  "Mobile",
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
      d="M4.75 1.5v.9c-.015.15.095.28.25.3h2c.15-.02.26-.15.25-.3v-.9M5 9h2m1 1.5H4a1 1 0 0 1-1-1v-7c0-.555.445-1 1-1h4a1 1 0 0 1 1 1v7c0 .55-.45 1-1 1"
    />
  </svg>
);
