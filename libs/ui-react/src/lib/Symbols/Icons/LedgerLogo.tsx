import createIcon from "../../Components/Icon/createIcon";

/**
 * LedgerLogo icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:LedgerLogo Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { LedgerLogo } from '@ldls/ui-react/symbols';
 *
 * <LedgerLogo />
 *
 * @example
 * // With custom size and className
 * <LedgerLogo size={40} className="text-warning" />
 */
export const LedgerLogo = createIcon(
  "LedgerLogo",
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
      d="M1.5 3.5V2.25a.75.75 0 0 1 .75-.75H4.5m2.5 6H5.75A.75.75 0 0 1 5 6.75V4.5m5.5-1V2.25a.75.75 0 0 0-.75-.75H7.5m-6 7v1.25c0 .414.336.75.75.75H4.5m6-2v1.25a.75.75 0 0 1-.75.75H7.5"
    />
  </svg>
);
