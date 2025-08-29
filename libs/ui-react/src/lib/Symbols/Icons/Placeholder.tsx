import createIcon from "../../Components/Icon/createIcon";

/**
 * Placeholder icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Placeholder Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Placeholder } from '@ldls/ui-react/symbols';
 *
 * <Placeholder />
 *
 * @example
 * // With custom size and className
 * <Placeholder size={40} className="text-warning" />
 */
export const Placeholder = createIcon(
  "Placeholder",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <g clipPath="url(#clip0_5625_429)">
      <path
        stroke="currentColor"
        strokeWidth={1.3}
        d="M1.889 1.889 14.11 14.11m-12.222 0L14.11 1.89M1.333 1.333h13.334v13.334H1.333z"
      />
    </g>
    <defs>
      <clipPath id="clip0_5625_429">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
