import createIcon from "../../Components/Icon/createIcon";

/**
 * UserShield icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:UserShield Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { UserShield } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <UserShield />
 *
 * @example
 * // With custom size and className
 * <UserShield size={40} className="text-warning" />
 */
export const UserShield = createIcon(
  "UserShield",
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
      d="M5.672 8c-1.075 0-2.1.425-2.855 1.18M10.5 6c0-2.49-2.015-4.5-4.5-4.5-2.49 0-4.5 2.01-4.5 4.5 0 2.485 2.01 4.5 4.5 4.5m1.5-2.275v.42c-.005.78.48 1.48 1.214 1.755l.216.08q.061.023.13 0l.214-.085a1.88 1.88 0 0 0 1.216-1.76V8.21c0-.165-.11-.31-.265-.36L9.1 7.495a.35.35 0 0 0-.226 0l-1.125.35a.365.365 0 0 0-.264.355zm0-3.35v.25c0 .825-.675 1.5-1.5 1.5-.83 0-1.5-.675-1.5-1.5v-.25a1.501 1.501 0 0 1 3 0"
    />
  </svg>
);
