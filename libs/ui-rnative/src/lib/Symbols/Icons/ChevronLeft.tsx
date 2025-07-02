import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const ChevronLeft = createIcon(
  "ChevronLeft",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.33329 5.33337L6.66663 8.00004L9.33329 10.6667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
