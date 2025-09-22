import createIcon from "../../Components/Icon/createIcon";

/**
 * Tools icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:Tools Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Tools } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Tools />
 *
 * @example
 * // With custom size and className
 * <Tools size={40} className="text-warning" />
 */
export const Tools = createIcon(
  "Tools",
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
      d="m5.915 7.5 2.5 2.5c.41.41 1.085.41 1.5 0 .41-.415.41-1.09 0-1.5L7.415 6M3.42 3.5l1.75 1.75m5.285-2.33q.016.016.025.04a2.28 2.28 0 0 1-.57 2.28c-.63.625-1.52.805-2.31.555l-4.174 4.17c-.41.405-1.07.435-1.49.045a1.06 1.06 0 0 1-.03-1.53l4.19-4.195c-.25-.79-.07-1.685.555-2.31a2.28 2.28 0 0 1 2.28-.57c.015.005.03.01.04.025l.08.08c.035.035.035.1 0 .14L7.73 2.965l1.16 1.16 1.315-1.32c.035-.04.1-.04.14 0l.08.08zm-8.99-.775.335 1.01c.065.2.255.34.47.34h1.14v-1.14a.5.5 0 0 0-.346-.474L2.05 1.54a.25.25 0 0 0-.26.06l-.285.28a.23.23 0 0 0-.06.255z"
    />
  </svg>
);
