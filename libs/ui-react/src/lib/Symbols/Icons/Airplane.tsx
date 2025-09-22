import createIcon from "../../Components/Icon/createIcon";

/**
 * Airplane icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Airplane Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Airplane } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Airplane />
 *
 * @example
 * // With custom size and className
 * <Airplane size={40} className="text-warning" />
 */
export const Airplane = createIcon(
  "Airplane",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_436_164)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.5 6 1 4h.9c.05 0 .15.05.2.1l.8.9h2.4L3.7 1.35c-.1-.15 0-.35.2-.35h.85c.15 0 .3.1.4.2L7.65 5H10c.55 0 1 .45 1 1s-.45 1-1 1H7.65l-2.5 3.8c-.1.15-.25.2-.4.2H3.9c-.2 0-.3-.2-.25-.35L5.25 7h-2.4l-.8.9c-.05.05-.1.1-.2.1H1z"
      />
    </g>
    <defs>
      <clipPath id="clip0_436_164">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
