import createIcon from "../../Components/Icon/createIcon";

/**
 * WalletSearch icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:WalletSearch Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { WalletSearch } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <WalletSearch />
 *
 * @example
 * // With custom size and className
 * <WalletSearch size={40} className="text-warning" />
 */
export const WalletSearch = createIcon(
  "WalletSearch",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m3.587 12.08-1.254 1.253m-.333-6v-3c0-.926.74-1.666 1.667-1.666h8c.92 0 1.666.74 1.666 1.666v2m0 0h-1c-.926 0-1.666.74-1.666 1.667 0 .92.74 1.667 1.666 1.667h1m0-3.334c.367 0 .667.294.667.667v2c0 .367-.3.667-.667.667m0 0v2c0 .92-.746 1.666-1.666 1.666h-3M5 8.667a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
    />
  </svg>
);
