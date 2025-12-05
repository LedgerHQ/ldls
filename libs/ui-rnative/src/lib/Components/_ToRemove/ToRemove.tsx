import { Text, View } from 'react-native';
import { LumenStyleSheet } from '../../../styles/LumenStyleSheet';
import { LumenStyleSheetTheme } from '../../../styles/types';

type Variant = 'primary' | 'secondary' | 'error';

const useToRemoveStyles = (variant: Variant) => {
  return LumenStyleSheet.useCreate((theme: LumenStyleSheetTheme) => {
    const bgColorMap: Record<Variant, string> = {
      primary: theme.colors.bg.accent,
      secondary: theme.colors.bg.surface,
      error: theme.colors.bg.error,
    };

    const textColorMap: Record<Variant, string> = {
      primary: theme.colors.text.onAccent,
      secondary: theme.colors.text.base,
      error: theme.colors.text.error,
    };

    return {
      container: {
        backgroundColor: bgColorMap[variant],
        padding: theme.spacings.s16,
        borderRadius: theme.borderRadius.md,
        gap: theme.spacings.s8,
        boxShadow: theme.shadows.xl,
        shadowColor: theme.colors.border.error,
        elevation: 4,
        width: 200,
        minHeight: 80,
      },
      title: {
        color: textColorMap[variant],
        ...theme.typographies.body1SemiBold,
      },
      description: {
        color: textColorMap[variant],
        ...theme.typographies.body2,
        opacity: 0.8,
      },
    };
  });
};

type ToRemoveProps = {
  variant?: Variant;
  title?: string;
  description?: string;
};

export const ToRemove = ({
  variant = 'primary',
  title = 'Card Title',
  description = 'Description text',
}: ToRemoveProps) => {
  const styles = useToRemoveStyles(variant);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
