import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const Heart = createIcon(
  "Heart",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M10.4667 2.66663C12.58 2.66663 14 4.65329 14 6.50663C14 10.26 8.10667 13.3333 8 13.3333C7.89333 13.3333 2 10.26 2 6.50663C2 4.65329 3.42 2.66663 5.53333 2.66663C6.74667 2.66663 7.54 3.27329 8 3.80663C8.46 3.27329 9.25333 2.66663 10.4667 2.66663Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
