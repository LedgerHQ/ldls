import createIcon from "../../Components/Icon/createIcon";

/**
 * Experiment icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Experiment Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Experiment } from '@ldls/ui-react/symbols';
 *
 * <Experiment />
 *
 * @example
 * // With custom size and className
 * <Experiment size={40} className="text-warning" />
 */
export const Experiment = createIcon(
  "Experiment",
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
      d="M7 3v2.085c0 .265.105.515.29.705L9.7 8.2c.187.188.29.44.29.705v.585c0 .55-.45 1-1 1h-6a1 1 0 0 1-1-1V8.9c0-.265.105-.52.29-.71l2.41-2.415c.187-.187.29-.445.29-.71v-2.09M7 3c.275 0 .5-.225.5-.5V2c0-.28-.225-.5-.5-.5H5c-.28 0-.5.224-.5.5v.5c0 .275.22.5.5.5zM2.09 8.5h7.82m-5-3h2.18"
    />
  </svg>
);
