import createIcon from "../../Components/Icon/createIcon";

/**
 * Whatsapp icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Whatsapp Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Whatsapp } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Whatsapp />
 *
 * @example
 * // With custom size and className
 * <Whatsapp size={40} className="text-warning" />
 */
export const Whatsapp = createIcon(
  "Whatsapp",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.464 5.466c.268.435.635.802 1.07 1.07l.411-.246a.5.5 0 0 1 .57.038l.797.638a.5.5 0 0 1 .038.747l-.36.355a1.5 1.5 0 0 1-1.855.2 8.1 8.1 0 0 1-2.403-2.403 1.5 1.5 0 0 1 .2-1.855l.355-.36a.5.5 0 0 1 .747.038l.638.797a.5.5 0 0 1 .038.57z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.434 9.993-1.349.226a.264.264 0 0 1-.303-.304l.225-1.349a4.759 4.759 0 1 1 1.427 1.427"
      clipRule="evenodd"
    />
  </svg>
);
