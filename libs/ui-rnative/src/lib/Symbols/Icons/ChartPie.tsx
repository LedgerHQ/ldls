import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const ChartPie = createIcon(
  "ChartPie",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M7 4C4.23333 4 2 6.23333 2 9C2 11.76 4.23333 14 7 14C9.76 14 12 11.76 12 9H7V4Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 6.66667C14 4.08667 11.9067 2 9.33333 2V6.66667H14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
