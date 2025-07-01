import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const ExternalLink = createIcon(
  "ExternalLink",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M8 8L13 3M13 3V6.66667M13 3H9.33333M6 3H4.33333C3.59667 3 3 3.59667 3 4.33333V11.6667C3 12.4 3.59667 13 4.33333 13H11.6667C12.4 13 13 12.4 13 11.6667V10"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
