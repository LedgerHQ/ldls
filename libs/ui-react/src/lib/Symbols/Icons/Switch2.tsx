import createIcon from "../../Components/Icon/createIcon";

/**
 * Switch2 icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Switch2 Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Switch2 } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Switch2 />
 *
 * @example
 * // With custom size and className
 * <Switch2 size={40} className="text-warning" />
 */
export const Switch2 = createIcon(
  "Switch2",
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
      d="M8.705 5.29c.39.39.39 1.02 0 1.41-.395.39-1.025.39-1.415 0a.993.993 0 0 1 0-1.415.987.987 0 0 1 1.41 0M4 3.5h4a2.5 2.5 0 0 1 0 5H4a2.5 2.5 0 0 1 0-5"
    />
  </svg>
);
