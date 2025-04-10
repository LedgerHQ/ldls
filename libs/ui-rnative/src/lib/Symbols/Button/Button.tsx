import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

import { tailwindColors } from '@ldls/design-tokens';

export interface ButtonProps {
  onPress?: () => void;
  title: string;
  variant?: 'primary' | 'secondary';
}

const StyledView = styled(TouchableOpacity);
const StyledText = styled(Text);

export function Button({ onPress, title, variant = 'primary' }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-lg';
  const variantStyles = {
    primary: `bg-green-500 text-white hover:bg-green-600`,
    secondary: `${tailwindColors["surface-brand-primary-default"]} text-gray-800 hover:bg-gray-300`,
  };

  return (
    <StyledView
      onPress={onPress}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      <StyledText className="text-white text-center font-semibold">{title}</StyledText>
    </StyledView>
  );
}



export default Button;
