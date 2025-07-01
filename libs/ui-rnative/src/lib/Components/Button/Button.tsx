import { Text, TouchableOpacity } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('rounded-full', {
  variants: {
    variant: {
      accent: 'bg-accent',
      primary: 'bg-interactive',
      secondary: 'bg-muted',
      'secondary-transparent': 'bg-muted-transparent',
    },
    size: {
      small: 'px-16 py-8',
      medium: 'p-16',
      large: 'px-32 py-16',
    },
  },
  defaultVariants: {
    variant: 'accent',
    size: 'medium',
  },
});

const textVariants = cva('text-center', {
  variants: {
    variant: {
      accent: 'text-on-accent',
      primary: 'text-on-interactive',
      secondary: 'text-base',
      'secondary-transparent': 'text-base',
    },
    size: {
      small: 'body-2-semi-bold',
      medium: 'body-1-semi-bold',
      large: 'body-1-semi-bold',
    },
  },
  defaultVariants: {
    variant: 'accent',
    size: 'medium',
  },
});

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  onPress?: () => void;
}

const Button = ({
  children,
  variant = 'accent',
  size = 'medium',
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className={buttonVariants({ variant, size })}>
      <Text className={textVariants({ variant, size })}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
