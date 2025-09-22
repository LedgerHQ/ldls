import createIcon from "../../Components/Icon/createIcon";

/**
 * Support icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Support Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Support } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Support />
 *
 * @example
 * // With custom size and className
 * <Support size={40} className="text-warning" />
 */
export const Support = createIcon(
  "Support",
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
      d="M9.25 5v-.25a3.25 3.25 0 1 0-6.5 0V5m4.188 5a.625.625 0 0 0-.625-.625h-.625a.625.625 0 0 0 0 1.25h.625c.345 0 .625-.28.625-.625m0 0h1.06c.55 0 1-.45 1-1v-.5m.502 0H9c-.28 0-.5-.225-.5-.5V5.5c0-.28.22-.5.5-.5h.5a1 1 0 0 1 1 1v1.5c0 .55-.45 1-1 1M3 8.5h-.5c-.552 0-1-.45-1-1V6c0-.555.448-1 1-1H3c.275 0 .5.22.5.5V8c0 .275-.225.5-.5.5"
    />
  </svg>
);
