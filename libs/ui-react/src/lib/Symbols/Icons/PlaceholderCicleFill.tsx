import createIcon from "../../Components/Icon/createIcon";

/**
 * PlaceholderCicleFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:PlaceholderCicleFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { PlaceholderCicleFill } from '@ldls/ui-react/symbols';
 *
 * <PlaceholderCicleFill />
 *
 * @example
 * // With custom size and className
 * <PlaceholderCicleFill size={40} className="text-warning" />
 */
export const PlaceholderCicleFill = createIcon(
  "PlaceholderCicleFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      d="M6 1.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6M3.1 3.1v5.8h5.8V3.1zm4.093 4.8H4.807L6 6.707zM5.293 6 4.1 7.193V4.807zM7.9 7.193 6.707 6 7.9 4.807zM7.193 4.1 6 5.293 4.807 4.1z"
    />
  </svg>
);
