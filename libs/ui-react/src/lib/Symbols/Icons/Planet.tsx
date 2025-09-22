import createIcon from "../../Components/Icon/createIcon";

/**
 * Planet icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Planet Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Planet } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Planet />
 *
 * @example
 * // With custom size and className
 * <Planet size={40} className="text-warning" />
 */
export const Planet = createIcon(
  "Planet",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_3_282)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.865 6c0-1.18.955-2.135 2.13-2.135m5.4-.985c.57.99-1.38 3.195-4.365 4.915S1.16 10.105.59 9.11m.01.01c-.35-.605.235-1.655 1.415-2.775m6.28-3.62C9.85 2.26 11.05 2.28 11.4 2.88M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_282">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
