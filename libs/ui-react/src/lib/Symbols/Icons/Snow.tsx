import createIcon from "../../Components/Icon/createIcon";

/**
 * Snow icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Snow Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Snow } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Snow />
 *
 * @example
 * // With custom size and className
 * <Snow size={40} className="text-warning" />
 */
export const Snow = createIcon(
  "Snow",
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
      d="M6 1.5v9m1.084-8.29L5.999 3.29 4.914 2.206M10 3.69 2 8.31m7.82-3.266-1.485-.4.395-1.485M2.176 6.955l1.48.395-.4 1.48M2 3.69l8 4.62M2.177 5.044l1.48-.4-.4-1.485M9.82 6.955l-1.485.395.395 1.48m-3.814.955L5.996 8.7l1.08 1.08"
    />
  </svg>
);
