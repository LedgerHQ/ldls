import createIcon from "../../Components/Icon/createIcon";

/**
 * PiggyBank icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:PiggyBank Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { PiggyBank } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <PiggyBank />
 *
 * @example
 * // With custom size and className
 * <PiggyBank size={40} className="text-warning" />
 */
export const PiggyBank = createIcon(
  "PiggyBank",
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
      d="M6.985 2.01c.68.68.68 1.79 0 2.47-.685.68-1.795.68-2.475 0a1.75 1.75 0 0 1 0-2.475 1.74 1.74 0 0 1 2.47 0M8.514 5.98c.005.005.005.02 0 .03a.04.04 0 0 1-.035 0 .024.024 0 0 1 0-.035c.005-.01.02-.01.03 0M7.49 3.43c.16-.045.315-.105.46-.195.23-.15.5-.235.795-.235h.5v1.275c.359.32.64.725.81 1.19h.435c.275 0 .5.22.5.5v1.53c0 .275-.225.5-.5.5h-.66c-.265.45-.645.83-1.095 1.095v.9c0 .274-.225.5-.5.5h-1c-.28 0-.5-.226-.5-.5v-.5h-1.75v.43c0 .274-.225.5-.5.5h-1c-.28 0-.5-.226-.5-.5V8.715c-.615-.55-1-1.345-1-2.235 0-1.325.86-2.446 2.045-2.845M1.14 5a.78.78 0 0 0-.394.675c0 .435.35.789.785.789h.461M4.25 5h3"
    />
  </svg>
);
