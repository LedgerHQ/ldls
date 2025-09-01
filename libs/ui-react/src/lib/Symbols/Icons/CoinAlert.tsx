import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinAlert icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:CoinAlert Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CoinAlert } from '@ldls/ui-react/symbols';
 *
 * <CoinAlert />
 *
 * @example
 * // With custom size and className
 * <CoinAlert size={40} className="text-warning" />
 */
export const CoinAlert = createIcon(
  "CoinAlert",
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
      d="M10.105 6.605a3.5 3.5 0 0 0-4.72-4.717M5 6.87V5.595m0 2.68c-.035 0-.066.025-.066.06 0 .03.026.06.06.06.03 0 .06-.03.06-.065a.066.066 0 0 0-.065-.065M5 10.5c-1.933 0-3.5-1.57-3.5-3.5A3.5 3.5 0 1 1 5 10.5"
    />
  </svg>
);
