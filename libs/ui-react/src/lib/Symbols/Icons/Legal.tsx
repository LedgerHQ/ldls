import createIcon from "../../Components/Icon/createIcon";

/**
 * Legal icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Legal Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Legal } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Legal />
 *
 * @example
 * // With custom size and className
 * <Legal size={40} className="text-warning" />
 */
export const Legal = createIcon(
  "Legal",
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
      d="M4.5 10.5h-2a1 1 0 0 1-1-1v-7c0-.555.445-1 1-1h6a1 1 0 0 1 1 1v2m-6-.5h3m-3 2h1m2 4.5h4m-3.5 0V8.21m1.5 2.29V8.21M10 10.5V8.21m-3.5 0h4v-.895l-2-.82-2 .815z"
    />
  </svg>
);
