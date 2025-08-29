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
    viewBox="0 0 16 16"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M5 2.667v2m8.667 8.666-2.667-6-2.667 6M8.927 12h4.146m-10.74-2c2.73-.22 5.118-2.607 5.334-5.333H2.334M7.667 10C5.96 9.86 4.468 8.367 4.333 6.667"
    />
  </svg>
);
