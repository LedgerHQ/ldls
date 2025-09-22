import createIcon from "../../Components/Icon/createIcon";

/**
 * Facebook icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Facebook Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Facebook } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Facebook />
 *
 * @example
 * // With custom size and className
 * <Facebook size={40} className="text-warning" />
 */
export const Facebook = createIcon(
  "Facebook",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      d="M11.25 6.033C11.25 3.117 8.898.75 6 .75S.75 3.117.75 6.033c0 2.638 1.92 4.825 4.434 5.217V7.556H3.843V6.033h1.34V4.868c0-1.322.78-2.056 1.98-2.056.573 0 1.167.109 1.167.109v1.29h-.66c-.654 0-.859.413-.859.826v.99h1.46l-.233 1.524H6.811v3.694c2.52-.387 4.439-2.574 4.439-5.212"
    />
  </svg>
);
