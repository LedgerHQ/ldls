import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinPercent icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:CoinPercent Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CoinPercent } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <CoinPercent />
 *
 * @example
 * // With custom size and className
 * <CoinPercent size={40} className="text-warning" />
 */
export const CoinPercent = createIcon(
  "CoinPercent",
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
      d="M5.895 4.6 7.6 2.89m-1.815-.065c0-.025.015-.046.04-.046.02 0 .04.016.04.04-.005.02-.02.04-.045.04-.025-.005-.045-.02-.045-.045V2.81M4 3.5v-.85C4 1.735 4.735 1 5.65 1h2.2c.91 0 1.65.735 1.65 1.65v2.2c0 .91-.74 1.65-1.65 1.65H7.5m.213-1.83c-.006.02-.02.04-.046.04-.025-.005-.045-.02-.045-.045s.016-.045.04-.045c.02 0 .04.015.04.04M1.5 6.3v3.4c0 .44.895.8 2 .8 1.1 0 1.995-.36 2-.8V6.3M1.5 8c0 .44.89.8 1.995.8 1.1 0 2-.36 2-.8m0-1.7c0 .44-.9.8-2 .8-1.105 0-2-.36-2-.8 0-.445.895-.8 2-.8s1.995.355 2 .8"
    />
  </svg>
);
