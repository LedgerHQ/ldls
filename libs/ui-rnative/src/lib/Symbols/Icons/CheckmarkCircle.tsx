import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const CheckmarkCircle = createIcon(
  "CheckmarkCircle",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M5.62933 8.226L7.074 9.67067L7.06467 9.66133L10.324 6.402M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
