import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const Bell = createIcon(
  "Bell",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M6.00003 12V12.1667C6.00003 13.2667 6.89337 14.1667 8.00003 14.1667C9.10003 14.1667 10 13.2667 10 12.1667V12M12 9.16669L13.1334 10.3C13.2534 10.42 13.3267 10.5934 13.3267 10.7667V11.32C13.3267 11.6867 13.0267 11.9867 12.66 11.9867H3.3267C2.95337 11.9867 2.66003 11.6867 2.66003 11.32V10.76C2.66003 10.58 2.7267 10.4134 2.85337 10.2867L3.9867 9.14669V6.31335C3.9867 4.10002 5.77337 2.31335 7.9867 2.31335C10.1934 2.31269 11.9867 4.10002 11.9867 6.31335L12 9.16669Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
