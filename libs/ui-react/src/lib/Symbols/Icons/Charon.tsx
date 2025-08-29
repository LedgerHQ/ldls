import createIcon from "../../Components/Icon/createIcon";

/**
 * Charon icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Charon Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Charon } from '@ldls/ui-react/symbols';
 *
 * <Charon />
 *
 * @example
 * // With custom size and className
 * <Charon size={40} className="text-warning" />
 */
export const Charon = createIcon(
  "Charon",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M11.713 10H8.667M12 12.667H4a2 2 0 0 1-2-2V5.333a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5.334a2 2 0 0 1-2 2"
    />
  </svg>
);
