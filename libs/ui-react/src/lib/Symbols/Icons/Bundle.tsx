import createIcon from "../../Components/Icon/createIcon";

/**
 * Bundle icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Bundle Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Bundle } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Bundle />
 *
 * @example
 * // With custom size and className
 * <Bundle size={40} className="text-warning" />
 */
export const Bundle = createIcon(
  "Bundle",
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
      d="M7.2 2.4h.6a.6.6 0 0 1 .6.6v6a.6.6 0 0 1-.6.6h-.6m2.7-7.2h.6a.6.6 0 0 1 .6.6v6a.6.6 0 0 1-.6.6h-.6m-8.1 0h3.3a.6.6 0 0 0 .6-.6V3a.6.6 0 0 0-.6-.6H1.8a.6.6 0 0 0-.6.6v6a.6.6 0 0 0 .6.6Z"
    />
  </svg>
);
