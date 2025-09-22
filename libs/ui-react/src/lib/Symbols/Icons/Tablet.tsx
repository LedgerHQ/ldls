import createIcon from "../../Components/Icon/createIcon";

/**
 * Tablet icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Tablet Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Tablet } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Tablet />
 *
 * @example
 * // With custom size and className
 * <Tablet size={40} className="text-warning" />
 */
export const Tablet = createIcon(
  "Tablet",
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
      d="M6 8.938A.064.064 0 0 0 5.934 9c0 .03.026.063.063.063.03 0 .063-.03.063-.063a.064.064 0 0 0-.065-.062m3.505.437v-6.75C9.5 2 8.995 1.5 8.375 1.5h-4.75C3 1.5 2.5 2 2.5 2.625v6.75c0 .62.5 1.125 1.125 1.125h4.75c.62 0 1.125-.505 1.125-1.125"
    />
  </svg>
);
