import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Macos icon component for React Native.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props (from react-native-svg)
 * and additional size variants defined in the Icon component.
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon (via NativeWind).
 * @param {SVGProps} [...props] - All standard SVG element props (from react-native-svg).
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Macos } from '@ldls/ui-rnative/symbols';
 *
 * <Macos />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Macos size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Macos} size="md">
 *   Click me
 * </Button>
 */
export const Macos = createIcon(
  "Macos",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M4.33 6.514c0 .11.093.178.233.178.183 0 .33-.118.33-.279v-.102l-.318.02c-.156.01-.246.077-.246.183M8.179 6c0-.404-.213-.66-.547-.66s-.547.256-.547.66.212.66.547.66c.334 0 .547-.256.547-.66"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.375 1.125a2.25 2.25 0 0 0-2.25 2.25v5.25a2.25 2.25 0 0 0 2.25 2.25h5.25a2.25 2.25 0 0 0 2.25-2.25v-5.25a2.25 2.25 0 0 0-2.25-2.25zM2.199 6.907h-.324V5.574h.31v.232h.007a.405.405 0 0 1 .392-.257c.195 0 .334.097.385.268h.008c.066-.165.23-.268.428-.268.272 0 .45.177.45.444v.914h-.324V6.07c0-.164-.088-.257-.246-.257-.156 0-.263.11-.263.27v.824h-.314v-.854c0-.148-.094-.24-.244-.24-.156 0-.265.117-.265.278zm2.695-.212a.49.49 0 0 1-.428.234c-.267 0-.46-.163-.46-.403 0-.236.188-.378.523-.398l.364-.02v-.096c0-.14-.097-.22-.257-.22-.153 0-.25.072-.272.182h-.3c.014-.249.234-.427.585-.427.341 0 .564.174.564.442v.918H4.9v-.212zm1.128-1.148c.364 0 .589.222.61.503h-.305a.29.29 0 0 0-.301-.25c-.204 0-.335.167-.335.44 0 .28.132.44.338.44.163 0 .27-.09.3-.24h.305c-.026.297-.264.494-.61.494-.402 0-.662-.26-.662-.693 0-.426.26-.694.66-.694m.72.454c0-.578.343-.939.89-.939s.888.361.888.939c0 .577-.343.936-.888.936-.547 0-.89-.36-.89-.936m2.644.936c-.432 0-.715-.206-.73-.54h.326c.02.167.193.276.422.276.226 0 .383-.108.383-.259 0-.13-.096-.206-.332-.26L9.212 6.1c-.346-.077-.51-.238-.51-.497 0-.322.29-.54.698-.54.413 0 .686.217.694.536h-.32c-.015-.17-.162-.271-.377-.271-.211 0-.354.1-.354.251 0 .12.095.191.325.244l.215.048c.38.084.542.236.542.507 0 .344-.286.56-.74.56"
      clipRule="evenodd"
    />
  </Svg>
);
