import { TouchableOpacity, Text } from 'react-native';
import { styled } from 'nativewind';
import { jsx } from 'react/jsx-runtime';

// This file is auto-generated. Do not modify manually.
const tailwindColors = {
  "surface-brand-primary-default": "var(--surface-brand-primary-default)"};

const StyledView = styled(TouchableOpacity);
const StyledText = styled(Text);
function Button({
  onPress,
  title,
  variant = 'primary'
}) {
  const baseStyles = 'px-4 py-2 rounded-lg';
  const variantStyles = {
    primary: `${tailwindColors["surface-brand-primary-default"]} active:bg-blue-600`,
    secondary: 'bg-gray-500 active:bg-gray-600'
  };
  return /*#__PURE__*/jsx(StyledView, {
    onPress: onPress,
    className: `${baseStyles} ${variantStyles[variant]}`,
    children: /*#__PURE__*/jsx(StyledText, {
      className: "text-white text-center font-semibold",
      children: title
    })
  });
}

export { Button };
