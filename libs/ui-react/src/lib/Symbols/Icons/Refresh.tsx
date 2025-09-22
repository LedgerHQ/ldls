import createIcon from '../../Components/Icon/createIcon';

/**
 * Refresh icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:Refresh Storybook}
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
  'Refresh',
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
      d="M13.328 8.021a5.3 5.3 0 0 1-1.557 3.75 5.334 5.334 0 0 1-8.453-1.22m-.649-2.638A5.334 5.334 0 0 1 12.682 5.45m-2.047.001h2.357V3.093M5.365 10.55H3.008v2.357"
    />
  </svg>,
);
