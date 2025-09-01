import createIcon from "../../Components/Icon/createIcon";

/**
 * Shapes icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Shapes Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Shapes } from '@ldls/ui-react/symbols';
 *
 * <Shapes />
 *
 * @example
 * // With custom size and className
 * <Shapes size={40} className="text-warning" />
 */
export const Shapes = createIcon(
  "Shapes",
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
      d="M3.282 7.217c0-.32.26-.58.58-.58h.741c.32 0 .58.26.58.58v.741c0 .32-.26.58-.58.58h-.74a.58.58 0 0 1-.58-.58zM8.785 7.588a1.062 1.062 0 1 1-2.125 0 1.062 1.062 0 0 1 2.125 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.802 3.421-.813 1.41a.275.275 0 0 0 .238.413h1.627a.275.275 0 0 0 .239-.412l-.814-1.41a.275.275 0 0 0-.477 0"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.498 3.998a2.5 2.5 0 0 1 2.5-2.5h4.004a2.5 2.5 0 0 1 2.5 2.5v4.004a2.5 2.5 0 0 1-2.5 2.5H3.998a2.5 2.5 0 0 1-2.5-2.5z"
    />
  </svg>
);
