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
    primary: `${tailwindColors["surface-brand-primary-default"]} active:bg-blue-600`,
    secondary: 'bg-gray-500 active:bg-gray-600',
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
