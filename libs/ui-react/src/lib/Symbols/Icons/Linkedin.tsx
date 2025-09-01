import createIcon from "../../Components/Icon/createIcon";

/**
 * Linkedin icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Linkedin Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Linkedin } from '@ldls/ui-react/symbols';
 *
 * <Linkedin />
 *
 * @example
 * // With custom size and className
 * <Linkedin size={40} className="text-warning" />
 */
export const Linkedin = createIcon(
  "Linkedin",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_3_422)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.083 11.25H1.917A1.167 1.167 0 0 1 .75 10.083V1.917C.75 1.272 1.272.75 1.917.75h8.166c.645 0 1.167.522 1.167 1.167v8.166c0 .645-.522 1.167-1.167 1.167m-1.85-1.458h1.559V6.59c0-1.354-.768-2.01-1.84-2.01a1.76 1.76 0 0 0-1.525.836v-.68H4.926v5.055h1.501V7.138c0-.711.328-1.134.954-1.134.576 0 .852.406.852 1.134zm-6.025-6.65a.93.93 0 0 0 .926.932.93.93 0 0 0 .926-.933.93.93 0 0 0-.926-.933.93.93 0 0 0-.926.933m1.717 6.65H2.359V4.736h1.566z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_422">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
