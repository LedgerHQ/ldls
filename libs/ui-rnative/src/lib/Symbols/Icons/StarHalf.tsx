import Svg, { Path } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const StarHalf = createIcon(
  "StarHalf",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <Path
      d="M4.11935 13.33L7.50114 11.6542L7.55236 2.89632L6.11335 5.73331L1.99335 6.25331L4.91935 9.24998L4.11935 13.33Z"
      fill="currentColor"
    />
    <Path
      d="M4.11935 13.33L8.00001 11.49L11.866 13.3066L11.066 9.22665L13.9927 6.23998L9.87335 5.72665L7.99335 1.97998L6.11335 5.73331M4.11935 13.33L4.91935 9.24998L1.99335 6.25331L6.11335 5.73331M4.11935 13.33L7.50114 11.6542L7.55236 2.89632L6.11335 5.73331"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
