import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const Expand = createIcon(
  "Expand",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11.3333 2H14M14 2V4.66667M14 2L10 6M2.66667 7.33333V4C2.66667 3.26333 3.26333 2.66667 4 2.66667H7.33333M4.66667 14H2M2 14V11.3333M2 14L6 10M13.3333 8.66667V12C13.3333 12.7367 12.7367 13.3333 12 13.3333H8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
