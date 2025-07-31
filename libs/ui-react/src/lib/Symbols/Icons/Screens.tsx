import createIcon from "../../Components/Icon/createIcon";

/**
 * Screens icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons-react--icon&args=name:Screens Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Screens } from '@ldls/ui-react/symbols';
 *
 * <Screens />
 *
 * @example
 * // With custom size and className
 * <Screens size={40} className="text-warning" />
 */
export const Screens = createIcon(
  "Screens",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M5.332 1.998h5.336m-6.67 2.5h8.004m.233 9.505h-8.47a1.334 1.334 0 0 1-1.327-1.201l-.434-4.335A1.334 1.334 0 0 1 3.331 7h9.338a1.334 1.334 0 0 1 1.327 1.467l-.434 4.335a1.334 1.334 0 0 1-1.327 1.2"
    />
  </svg>
);
