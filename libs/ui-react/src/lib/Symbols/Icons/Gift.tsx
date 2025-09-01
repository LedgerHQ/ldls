import createIcon from "../../Components/Icon/createIcon";

/**
 * Gift icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Gift Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Gift } from '@ldls/ui-react/symbols';
 *
 * <Gift />
 *
 * @example
 * // With custom size and className
 * <Gift size={40} className="text-warning" />
 */
export const Gift = createIcon(
  "Gift",
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
      d="M6 10.5V4m1.848-.695c-.54.56-1.39.694-1.8.694M6.045 4s-.25-1.56.36-2.19m1.44 1.495a1.097 1.097 0 0 0 0-1.5.985.985 0 0 0-1.437 0m-.463 2.194c-.41 0-1.26-.134-1.795-.694-.4-.415-.4-1.085 0-1.5a.986.986 0 0 1 1.438 0M5.95 4s.245-1.56-.365-2.19M9.5 6v4c0 .275-.225.5-.5.5H3c-.28 0-.5-.225-.5-.5V6M10 4H2c-.276 0-.5.22-.5.5v1c0 .275.22.5.5.5h8c.275 0 .5-.225.5-.5v-1c0-.28-.225-.5-.5-.5"
    />
  </svg>
);
