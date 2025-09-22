import createIcon from "../../Components/Icon/createIcon";

/**
 * Refresh icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Refresh Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Refresh } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Refresh />
 *
 * @example
 * // With custom size and className
 * <Refresh size={40} className="text-warning" />
 */
export const Refresh = createIcon(
  "Refresh",
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
      d="M9.996 6.016a3.98 3.98 0 0 1-1.167 2.813 4 4 0 0 1-6.34-.916m-.487-1.978a4 4 0 0 1 7.51-1.848m-1.535 0h1.767V2.32m-5.72 5.593H2.256V9.68"
    />
  </svg>
);
