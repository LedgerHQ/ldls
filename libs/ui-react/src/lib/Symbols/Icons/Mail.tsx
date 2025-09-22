import createIcon from "../../Components/Icon/createIcon";

/**
 * Mail icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Mail Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Mail } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Mail />
 *
 * @example
 * // With custom size and className
 * <Mail size={40} className="text-warning" />
 */
export const Mail = createIcon(
  "Mail",
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
      d="M1.5 3.5v5c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-5m-9-.1c0 .3.15.55.4.75l3 2.05c.7.45 1.55.45 2.25 0l3-2c.2-.25.35-.5.35-.8 0-.5-.4-.9-.9-.9H2.4c-.5 0-.9.4-.9.9"
    />
  </svg>
);
