import createIcon from '../../Components/Icon/createIcon';

/**
 * Range icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:Range Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Range } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Range />
 *
 * @example
 * // With custom size and className
 * <Range size={40} className="text-warning" />
 */
export const Range = createIcon(
  'Range',
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
      d="M2 13.333h5.333M2 10.667h4M2 8h5.333M2 5.333h4M2 2.667h5.333M12 13.333V2.667m0 10.666 1.667-1.666M12 13.333l-1.667-1.666m1.667-9-1.667 1.666M12 2.667l1.667 1.666"
    />
  </svg>,
);
