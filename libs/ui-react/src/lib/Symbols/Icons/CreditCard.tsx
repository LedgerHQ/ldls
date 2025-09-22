import createIcon from "../../Components/Icon/createIcon";

/**
 * CreditCard icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:CreditCard Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { CreditCard } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <CreditCard />
 *
 * @example
 * // With custom size and className
 * <CreditCard size={40} className="text-warning" />
 */
export const CreditCard = createIcon(
  "CreditCard",
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
      d="M1.5 4.5h9m-5.715 2H3.5m5.5 3H3A1.5 1.5 0 0 1 1.5 8V4A1.5 1.5 0 0 1 3 2.5h6A1.5 1.5 0 0 1 10.5 4v4A1.5 1.5 0 0 1 9 9.5"
    />
  </svg>
);
