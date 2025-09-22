import createIcon from "../../Components/Icon/createIcon";

/**
 * NetworkWarning icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:NetworkWarning Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { NetworkWarning } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <NetworkWarning />
 *
 * @example
 * // With custom size and className
 * <NetworkWarning size={40} className="text-warning" />
 */
export const NetworkWarning = createIcon(
  "NetworkWarning",
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
      d="M8 1.5h1.64c.47 0 .855.38.855.855v1.64M4 10.5H2.355a.86.86 0 0 1-.86-.86V7.995m6.98.215v-.92m0 1.93c-.024 0-.05.02-.044.045 0 .025.02.045.045.045s.044-.025.044-.05a.054.054 0 0 0-.05-.05m.877-2.91 1.52 2.707c.37.665-.11 1.49-.875 1.49h-3.05c-.764 0-1.25-.825-.875-1.495l1.52-2.71a.997.997 0 0 1 1.74 0zM2.58 2.518c-.61.08-1.081.6-1.081 1.232 0 .69.56 1.25 1.25 1.25h2.75a1 1 0 1 0 0-2 1.5 1.5 0 0 0-2.92-.482z"
    />
  </svg>
);
