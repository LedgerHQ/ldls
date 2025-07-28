import createIcon from "../../Components/Icon/createIcon";

/**
 * MinusCircleFill icon component.
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
 * import { MinusCircleFill } from '@ldls/ui-react/symbols';
 *
 * <MinusCircleFill />
 *
 * @example
 * // With custom size and className
 * <MinusCircleFill size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-react';
 *
 * <Button icon={MinusCircleFill} size="md">
 *   Click me
 * </Button>
 */
export const MinusCircleFill = createIcon(
  "MinusCircleFill",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M8 1.35a6.65 6.65 0 0 1 0 13.3A6.646 6.646 0 0 1 1.35 8c0-3.679 2.978-6.65 6.65-6.65m-2.666 6a.65.65 0 0 0 0 1.3h5.333l.13-.013a.65.65 0 0 0 0-1.273l-.13-.014z"
    />
  </svg>
);
