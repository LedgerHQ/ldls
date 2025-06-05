import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { cva, type VariantProps } from 'class-variance-authority';

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  onPress?: () => void;
}

const StyledView = styled(TouchableOpacity);
const StyledText = styled(Text);

const buttonVariants = cva('rounded-full', {
  variants: {
    variant: {
      primary: 'bg-accent',
      secondary: 'bg-muted',
    },
    size: {
      small: 'px-16 py-8',
      medium: 'p-16',
      large: 'px-32 py-16',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

const textVariants = cva('text-center', {
  variants: {
    variant: {
      primary: 'text-on-accent',
      secondary: 'text-on-muted',
    },
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export function Button({
  onPress,
  children,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) {
  return (
    <StyledView onPress={onPress} className={buttonVariants({ variant, size })}>
      <StyledText className={textVariants({ variant, size })}>
        {children}
      </StyledText>
    </StyledView>
  );
}

export default Button;
