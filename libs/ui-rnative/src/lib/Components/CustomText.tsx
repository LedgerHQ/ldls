import { Text, TextProps } from 'react-native';

export const CustomText = ({ children, ...props }: TextProps) => {
  return <Text {...props}>{children}</Text>;
};
CustomText.displayName = 'CustomText';
