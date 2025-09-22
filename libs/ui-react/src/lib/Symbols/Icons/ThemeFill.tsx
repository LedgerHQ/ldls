import createIcon from "../../Components/Icon/createIcon";

/**
 * ThemeFill icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:ThemeFill Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { ThemeFill } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <ThemeFill />
 *
 * @example
 * // With custom size and className
 * <ThemeFill size={40} className="text-warning" />
 */
export const ThemeFill = createIcon(
  "ThemeFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <path
      fill="currentColor"
      d="m6 10-.02-.5.02 1zm0-8v-.5l-.02 1zm2.828 1.172-.353.353zm0 5.656-.353-.353zm-5.656 0 .353-.353zm0-5.656.353.353zm3.153-1.159h.5a.5.5 0 0 0-.48-.5zm0 7.974.02.5a.5.5 0 0 0 .48-.5zM10 6h-.5A3.5 3.5 0 0 1 6 9.5v1A4.5 4.5 0 0 0 10.5 6zM6 2v.5A3.5 3.5 0 0 1 9.5 6h1A4.5 4.5 0 0 0 6 1.5zm2.828 1.172-.353.353a3.5 3.5 0 0 1 0 4.95l.353.353.354.354a4.5 4.5 0 0 0 0-6.364zm0 5.656-.353-.353a3.5 3.5 0 0 1-4.95 0l-.353.353-.354.354a4.5 4.5 0 0 0 6.364 0zm-5.656 0 .353-.353a3.5 3.5 0 0 1 0-4.95l-.353-.353-.354-.354a4.5 4.5 0 0 0 0 6.364zm0-5.656.353.353a3.5 3.5 0 0 1 4.95 0l.353-.353.354-.354a4.5 4.5 0 0 0-6.364 0zm3.153-1.159.02-.5L6.02 1.5 6 2l-.02.5.325.013zM6 10l.02.5.325-.014-.02-.5-.02-.499-.325.013zm.325-.013h.5V2.013h-1v7.974z"
    />
  </svg>
);
