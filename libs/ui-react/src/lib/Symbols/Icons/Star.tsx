import createIcon from "../../Components/Icon/createIcon";

/**
 * Star icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Star } from '@ldls/ui-react/symbols';
 *
 * <Star />
 *
 * @example
 * // With custom size and className
 * <Star size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-react';
 *
 * <Button icon={Star} size="md">
 *   Click me
 * </Button>
 */
export const Star = createIcon(
  "Star",
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
      d="m8 11.49-3.88 1.84.8-4.08-2.927-2.997 4.12-.52 1.88-3.753 1.88 3.747 4.12.513-2.927 2.987.8 4.08z"
    />
  </svg>
);
