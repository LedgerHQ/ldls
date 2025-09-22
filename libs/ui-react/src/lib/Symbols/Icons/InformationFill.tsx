import createIcon from "../../Components/Icon/createIcon";

/**
 * InformationFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:InformationFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { InformationFill } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <InformationFill />
 *
 * @example
 * // With custom size and className
 * <InformationFill size={40} className="text-warning" />
 */
export const InformationFill = createIcon(
  "InformationFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      d="M6 1.012A4.988 4.988 0 1 1 6 10.988 4.988 4.988 0 0 1 6 1.012M6 5.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.5-.5m-.008-1.999H5.99a.622.622 0 0 0-.62.625c0 .327.266.624.625.624a.626.626 0 0 0 .625-.625.624.624 0 0 0-.625-.625z"
    />
  </svg>
);
