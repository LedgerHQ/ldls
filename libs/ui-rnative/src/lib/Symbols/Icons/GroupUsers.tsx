import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * GroupUsers icon component for React Native.
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
 * import { GroupUsers } from '@ldls/ui-rnative/symbols';
 *
 * <GroupUsers />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <GroupUsers size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={GroupUsers} size="md">
 *   Click me
 * </Button>
 */
export const GroupUsers = createIcon(
  "GroupUsers",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M13.86 6.34664C14.3867 6.8733 14.3867 7.72664 13.86 8.2533C13.3267 8.77997 12.4734 8.77997 11.9467 8.2533C11.4134 7.71997 11.4134 6.86664 11.9467 6.33997C12.4734 5.80664 13.3267 5.80664 13.8534 6.3393M9.46669 3.93997C10.2734 4.74664 10.2734 6.05997 9.46669 6.8733C8.65335 7.67997 7.34002 7.67997 6.52669 6.8733C5.71335 6.05997 5.71335 4.74664 6.52669 3.9333C7.33335 3.11997 8.64669 3.11997 9.46002 3.9333M4.04002 6.34664C4.56669 6.8733 4.56669 7.72664 4.04002 8.2533C3.50669 8.77997 2.65335 8.77997 2.12669 8.2533C1.59335 7.71997 1.59335 6.86664 2.12669 6.33997C2.65335 5.80664 3.50669 5.80664 4.03335 6.3393M15.3334 12.6666V11.9333C15.3334 11.0066 14.5867 10.2666 13.6667 10.2666H13.1267M0.666687 12.6666V11.9333C0.666687 11.0066 1.40669 10.2666 2.33335 10.2666H2.86669M11.5534 12.6666V11.5933C11.5534 10.3 10.5067 9.25997 9.22002 9.25997H6.76669C5.47335 9.25997 4.43335 10.3 4.43335 11.5933V12.66"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
