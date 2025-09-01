import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";

/**
 * Android icon component for React Native.
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
 * import { Android } from '@ldls/ui-rnative/symbols';
 *
 * <Android />
 *
 * @example
 * // With custom size and className (NativeWind)
 * <Android size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-rnative';
 *
 * <Button icon={Android} size="md">
 *   Click me
 * </Button>
 */
export const Android = createIcon(
  "Android",
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 12 12">
    <Path
      fill="currentColor"
      d="M8.942 8.513a.68.68 0 0 1-.205.5.67.67 0 0 1-.494.205h-.48v1.455q0 .276-.193.468a.64.64 0 0 1-.468.193.64.64 0 0 1-.468-.193.64.64 0 0 1-.192-.468V9.218h-.885v1.455q0 .276-.192.468a.64.64 0 0 1-.468.193.63.63 0 0 1-.461-.193.64.64 0 0 1-.193-.468l-.006-1.455h-.474a.68.68 0 0 1-.5-.205.68.68 0 0 1-.206-.5v-4.27h5.885zM2.147 4.122a.63.63 0 0 1 .462.192.63.63 0 0 1 .192.461v2.757q0 .276-.189.468a.63.63 0 0 1-.465.192A.64.64 0 0 1 1.68 8a.64.64 0 0 1-.193-.468V4.775a.63.63 0 0 1 .193-.461.64.64 0 0 1 .467-.192M9.853 4.122q.275 0 .467.19.193.188.193.463v2.757q0 .276-.193.468a.64.64 0 0 1-.467.192A.63.63 0 0 1 9.39 8a.64.64 0 0 1-.192-.468V4.775q0-.275.192-.464a.64.64 0 0 1 .462-.189"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.878.68q.077.044.032.128l-.455.84Q8.14 2 8.55 2.631q.41.63.41 1.381h-5.93q0-.75.412-1.381a2.8 2.8 0 0 1 1.102-.985L4.09.807Q4.045.726 4.122.68q.083-.039.128.038l.461.847q.609-.27 1.29-.27.679 0 1.288.27l.46-.847Q7.795.64 7.88.68m-3.23 1.763a.247.247 0 0 0-.244.25q0 .102.07.175a.23.23 0 0 0 .173.074.24.24 0 0 0 .176-.074.24.24 0 0 0 .074-.176.24.24 0 0 0-.074-.176.24.24 0 0 0-.176-.073m2.704 0a.24.24 0 0 0-.176.073.24.24 0 0 0-.074.176.24.24 0 0 0 .074.176.24.24 0 0 0 .176.074.23.23 0 0 0 .173-.074.25.25 0 0 0 .071-.176.247.247 0 0 0-.244-.25"
      clipRule="evenodd"
    />
  </Svg>
);
