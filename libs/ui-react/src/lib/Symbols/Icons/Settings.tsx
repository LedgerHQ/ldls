import createIcon from "../../Components/Icon/createIcon";

/**
 * Settings icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Settings Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Settings } from '@ldls/ui-react/symbols';
 *
 * <Settings />
 *
 * @example
 * // With custom size and className
 * <Settings size={40} className="text-warning" />
 */
export const Settings = createIcon(
  "Settings",
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
      d="M6.4 1.5a.5.5 0 0 1 .47.331l.255.708c.04.11.118.204.22.264l.754.434a.5.5 0 0 0 .339.06l.74-.134a.5.5 0 0 1 .522.242l.4.69a.5.5 0 0 1-.05.573l-.485.574a.5.5 0 0 0-.119.323v.87a.5.5 0 0 0 .119.323l.485.574a.5.5 0 0 1 .05.573l-.4.69a.5.5 0 0 1-.522.242l-.74-.133a.5.5 0 0 0-.338.058l-.754.435a.5.5 0 0 0-.221.264l-.254.708a.5.5 0 0 1-.471.331h-.8a.5.5 0 0 1-.47-.331l-.254-.708a.5.5 0 0 0-.221-.264l-.754-.434a.5.5 0 0 0-.338-.06l-.74.134a.5.5 0 0 1-.523-.242l-.4-.69a.5.5 0 0 1 .05-.573l.486-.574a.5.5 0 0 0 .118-.323v-.87a.5.5 0 0 0-.118-.323l-.481-.574a.5.5 0 0 1-.05-.573l.4-.69a.5.5 0 0 1 .522-.242l.74.134a.5.5 0 0 0 .339-.06l.754-.434a.5.5 0 0 0 .22-.264l.254-.708A.5.5 0 0 1 5.6 1.5z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 7.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
    />
  </svg>
);
