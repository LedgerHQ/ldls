import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Settings icon component for React Native.
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
 * import { Settings } from '@ldls/ui-rnative/symbols';
 *
 * <Settings />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Settings size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Settings} size="md">
 *   Click me
 * </Button>
 */
export const Settings = createIcon(
  "Settings",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8.53334 2C8.67063 2.00002 8.80456 2.04242 8.91684 2.12141C9.02912 2.2004 9.11428 2.31213 9.16068 2.44133L9.49934 3.38467C9.5531 3.53301 9.65744 3.65765 9.79401 3.73667L10.7987 4.31667C10.9351 4.39538 11.095 4.42325 11.25 4.39533L12.2367 4.21733C12.3719 4.19275 12.5114 4.21055 12.6361 4.26831C12.7608 4.32607 12.8646 4.42097 12.9333 4.54L13.4667 5.46C13.5356 5.57872 13.5661 5.71581 13.5542 5.85255C13.5423 5.98928 13.4884 6.11901 13.4 6.224L12.7527 6.98933C12.6507 7.10968 12.5947 7.26227 12.5947 7.42V8.58C12.5947 8.73773 12.6507 8.89032 12.7527 9.01067L13.4 9.776C13.4884 9.88099 13.5423 10.0107 13.5542 10.1475C13.5661 10.2842 13.5356 10.4213 13.4667 10.54L12.9333 11.46C12.8647 11.5789 12.761 11.6737 12.6364 11.7315C12.5118 11.7892 12.3725 11.8071 12.2373 11.7827L11.2507 11.6047C11.0957 11.5767 10.9358 11.6046 10.7993 11.6833L9.79468 12.2633C9.65811 12.3424 9.55377 12.467 9.50001 12.6153L9.16134 13.5587C9.1149 13.688 9.02965 13.7998 8.91723 13.8788C8.80482 13.9578 8.67074 14.0001 8.53334 14H7.46668C7.32939 14 7.19547 13.9576 7.08318 13.8786C6.9709 13.7996 6.88575 13.6879 6.83934 13.5587L6.50068 12.6153C6.44694 12.4672 6.34289 12.3426 6.20668 12.2633L5.20134 11.6833C5.06492 11.6046 4.90502 11.5767 4.75001 11.6047L3.76334 11.7827C3.62812 11.8073 3.48861 11.7894 3.3639 11.7317C3.23919 11.6739 3.13538 11.579 3.06668 11.46L2.53334 10.54C2.46446 10.4213 2.43389 10.2842 2.44582 10.1475C2.45775 10.0107 2.5116 9.88099 2.60001 9.776L3.24734 9.01067C3.3493 8.89032 3.40528 8.73773 3.40534 8.58V7.42C3.40528 7.26227 3.3493 7.10968 3.24734 6.98933L2.60668 6.224C2.51827 6.11901 2.46442 5.98928 2.45249 5.85255C2.44056 5.71581 2.47112 5.57872 2.54001 5.46L3.07334 4.54C3.142 4.42109 3.24571 4.32628 3.37028 4.26852C3.49486 4.21077 3.63423 4.19289 3.76934 4.21733L4.75601 4.39533C4.91102 4.42325 5.07092 4.39538 5.20734 4.31667L6.21268 3.73667C6.34889 3.6574 6.45294 3.53282 6.50668 3.38467L6.84534 2.44133C6.8914 2.31309 6.97564 2.20203 7.08673 2.12313C7.19782 2.04422 7.33042 2.00125 7.46668 2H8.53334Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.00001 9.83333C9.01253 9.83333 9.83334 9.01252 9.83334 8C9.83334 6.98748 9.01253 6.16667 8.00001 6.16667C6.98749 6.16667 6.16668 6.98748 6.16668 8C6.16668 9.01252 6.98749 9.83333 8.00001 9.83333Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
