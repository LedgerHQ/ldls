import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const Desktop = createIcon(
  "Desktop",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M9.33333 11.3333L9.66667 14M6.66667 11.3333L6.33333 14M4.8 14H11.2M14 9H2M12.6667 11.3333H3.33333C2.59667 11.3333 2 10.7333 2 10V3.33333C2 2.59667 2.59667 2 3.33333 2H12.6667C13.4 2 14 2.59667 14 3.33333V10C14 10.7333 13.4 11.3333 12.6667 11.3333Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
