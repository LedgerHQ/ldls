import createIcon from "../../Components/Icon/createIcon";

/**
 * ArrowDownRight icon component.
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
 * import { ArrowDownRight } from '@ldls/ui-react/symbols';
 *
 * <ArrowDownRight />
 *
 * @example
 * // With custom size and className
 * <ArrowDownRight size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-react';
 *
 * <Button icon={ArrowDownRight} size="md">
 *   Click me
 * </Button>
 */
export const ArrowDownRight = createIcon(
  "ArrowDownRight",
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
      d="M11.3 11.3 4.7 4.7m6.6 1.88v4.715l-4.72-.006"
    />
  </svg>
);
