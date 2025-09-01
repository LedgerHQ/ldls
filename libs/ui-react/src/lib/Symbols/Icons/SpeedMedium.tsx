import createIcon from "../../Components/Icon/createIcon";

/**
 * SpeedMedium icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:SpeedMedium Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { SpeedMedium } from '@ldls/ui-react/symbols';
 *
 * <SpeedMedium />
 *
 * @example
 * // With custom size and className
 * <SpeedMedium size={40} className="text-warning" />
 */
export const SpeedMedium = createIcon(
  "SpeedMedium",
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
      d="M1.894 4.655a4.46 4.46 0 0 0 1.27 5.34m5.66-.006a4.49 4.49 0 0 0 1.67-3.5A4.51 4.51 0 0 0 7.5 2.252M3.16 9.989a4.49 4.49 0 0 1-1.67-3.5 4.51 4.51 0 0 1 2.994-4.237M6 5.5V2m-.016 3.495a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
  </svg>
);
