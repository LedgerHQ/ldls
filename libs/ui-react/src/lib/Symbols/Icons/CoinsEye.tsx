import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsEye icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:CoinsEye Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CoinsEye } from '@ldls/ui-react/symbols';
 *
 * <CoinsEye />
 *
 * @example
 * // With custom size and className
 * <CoinsEye size={40} className="text-warning" />
 */
export const CoinsEye = createIcon(
  "CoinsEye",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_3_164)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 10.75A4.75 4.75 0 1 1 10.75 6m-5.533-.8a1.399 1.399 0 1 1 2.77.383 1.41 1.41 0 0 1-1.195 1.191M9.44 9.2c.025.025.025.07 0 .1a.08.08 0 0 1-.105 0 .073.073 0 0 1 0-.105c.025-.03.07-.03.1 0M5.4 5.2a1.4 1.4 0 1 0 0 2.799 1.4 1.4 0 0 0 0-2.799m2.23 4.396a.62.62 0 0 1 0-.69c.42-.645 1.09-1.16 1.757-1.16.665 0 1.33.51 1.755 1.155a.64.64 0 0 1 0 .69c-.425.641-1.095 1.155-1.76 1.155-.67 0-1.335-.515-1.757-1.155z"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_164">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
