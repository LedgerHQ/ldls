import createIcon from "../../Components/Icon/createIcon";

/**
 * Spacerocket icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Spacerocket Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Spacerocket } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Spacerocket />
 *
 * @example
 * // With custom size and className
 * <Spacerocket size={40} className="text-warning" />
 */
export const Spacerocket = createIcon(
  "Spacerocket",
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
      d="M8 6.5v2.192a.5.5 0 0 1-.276.448l-1.208.604a.5.5 0 0 1-.698-.29L5.5 8.502m-2.001-2-.954-.319a.5.5 0 0 1-.289-.698l.605-1.208a.5.5 0 0 1 .447-.277H5.5m3.049 2.063-2.7 2.16a.5.5 0 0 1-.666-.038L3.816 6.817a.5.5 0 0 1-.037-.666l2.16-2.7a5.2 5.2 0 0 1 4.063-1.953.5.5 0 0 1 .5.5c0 1.581-.719 3.076-1.953 4.064m-5.675 4.233-1.376.207.207-1.376a1.028 1.028 0 1 1 1.169 1.17"
    />
  </svg>
);
