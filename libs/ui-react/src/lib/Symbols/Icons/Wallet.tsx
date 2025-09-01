import createIcon from "../../Components/Icon/createIcon";

/**
 * Wallet icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Wallet Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Wallet } from '@ldls/ui-react/symbols';
 *
 * <Wallet />
 *
 * @example
 * // With custom size and className
 * <Wallet size={40} className="text-warning" />
 */
export const Wallet = createIcon(
  "Wallet",
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
      d="M8.298 6.562c-.105 0-.19.08-.19.185 0 .1.08.188.187.185a.19.19 0 0 0 .188-.187.19.19 0 0 0-.19-.188M1.5 2.5v6.75c0 .55.448 1 1 1h7c.55 0 1-.45 1-1v-5a1 1 0 0 0-1-1H2.25a.75.75 0 0 1-.75-.75m0 0c0-.415.335-.75.75-.75H8.5"
    />
  </svg>
);
