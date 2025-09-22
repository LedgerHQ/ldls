import createIcon from "../../Components/Icon/createIcon";

/**
 * MessageChat icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:MessageChat Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { MessageChat } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <MessageChat />
 *
 * @example
 * // With custom size and className
 * <MessageChat size={40} className="text-warning" />
 */
export const MessageChat = createIcon(
  "MessageChat",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_805_1619)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.539 10.904c1.35 0 2.45-1.1 2.45-2.452A2.46 2.46 0 0 0 3.535 6a2.45 2.45 0 0 0-2.452 2.452m2.458 2.454c-.37 0-.72-.085-1.035-.23l-1.51.32.315-1.514c-.15-.316-.23-.67-.23-1.04M3.278 6.01a3.3 3.3 0 0 1-.28-1.33c0-2.01 1.795-3.62 4-3.62 2.2 0 4 1.61 4 3.62 0 1.185-.634 2.232-1.6 2.891 0 .375-.005.885-.005 1.42l-1.57-.775q-.406.075-.835.075c-.355 0-.7-.045-1.025-.125"
      />
    </g>
    <defs>
      <clipPath id="clip0_805_1619">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
