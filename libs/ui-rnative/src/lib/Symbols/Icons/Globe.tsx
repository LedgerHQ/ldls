import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const Globe = createIcon(
  "Globe",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M2.34 6H13.66M2.34 10H13.66M8 2.06665C10.8888 2.06665 10.889 13.9333 8 13.9333C5.11103 13.9333 5.11119 2.06665 8 2.06665ZM8 2C11.32 2 14 4.67867 14 8C14 11.32 11.32 14 8 14C4.67867 14 2 11.32 2 8C2 4.67867 4.67867 2 8 2Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
