import createIcon from "../../Components/Icon/createIcon";

/**
 * ShieldCheck icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ShieldCheck Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ShieldCheck } from '@ldls/ui-react/symbols';
 *
 * <ShieldCheck />
 *
 * @example
 * // With custom size and className
 * <ShieldCheck size={40} className="text-warning" />
 */
export const ShieldCheck = createIcon(
  "ShieldCheck",
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
      d="M7.625 5.063 5.75 6.938 4.625 5.813M10 5.59c0 2.27-1.71 4.394-4 4.909-2.293-.52-4-2.64-4-4.909V3.808c0-.41.245-.775.62-.93l2.5-1.025a2.27 2.27 0 0 1 1.755 0l2.5 1.02c.375.15.62.515.62.925V5.58z"
    />
  </svg>
);
