import createIcon from '../../Components/Icon/createIcon';

/**
 * ArrowDown icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ArrowDown Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ArrowDown } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <ArrowDown />
 *
 * @example
 * // With custom size and className
 * <ArrowDown size={40} className="text-warning" />
 */
export const ArrowDown = createIcon(
  'ArrowDown',
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.3}
      d='M8 12.667V3.333m3.334 5.994-3.34 3.333-3.34-3.34'
    />
  </svg>,
);
