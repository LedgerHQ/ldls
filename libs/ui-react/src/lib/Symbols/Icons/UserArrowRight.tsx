import createIcon from "../../Components/Icon/createIcon";

/**
 * UserArrowRight icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:UserArrowRight Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { UserArrowRight } from '@ldls/ui-react/symbols';
 *
 * <UserArrowRight />
 *
 * @example
 * // With custom size and className
 * <UserArrowRight size={40} className="text-warning" />
 */
export const UserArrowRight = createIcon(
  "UserArrowRight",
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
      d="M8.5 10c0-1.25-1-2.2-2.2-2.2H3.75c-1.25 0-2.2 1-2.2 2.2M8.5 6H11m0 0-1 1m1-1-1-1M3.5 2.7c-.8.8-.8 2.15 0 2.95s2.15.8 2.95 0 .8-2.15 0-2.95-2.1-.8-2.95 0"
    />
  </svg>
);
