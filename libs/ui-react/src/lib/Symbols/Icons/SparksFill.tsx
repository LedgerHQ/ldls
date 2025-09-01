import createIcon from "../../Components/Icon/createIcon";

/**
 * SparksFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:SparksFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { SparksFill } from '@ldls/ui-react/symbols';
 *
 * <SparksFill />
 *
 * @example
 * // With custom size and className
 * <SparksFill size={40} className="text-warning" />
 */
export const SparksFill = createIcon(
  "SparksFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      d="M6 1a.25.25 0 0 0-.5 0v.167c0 .292-.109.57-.298.771a.96.96 0 0 1-.702.312.25.25 0 0 0 0 .5c.26 0 .513.11.702.312s.298.479.298.771V4A.25.25 0 0 0 6 4v-.167c0-.292.109-.57.298-.771A.96.96 0 0 1 7 2.75a.25.25 0 0 0 0-.5.96.96 0 0 1-.702-.312A1.13 1.13 0 0 1 6 1.167zM9 3.95a.25.25 0 0 0-.5 0c0 .413-.16.808-.442 1.099S7.396 5.5 7 5.5A.25.25 0 0 0 7 6c.396 0 .776.162 1.058.451s.442.686.442 1.099a.25.25 0 0 0 .5 0c0-.413.16-.808.442-1.099S10.104 6 10.5 6a.25.25 0 1 0 0-.5c-.396 0-.776-.162-1.058-.451A1.58 1.58 0 0 1 9 3.95M4.5 5.5a.25.25 0 0 0-.5 0A2.5 2.5 0 0 1 1.5 8a.25.25 0 0 0 0 .5A2.5 2.5 0 0 1 4 11a.25.25 0 1 0 .5 0A2.5 2.5 0 0 1 7 8.5.25.25 0 0 0 7 8a2.5 2.5 0 0 1-2.5-2.5"
    />
  </svg>
);
