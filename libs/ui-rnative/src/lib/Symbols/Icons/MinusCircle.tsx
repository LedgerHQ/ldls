import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const MinusCircle = createIcon(
  "MinusCircle",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M10.6667 8H5.33333M8 14C4.68 14 2 11.314 2 8C2 4.68 4.686 2 8 2C11.314 2 14 4.686 14 8C14 11.314 11.314 14 8 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
