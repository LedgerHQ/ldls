import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const ChevronBigBottom = createIcon(
  "ChevronBigBottom",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M14 5L8 11L2 5"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
