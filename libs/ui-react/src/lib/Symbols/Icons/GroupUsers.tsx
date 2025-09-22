import createIcon from "../../Components/Icon/createIcon";

/**
 * GroupUsers icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:GroupUsers Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { GroupUsers } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <GroupUsers />
 *
 * @example
 * // With custom size and className
 * <GroupUsers size={40} className="text-warning" />
 */
export const GroupUsers = createIcon(
  "GroupUsers",
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
      d="M10.395 4.76a1.01 1.01 0 0 1 0 1.43c-.4.395-1.04.395-1.435 0-.4-.4-.4-1.04 0-1.435.395-.4 1.035-.4 1.43 0m-3.29-1.8a1.56 1.56 0 0 1 0 2.2 1.566 1.566 0 0 1-2.205 0 1.557 1.557 0 0 1 0-2.205c.605-.61 1.59-.61 2.2 0M3.03 4.76a1.01 1.01 0 0 1 0 1.43c-.4.395-1.04.395-1.435 0-.4-.4-.4-1.04 0-1.435.395-.4 1.035-.4 1.43 0M11.5 9.5v-.55c0-.695-.56-1.25-1.25-1.25h-.405M.5 9.5v-.55c0-.695.555-1.25 1.25-1.25h.4m6.515 1.8v-.805c0-.97-.785-1.75-1.75-1.75h-1.84c-.97 0-1.75.78-1.75 1.75v.8"
    />
  </svg>
);
