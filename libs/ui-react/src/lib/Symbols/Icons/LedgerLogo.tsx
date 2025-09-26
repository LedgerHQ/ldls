import createIcon from '../../Components/Icon/createIcon';

/**
 * LedgerLogo icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:LedgerLogo Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { LedgerLogo } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <LedgerLogo />
 *
 * @example
 * // With custom size and className
 * <LedgerLogo size={40} className="text-warning" />
 */
export const LedgerLogo = createIcon(
  'LedgerLogo',
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
      d='M2 4.667V3a1 1 0 0 1 1-1h3m3.333 8H7.667a1 1 0 0 1-1-1V6M14 4.667V3a1 1 0 0 0-1-1h-3m-8 9.333V13a1 1 0 0 0 1 1h3m8-2.667V13a1 1 0 0 1-1 1h-3'
    />
  </svg>,
);
