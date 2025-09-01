import createIcon from "../../Components/Icon/createIcon";

/**
 * ExternalLink icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ExternalLink Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ExternalLink } from '@ldls/ui-react/symbols';
 *
 * <ExternalLink />
 *
 * @example
 * // With custom size and className
 * <ExternalLink size={40} className="text-warning" />
 */
export const ExternalLink = createIcon(
  "ExternalLink",
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
      d="m6 6 3.75-3.75m0 0V5m0-2.75H7m-2.5 0H3.25a1 1 0 0 0-1 1v5.5c0 .55.447 1 1 1h5.5c.55 0 1-.45 1-1V7.5"
    />
  </svg>
);
