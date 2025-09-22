import createIcon from "../../Components/Icon/createIcon";

/**
 * ChevronBigTop icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ChevronBigTop Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ChevronBigTop } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <ChevronBigTop />
 *
 * @example
 * // With custom size and className
 * <ChevronBigTop size={40} className="text-warning" />
 */
export const ChevronBigTop = createIcon(
  "ChevronBigTop",
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
      d="m10.5 8.25-4.505-4.5L1.5 8.25"
    />
  </svg>
);
