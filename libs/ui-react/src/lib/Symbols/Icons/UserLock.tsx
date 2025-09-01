import createIcon from "../../Components/Icon/createIcon";

/**
 * UserLock icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:UserLock Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { UserLock } from '@ldls/ui-react/symbols';
 *
 * <UserLock />
 *
 * @example
 * // With custom size and className
 * <UserLock size={40} className="text-warning" />
 */
export const UserLock = createIcon(
  "UserLock",
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
      d="M7.785 8.21v-.715a1 1 0 1 1 2 0v.71M5.5 7.5h-2a2 2 0 0 0-2 2v.5m6.285-1.786h2c.395 0 .714.32.714.714v.857c0 .395-.32.714-.713.714H7.785a.714.714 0 0 1-.714-.713v-.858c0-.394.32-.714.714-.714M5.5 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
    />
  </svg>
);
