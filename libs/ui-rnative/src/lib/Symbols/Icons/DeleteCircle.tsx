import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const DeleteCircle = createIcon(
  "DeleteCircle",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.88667 6.11333L6.11333 9.88667M9.88667 9.88667L6.11333 6.11333M8 14C4.68 14 2 11.314 2 8C2 4.68 4.686 2 8 2C11.314 2 14 4.686 14 8C14 11.314 11.314 14 8 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
