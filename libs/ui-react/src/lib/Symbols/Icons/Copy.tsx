import createIcon from '../../Components/Icon/createIcon';

/**
 * Copy icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:Copy Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Copy } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Copy />
 *
 * @example
 * // With custom size and className
 * <Copy size={40} className="text-warning" />
 */
export const Copy = createIcon(
  'Copy',
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
      d="M10 4v-.667C10 2.6 9.4 2 8.667 2H3.333C2.593 2 2 2.6 2 3.333v5.334C2 9.407 2.593 10 3.333 10H4m2-2.667v5.334C6 13.403 6.597 14 7.333 14h5.334c.736 0 1.333-.597 1.333-1.333V7.333C14 6.597 13.403 6 12.667 6H7.333C6.597 6 6 6.597 6 7.333"
    />
  </svg>,
);
