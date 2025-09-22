import createIcon from "../../Components/Icon/createIcon";

/**
 * DollarConvert icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:DollarConvert Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { DollarConvert } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <DollarConvert />
 *
 * @example
 * // With custom size and className
 * <DollarConvert size={40} className="text-warning" />
 */
export const DollarConvert = createIcon(
  "DollarConvert",
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
      d="M5.875 3.5v.625m0 4.375v-.625M7.115 5a.935.935 0 0 0-.931-.875h-.685a.877.877 0 0 0-.22 1.725l1.171.29a.877.877 0 0 1-.22 1.725h-.685c-.5 0-.9-.39-.935-.88m-1.675-4.05a4.338 4.338 0 0 1 7.401 3.064c0 .33-.045.655-.115.97m-.671-.668.78.78.78-.785M9.065 9.064a4.34 4.34 0 0 1-3.07 1.265A4.338 4.338 0 0 1 1.769 5.02m.677.679-.785-.785-.785.78"
    />
  </svg>
);
