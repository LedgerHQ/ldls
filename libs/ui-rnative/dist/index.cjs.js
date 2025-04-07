'use strict';

var nativewind = require('nativewind');
var reactNative = require('react-native');
var jsxDevRuntime = require('react/jsx-dev-runtime');

const StyledView = nativewind.styled(reactNative.TouchableOpacity);
const StyledText = nativewind.styled(reactNative.Text);
function Button({
  onPress,
  title,
  variant = 'primary'
}) {
  const baseStyles = 'px-4 py-2 rounded-lg';
  const variantStyles = {
    primary: 'bg-blue-500 active:bg-blue-600',
    secondary: 'bg-gray-500 active:bg-gray-600'
  };
  return /*#__PURE__*/jsxDevRuntime.jsxDEV(nativewind.StyledComponent, {
    onPress: onPress,
    className: `${baseStyles} ${variantStyles[variant]}`,
    component: StyledView,
    children: /*#__PURE__*/jsxDevRuntime.jsxDEV(nativewind.StyledComponent, {
      className: "text-white text-center font-semibold",
      component: StyledText,
      children: title
    }, void 0, false, void 0, this)
  }, void 0, false, void 0, this);
}

exports.Button = Button;
