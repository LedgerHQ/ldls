import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const Switch = createIcon(
  "Switch",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M11 11C9.34 11 8 9.65333 8 8C8 6.34 9.34 5 11 5M11 11C12.6533 11 14 9.65333 14 8C14 6.34 12.6533 5 11 5M11 11H5C3.34 11 2 9.65333 2 8C2 6.34 3.34 5 5 5H11"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
