import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const ClockFill = createIcon(
  "ClockFill",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 8C1.5 4.40353 4.41018 1.5 8 1.5C11.5901 1.5 14.5 4.40986 14.5 8C14.5 11.5901 11.5901 14.5 8 14.5C4.40353 14.5 1.5 11.5898 1.5 8Z"
      fill="currentColor"
    />
    <Path d="M11.1 8.00006H8H11.1Z" fill="currentColor" />
    <Path d="M8 8.00006V4.26672V8.00006Z" fill="currentColor" />
    <Path
      d="M11.1 8.00006H8V4.26672"
      stroke="white"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
