import createIcon from "../../Components/Icon/createIcon";

/**
 * Dollar icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Dollar Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Dollar } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Dollar />
 *
 * @example
 * // With custom size and className
 * <Dollar size={40} className="text-warning" />
 */
export const Dollar = createIcon(
  "Dollar",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_3_300)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 3.75v.5m0 4v-.5m-1.075-.625c.195.405.62.65 1.07.625a1.03 1.03 0 0 0 1.125-.875c0-.38-.27-.705-.64-.78l-.98-.2a.79.79 0 0 1-.64-.78c.074-.55.574-.94 1.124-.875.45-.03.87.215 1.07.625M6 1.245a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_300">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
