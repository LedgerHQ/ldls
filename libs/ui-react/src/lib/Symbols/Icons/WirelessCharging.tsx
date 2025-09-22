import createIcon from "../../Components/Icon/createIcon";

/**
 * WirelessCharging icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:WirelessCharging Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { WirelessCharging } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <WirelessCharging />
 *
 * @example
 * // With custom size and className
 * <WirelessCharging size={40} className="text-warning" />
 */
export const WirelessCharging = createIcon(
  "WirelessCharging",
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
      d="M6.75 8.5v1c0 .275-.225.5-.5.5h-.5c-.28 0-.5-.225-.5-.5v-1M6 11v-1m-.124-6.25L5.246 5h1.5l-.63 1.25M2.5 1.5h7a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1"
    />
  </svg>
);
