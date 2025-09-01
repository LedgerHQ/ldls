import createIcon from "../../Components/Icon/createIcon";

/**
 * Twitter icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Twitter Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Twitter } from '@ldls/ui-react/symbols';
 *
 * <Twitter />
 *
 * @example
 * // With custom size and className
 * <Twitter size={40} className="text-warning" />
 */
export const Twitter = createIcon(
  "Twitter",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_3_414)">
      <path
        fill="currentColor"
        d="M6.999 5.196 10.908.75h-.926L6.587 4.61 3.877.75H.75l4.1 5.838-4.1 4.662h.926l3.585-4.077 2.862 4.077h3.127zM5.73 6.639l-.415-.581L2.01 1.432h1.423L6.1 5.165l.415.582 3.467 4.852H8.559z"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_414">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
