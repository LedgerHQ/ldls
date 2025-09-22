import createIcon from "../../Components/Icon/createIcon";

/**
 * Delete icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Delete Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Delete } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Delete />
 *
 * @example
 * // With custom size and className
 * <Delete size={40} className="text-warning" />
 */
export const Delete = createIcon(
  "Delete",
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
      d="M8.113 4.937 5.988 7.063m2.125 0L5.988 4.937M3.06 3.098 1.43 5.383c-.264.369-.264.866 0 1.235L3.06 8.902c.2.28.522.445.865.445h5.782c.587 0 1.062-.475 1.062-1.063V3.716c0-.588-.475-1.063-1.062-1.063H3.925c-.343 0-.665.166-.865.445"
    />
  </svg>
);
