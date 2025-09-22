import createIcon from "../../Components/Icon/createIcon";

/**
 * RecoveryKey icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:RecoveryKey Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { RecoveryKey } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <RecoveryKey />
 *
 * @example
 * // With custom size and className
 * <RecoveryKey size={40} className="text-warning" />
 */
export const RecoveryKey = createIcon(
  "RecoveryKey",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_7062_10)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.75 3.5H3.5v.75M4.75 8.5H3.5v-.75M7.25 3.5H8.5v.75M7.25 8.5H8.5v-.75M2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11"
      />
    </g>
    <defs>
      <clipPath id="clip0_7062_10">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
