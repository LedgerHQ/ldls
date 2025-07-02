import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import createIcon from "../../Components/Icon/createIcon";
export const Placeholder = createIcon(
  "Placeholder",
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
    <G clipPath="url(#clip0_5625_429)">
      <Path
        d="M1.88883 1.88878L14.1111 14.111M1.88883 14.1111L14.1111 1.88883M1.33337 1.33325H14.6667V14.6666H1.33337V1.33325Z"
        stroke="currentColor"
        strokeWidth={1.3}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5625_429">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
