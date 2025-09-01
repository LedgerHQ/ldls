import createIcon from "../../Components/Icon/createIcon";

/**
 * NftHide icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @see {@link https://ldls.vercel.app/?path=/story/symbols-interface-icons--icon&args=name:NftHide Storybook}
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { NftHide } from '@ldls/ui-react/symbols';
 *
 * <NftHide />
 *
 * @example
 * // With custom size and className
 * <NftHide size={40} className="text-warning" />
 */
export const NftHide = createIcon(
  "NftHide",
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
      d="M10.5 6.5v2c0 1.1-.9 2-2 2h-5m0 0c-1.105 0-2-.9-2-2v-5a2 2 0 0 1 2-2h2m-2 9 3.145-3.15a1.19 1.19 0 0 1 1.7 0l1.965 1.965M1.5 6.5l.645-.65a1.197 1.197 0 0 1 1.7-.005L5.99 7.99m3.2-5.04c.024.025.024.07 0 .1a.08.08 0 0 1-.106 0 .07.07 0 0 1 0-.104c.025-.03.07-.03.1 0m-1.804.399a.62.62 0 0 1 0-.69c.42-.645 1.09-1.16 1.756-1.16s1.33.51 1.755 1.155a.64.64 0 0 1 0 .69c-.425.641-1.095 1.155-1.76 1.155-.67 0-1.335-.515-1.756-1.155z"
    />
  </svg>
);
