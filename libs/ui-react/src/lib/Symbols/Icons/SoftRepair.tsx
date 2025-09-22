import createIcon from "../../Components/Icon/createIcon";

/**
 * SoftRepair icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:SoftRepair Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { SoftRepair } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <SoftRepair />
 *
 * @example
 * // With custom size and className
 * <SoftRepair size={40} className="text-warning" />
 */
export const SoftRepair = createIcon(
  "SoftRepair",
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
      d="M1.5 4.5h9m-5-1.502h-.005v-.006l-.005-.005m-1.24.01h-.005v-.004l-.005-.006M3 2.997h-.005v-.004l-.005-.006M10.5 5.25V3c0-.83-.675-1.5-1.5-1.5H3c-.83 0-1.5.67-1.5 1.5v6A1.5 1.5 0 0 0 3 10.5h2.5m5-1.067a1.6 1.6 0 0 1-.37.6 1.607 1.607 0 0 1-2.54-.375m2.815-1.528a1.606 1.606 0 0 0-2.175-.645c-.135.07-.26.165-.37.27-.17.165-.295.37-.37.6m2.302-.22h.704v-.71M8.21 9.665H7.5v.705"
    />
  </svg>
);
