import createIcon from "../../Components/Icon/createIcon";

/**
 * Stax icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Stax Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Stax } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Stax />
 *
 * @example
 * // With custom size and className
 * <Stax size={40} className="text-warning" />
 */
export const Stax = createIcon(
  "Stax",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      stroke="currentColor"
      d="M9 3.5h.35a.1.1 0 0 1 .1.1v1.3a.1.1 0 0 1-.1.1H9m-5.75 5.5H8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25Z"
    />
  </svg>
);
