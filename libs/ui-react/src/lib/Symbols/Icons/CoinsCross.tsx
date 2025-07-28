import createIcon from "../../Components/Icon/createIcon";

/**
 * CoinsCross icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:CoinsCross Storybook}
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CoinsCross } from '@ldls/ui-react/symbols';
 *
 * <CoinsCross />
 *
 * @example
 * // With custom size and className
 * <CoinsCross size={40} className="text-warning" />
 */
export const CoinsCross = createIcon(
  "CoinsCross",
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
      d="M2 5.333c0 .734 1.487 1.334 3.333 1.334M2 5.333v5.334C2 11.4 3.493 12 5.333 12M2 5.333c0-.353.351-.692.976-.942S4.45 4 5.333 4s1.732.14 2.357.39.977.59.977.943M2 5.333c0 .354.351.693.976.943s1.473.39 2.357.39m0 0c.884 0 1.732-.14 2.357-.39s.977-.59.977-.943m0 0V7m3-2.667 2-2m0 2-2-2M2 8c0 .733 1.487 1.327 3.333 1.327m-.006.006c-1.847 0-3.334-.6-3.334-1.333m5.34 2c0 .733 1.487 1.333 3.334 1.333 1.84 0 3.333-.6 3.333-1.333v2.667C14 13.4 12.506 14 10.666 14c-1.847 0-3.334-.6-3.334-1.333zm6.665 0c0-.74-1.493-1.333-3.333-1.333S7.33 9.26 7.33 10c0 .733 1.487 1.333 3.334 1.333 1.84 0 3.333-.6 3.333-1.333"
    />
  </svg>
);
