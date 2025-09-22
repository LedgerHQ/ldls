import createIcon from "../../Components/Icon/createIcon";

/**
 * LifeRing icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:LifeRing Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { LifeRing } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <LifeRing />
 *
 * @example
 * // With custom size and className
 * <LifeRing size={40} className="text-warning" />
 */
export const LifeRing = createIcon(
  "LifeRing",
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
      d="M7.235 4.765 9.18 2.82M2.82 9.18l1.945-1.945m0-2.47L2.82 2.82m6.36 6.36L7.235 7.235M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
    />
  </svg>
);
