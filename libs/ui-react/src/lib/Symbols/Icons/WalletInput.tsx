import createIcon from "../../Components/Icon/createIcon";

/**
 * WalletInput icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:WalletInput Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { WalletInput } from '@ldls/ui-react/symbols';
 *
 * <WalletInput />
 *
 * @example
 * // With custom size and className
 * <WalletInput size={40} className="text-warning" />
 */
export const WalletInput = createIcon(
  "WalletInput",
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
      d="M1.498 3.499h8.003a1 1 0 0 1 1 1v4.752c0 .691-.559 1.25-1.25 1.25h-2.75m2-7.002v-.5a1 1 0 0 0-1-1H2.749c-.691 0-1.25.56-1.25 1.25V7.5m3.5 2H1.5m3.5 0-1 1m1-1-1-1m4.502-1.5H8"
    />
  </svg>
);
