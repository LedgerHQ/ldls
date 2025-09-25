import createIcon from '../../Components/Icon/createIcon';

/**
 * Home icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Home Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Home } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Home />
 *
 * @example
 * // With custom size and className
 * <Home size={40} className="text-warning" />
 */
export const Home = createIcon(
  'Home',
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
      d='M2.667 5.733V14h10.666V5.733m-12 .934L8 2l6.667 4.667M10 14v-4c0-.74-.6-1.333-1.333-1.333H7.333C6.593 8.667 6 9.26 6 10v4'
    />
  </svg>,
);
