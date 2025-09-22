import createIcon from "../../Components/Icon/createIcon";

/**
 * Label icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Label Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Label } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Label />
 *
 * @example
 * // With custom size and className
 * <Label size={40} className="text-warning" />
 */
export const Label = createIcon(
  "Label",
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
      d="M4.157 3.88a.195.195 0 1 1-.276.275.195.195 0 0 1 .276-.276"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.622 1.513 5.047 1.5a1 1 0 0 1 .708.29l4.453 4.454a1 1 0 0 1 0 1.415L7.66 10.207a1 1 0 0 1-1.415 0L1.79 5.75a1 1 0 0 1-.29-.7V3.644a1 1 0 0 1 .29-.701l1.14-1.14a1 1 0 0 1 .692-.29"
      clipRule="evenodd"
    />
  </svg>
);
