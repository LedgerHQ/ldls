import createIcon from "../../Components/Icon/createIcon";

/**
 * QrCodeScanner icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:QrCodeScanner Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { QrCodeScanner } from '@ldls/ui-react/symbols';
 *
 * <QrCodeScanner />
 *
 * @example
 * // With custom size and className
 * <QrCodeScanner size={40} className="text-warning" />
 */
export const QrCodeScanner = createIcon(
  "QrCodeScanner",
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
      d="M10.5 4V2.5c0-.552-.45-1-1-1H8m-4 0H2.5a1 1 0 0 0-1 1V4m0 4v1.5c0 .55.448 1 1 1H4m4 0h1.5c.55 0 1-.45 1-1V8m-9-2h9"
    />
  </svg>
);
