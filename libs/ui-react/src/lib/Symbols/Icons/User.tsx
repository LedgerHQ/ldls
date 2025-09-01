import createIcon from "../../Components/Icon/createIcon";

/**
 * User icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:User Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { User } from '@ldls/ui-react/symbols';
 *
 * <User />
 *
 * @example
 * // With custom size and className
 * <User size={40} className="text-warning" />
 */
export const User = createIcon(
  "User",
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
      d="M2.5 10c0-1.25 1-2.2 2.2-2.2h2.55c1.25 0 2.2 1 2.2 2.2M7.5 2.6c.85.85.85 2.2 0 3s-2.2.85-3 0-.85-2.2 0-3 2.15-.8 3 0"
    />
  </svg>
);
