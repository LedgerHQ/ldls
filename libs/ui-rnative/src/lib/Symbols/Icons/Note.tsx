import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const Note = createIcon(
  "Note",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.66667 8H11.3333M4.66667 5.33333H11.3333M4.66667 10.6667H8M4.66667 14H11.3333C12.8061 14 14 12.8061 14 11.3333V4.66667C14 3.19391 12.8061 2 11.3333 2H4.66667C3.19391 2 2 3.19391 2 4.66667V11.3333C2 12.8061 3.19391 14 4.66667 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
