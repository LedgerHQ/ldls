import createIcon from "../../Components/Icon/createIcon";

/**
 * Paste icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Paste Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Paste } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Paste />
 *
 * @example
 * // With custom size and className
 * <Paste size={40} className="text-warning" />
 */
export const Paste = createIcon(
  "Paste",
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
      d="M6.25 6.25h2.5M6.25 7.5H7.5M6.25 8.75H8M7.5 3v-.5c0-.55-.45-1-1-1h-4a1 1 0 0 0-1 1v4c0 .555.445 1 1 1H3m1.5-2v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1"
    />
  </svg>
);
