import { StyleSheet, View } from 'react-native';
import { useStyleSheet } from '../../../styles';
import { Pressable } from '../Utility/Pressable/Pressable';
import { Text } from '../Utility/Text/Text';
import {
  SubheaderActionProps,
  SubheaderCountProps,
  SubheaderDescriptionProps,
  SubheaderHintProps,
  SubheaderProps,
  SubheaderRowProps,
  SubheaderTitleProps,
} from './types';

/**
 * Title component for the Subheader. Displays the main heading.
 */
export const SubheaderTitle = ({ children }: SubheaderTitleProps) => {
  const styles = useStyleSheet(
    (t) => ({
      title: StyleSheet.flatten([
        t.typographies.heading4SemiBold,
        {
          flexShrink: 1,
          color: t.colors.text.base,
        },
      ]),
    }),
    [],
  );

  return (
    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
      {children}
    </Text>
  );
};

/**
 * Row component for the Subheader. Layout container to horizontally align title, count, hint, and action.
 * Can optionally be interactive with an onPress handler.
 */
export const SubheaderRow = ({
  children,
  onPress,
  lx,
  style,
  ...props
}: SubheaderRowProps) => {
  const styles = useStyleSheet(
    (t) => ({
      container: StyleSheet.flatten([
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: t.spacings.s4,
        },
      ]),
    }),
    [],
  );

  if (onPress) {
    return (
      <Pressable lx={lx} style={styles.container} onPress={onPress} {...props}>
        {children}
      </Pressable>
    );
  }

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

/**
 * Count component for the Subheader. Displays a formatted number.
 */
export const SubheaderCount = ({ value, format }: SubheaderCountProps) => {
  const formatted = format ? format(value) : `(${value})`;

  const styles = useStyleSheet(
    (t) => ({
      count: StyleSheet.flatten([
        t.typographies.body2,
        {
          flexShrink: 0,
          color: t.colors.text.muted,
        },
      ]),
    }),
    [],
  );

  return <Text style={styles.count}>{formatted}</Text>;
};

/**
 * Hint component for the Subheader. Used to display additional information, like tooltips.
 */
export const SubheaderHint = ({ content }: SubheaderHintProps) => {
  const styles = useStyleSheet(
    () => ({
      container: {
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
    [],
  );

  return <View style={styles.container}>{content}</View>;
};

/**
 * Description component for the Subheader. Displays descriptive text below the title row.
 */
export const SubheaderDescription = ({
  children,
}: SubheaderDescriptionProps) => {
  const styles = useStyleSheet(
    (t) => ({
      description: StyleSheet.flatten([
        t.typographies.body3,
        {
          color: t.colors.text.muted,
        },
      ]),
    }),
    [],
  );

  return <Text style={styles.description}>{children}</Text>;
};

/**
 * Action component for the Subheader. Displays an interactive text button.
 * Automatically positions itself at the end of the row using marginLeft: 'auto'.
 */
export const SubheaderAction = ({
  children,
  onPress,
}: SubheaderActionProps) => {
  const styles = useStyleSheet(
    (t) => ({
      action: StyleSheet.flatten([
        t.typographies.body2,
        {
          flexShrink: 0,
          marginLeft: 'auto',
          paddingLeft: t.spacings.s8,
          color: t.colors.text.interactive,
        },
      ]),
    }),
    [],
  );

  return (
    <Pressable onPress={onPress}>
      <Text style={styles.action}>{children}</Text>
    </Pressable>
  );
};

/**
 * A subheader component for displaying section titles with optional count, hints, descriptions, and action elements.
 * Uses a composable API where you explicitly nest sub-components to define the layout.
 *
 * @example
 * // Simple subheader without row
 * <Subheader>
 *   <SubheaderTitle>Section Title</SubheaderTitle>
 *   <SubheaderDescription>Description text</SubheaderDescription>
 * </Subheader>
 *
 * @example
 * // Subheader with row for horizontal layout
 * <Subheader>
 *   <SubheaderRow>
 *     <SubheaderTitle>Section Title</SubheaderTitle>
 *     <SubheaderCount value={30} />
 *     <SubheaderHint content={<Tooltip>...</Tooltip>} />
 *   </SubheaderRow>
 *   <SubheaderDescription>Description text</SubheaderDescription>
 * </Subheader>
 *
 * @example
 * // Interactive row with action
 * <Subheader>
 *   <SubheaderRow onPress={handleClick}>
 *     <SubheaderTitle>Accounts</SubheaderTitle>
 *     <SubheaderCount value={12} />
 *   </SubheaderRow>
 * </Subheader>
 */
export const Subheader = ({
  lx,
  style,
  children,
  ...props
}: SubheaderProps) => {
  const styles = useStyleSheet(
    (t) => ({
      container: {
        width: '100%',
        flexDirection: 'column',
        gap: t.spacings.s4,
      },
    }),
    [],
  );

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};
