import createIcon from "../../Components/Icon/createIcon";

/**
 * EyeCross icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:EyeCross Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { EyeCross } from '@ldls/ui-react/symbols';
 *
 * <EyeCross />
 *
 * @example
 * // With custom size and className
 * <EyeCross size={40} className="text-warning" />
 */
export const EyeCross = createIcon(
  "EyeCross",
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
      d="M7.275 6.775a1.51 1.51 0 0 1-2.06.525 1.507 1.507 0 0 1-.53-2.06c.124-.22.304-.4.524-.53m3.786 3.785a4.97 4.97 0 0 1-3 1A4.73 4.73 0 0 1 1.716 6.95h-.002a2.15 2.15 0 0 1 0-1.915c.41-.825 1.07-1.5 1.885-1.935m6.61 3.965c.02-.04.045-.075.065-.115a2.18 2.18 0 0 0 0-1.915 4.72 4.72 0 0 0-4.28-2.545c-.116 0-.226.015-.336.02M10.5 10 2 1.5"
    />
  </svg>
);
