import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const QrCodeScanner = createIcon(
  "QrCodeScanner",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M14 5.33333V3.33333C14 2.59667 13.4 2 12.6667 2H10.6667M5.33333 2H3.33333C2.59667 2 2 2.59667 2 3.33333V5.33333M2 10.6667V12.6667C2 13.4 2.59667 14 3.33333 14H5.33333M10.6667 14H12.6667C13.4 14 14 13.4 14 12.6667V10.6667M2 8H14"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
