import createIcon from "../../Components/Icon/createIcon";

/**
 * Language icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Language Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Language } from '@ldls/ui-react/symbols';
 *
 * <Language />
 *
 * @example
 * // With custom size and className
 * <Language size={40} className="text-warning" />
 */
export const Language = createIcon(
  "Language",
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
      d="M3.75 2v1.5m6.5 6.5-2-4.5-2 4.5m.445-1h3.11M1.75 7.5c2.047-.165 3.838-1.955 4-4h-4m4 4C4.47 7.395 3.351 6.275 3.25 5"
    />
  </svg>
);
