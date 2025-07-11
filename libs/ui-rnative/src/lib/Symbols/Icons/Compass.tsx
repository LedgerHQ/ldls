import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const Compass = createIcon(
  "Compass",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M12.2427 3.75332C14.5827 6.09332 14.5827 9.89332 12.2427 12.2333C9.89606 14.5733 6.09606 14.5733 3.75606 12.2333C1.40939 9.88666 1.40939 6.08666 3.75539 3.74666C6.09539 1.39999 9.89539 1.39999 12.2354 3.74599M9.54672 9.53332L6.45339 6.46666M6.45272 6.46866L10.6667 5.32666L9.54672 9.51999L5.33272 10.6533L6.45272 6.46866Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
