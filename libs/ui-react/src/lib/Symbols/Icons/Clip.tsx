import createIcon from "../../Components/Icon/createIcon";

/**
 * Clip icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Clip Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Clip } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Clip />
 *
 * @example
 * // With custom size and className
 * <Clip size={40} className="text-warning" />
 */
export const Clip = createIcon(
  "Clip",
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
      d="M6.725 4.69 3.96 7.455a.81.81 0 0 0 0 1.16h-.005c.32.32.84.32 1.16 0l4.31-4.313c.64-.645.64-1.685 0-2.325L9.42 1.97a1.643 1.643 0 0 0-2.325-.005H7.09l-4.315 4.31a2.457 2.457 0 0 0-.005 3.48c.96.96 2.52.96 3.48 0v-.005l3.15-3.15"
    />
  </svg>
);
