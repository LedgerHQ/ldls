import { Pressable, Text, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

export const UnistylesDemo = () => {
  const { theme } = useUnistyles();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unistyles Demo</Text>
      <Text style={styles.subtitle}>Theme: {theme.colors.primary}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Card Title</Text>
        <Text style={styles.cardText}>
          This card is styled using Unistyles theme values.
        </Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Primary Button</Text>
      </Pressable>

      <View style={styles.colorGrid}>
        <View
          style={[styles.colorBox, { backgroundColor: theme.colors.primary }]}
        >
          <Text style={styles.colorLabel}>Primary</Text>
        </View>
        <View
          style={[styles.colorBox, { backgroundColor: theme.colors.secondary }]}
        >
          <Text style={styles.colorLabel}>Secondary</Text>
        </View>
        <View
          style={[styles.colorBox, { backgroundColor: theme.colors.success }]}
        >
          <Text style={styles.colorLabel}>Success</Text>
        </View>
        <View
          style={[styles.colorBox, { backgroundColor: theme.colors.error }]}
        >
          <Text style={styles.colorLabel}>Error</Text>
        </View>
      </View>

      <View style={styles.spacingDemo}>
        <Text style={styles.subtitle}>Spacing Demo:</Text>
        <View style={styles.spacingBox}>
          <Text style={styles.bodyText}>XS: {theme.spacing.xs}px</Text>
        </View>
        <View style={styles.spacingBox}>
          <Text style={styles.bodyText}>SM: {theme.spacing.sm}px</Text>
        </View>
        <View style={styles.spacingBox}>
          <Text style={styles.bodyText}>MD: {theme.spacing.md}px</Text>
        </View>
        <View style={styles.spacingBox}>
          <Text style={styles.bodyText}>LG: {theme.spacing.lg}px</Text>
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme: any) => ({
  container: {
    flex: 1,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  cardTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  cardText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.fontSize.md * 1.5,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  buttonText: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.semibold,
    color: '#FFFFFF',
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  colorBox: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLabel: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.semibold,
    color: '#FFFFFF',
  },
  spacingDemo: {
    gap: theme.spacing.sm,
  },
  spacingBox: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  bodyText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
  },
});
