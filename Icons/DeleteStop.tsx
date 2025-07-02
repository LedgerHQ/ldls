import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const DeleteStop = createIcon(
  "DeleteStop",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M12.2427 3.75733L3.756 12.2373L12.236 3.75067L12.2427 3.75733Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 2C4.68 2 2 4.686 2 8C2 11.314 4.686 14 8 14C11.314 14 14 11.314 14 8C14 4.68 11.314 2 8 2Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
