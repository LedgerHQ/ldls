import createIcon from "../../Components/Icon/createIcon";

/**
 * Youtube icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Youtube Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Youtube } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Youtube />
 *
 * @example
 * // With custom size and className
 * <Youtube size={40} className="text-warning" />
 */
export const Youtube = createIcon(
  "Youtube",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.103 2.474c.452.123.807.486.928.947.219.835.219 2.579.219 2.579s0 1.744-.22 2.579a1.33 1.33 0 0 1-.928.947C9.284 9.75 6 9.75 6 9.75s-3.284 0-4.102-.224a1.33 1.33 0 0 1-.928-.947C.75 7.744.75 6 .75 6s0-1.744.22-2.579c.12-.461.476-.824.928-.947C2.716 2.25 6 2.25 6 2.25s3.284 0 4.103.224M7.679 6l-2.73-1.607v3.214z"
      clipRule="evenodd"
    />
  </svg>
);
