import createIcon from "../../Components/Icon/createIcon";

/**
 * Repair icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Repair Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Repair } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Repair />
 *
 * @example
 * // With custom size and className
 * <Repair size={40} className="text-warning" />
 */
export const Repair = createIcon(
  "Repair",
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
      d="M5.63 4.801 1.82 8.606a1.106 1.106 0 0 0-.005 1.565h0c.43.43 1.13.43 1.564 0l3.805-3.81v0a2.49 2.49 0 0 0 3.155-1.55l.015-.06V4.75a2.5 2.5 0 0 0 .11-1 .505.505 0 0 0-.855-.29l-.905.9a.257.257 0 0 1-.355 0l-.005-.005-.765-.765c-.1-.1-.1-.26.09-.45l.805-.81a.51.51 0 0 0 .005-.71.5.5 0 0 0-.29-.145c-.34-.035-.68 0-1 .11V1.58a2.48 2.48 0 0 0-1.63 3.115l.015.055z"
    />
  </svg>
);
