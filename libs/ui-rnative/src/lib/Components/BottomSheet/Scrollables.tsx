import {
  BottomSheetView as GorhomBottomSheetView,
  BottomSheetFlatList as GorhomBottomSheetFlatList,
  BottomSheetSectionList as GorhomBottomSheetSectionList,
  BottomSheetScrollView as GorhomBottomSheetScrollView,
  BottomSheetVirtualizedList as GorhomBottomSheetVirtualizedList,
} from '@gorhom/bottom-sheet';
import { FC, forwardRef } from 'react';
import { ViewStyle } from 'react-native';
import { LumenStyleSheet } from '../../../styles';

export type BottomSheetViewProps = Parameters<typeof GorhomBottomSheetView>[0];
export type BottomSheetFlatListProps = Parameters<
  typeof GorhomBottomSheetFlatList
>[0];
export type BottomSheetSectionListProps = Parameters<
  typeof GorhomBottomSheetSectionList
>[0];
export type BottomSheetScrollViewProps = Parameters<
  typeof GorhomBottomSheetScrollView
>[0];
export type BottomSheetVirtualizedListProps = Parameters<
  typeof GorhomBottomSheetVirtualizedList
>[0];

const useScrollableStyles = () => {
  return LumenStyleSheet.useCreate((t) => ({
    container: {
      flex: 1,
      paddingHorizontal: t.spacings.s16,
      paddingBottom: t.spacings.s16,
    },
  }));
};

export const BottomSheetView: FC<BottomSheetViewProps> = ({
  children,
  style,
  ...props
}) => {
  const styles = useScrollableStyles();

  return (
    <GorhomBottomSheetView
      style={[styles.container as ViewStyle, style]}
      {...props}
    >
      {children}
    </GorhomBottomSheetView>
  );
};
BottomSheetView.displayName = 'BottomSheetView';

export const BottomSheetFlatList = forwardRef<
  React.ElementRef<typeof GorhomBottomSheetFlatList>,
  BottomSheetFlatListProps
>(({ children, style, ...props }, ref) => {
  const styles = useScrollableStyles();

  return (
    <GorhomBottomSheetFlatList
      ref={ref}
      style={[styles.container as ViewStyle, style]}
      {...props}
    >
      {children}
    </GorhomBottomSheetFlatList>
  );
});
BottomSheetFlatList.displayName = 'BottomSheetFlatList';

export const BottomSheetSectionList = forwardRef<
  React.ElementRef<typeof GorhomBottomSheetSectionList>,
  BottomSheetSectionListProps
>(({ children, style, ...props }, ref) => {
  const styles = useScrollableStyles();

  return (
    <GorhomBottomSheetSectionList
      ref={ref}
      style={[styles.container as ViewStyle, style]}
      {...props}
    >
      {children}
    </GorhomBottomSheetSectionList>
  );
});
BottomSheetSectionList.displayName = 'BottomSheetSectionList';

export const BottomSheetScrollView = forwardRef<
  React.ElementRef<typeof GorhomBottomSheetScrollView>,
  BottomSheetScrollViewProps
>(({ children, style, ...props }, ref) => {
  const styles = useScrollableStyles();

  return (
    <GorhomBottomSheetScrollView
      ref={ref}
      style={[styles.container as ViewStyle, style]}
      {...props}
    >
      {children}
    </GorhomBottomSheetScrollView>
  );
});
BottomSheetScrollView.displayName = 'BottomSheetScrollView';

export const BottomSheetVirtualizedList = forwardRef<
  React.ElementRef<typeof GorhomBottomSheetVirtualizedList>,
  BottomSheetVirtualizedListProps
>(({ children, style, ...props }, ref) => {
  const styles = useScrollableStyles();

  return (
    <GorhomBottomSheetVirtualizedList
      ref={ref}
      style={[styles.container as ViewStyle, style]}
      {...props}
    >
      {children}
    </GorhomBottomSheetVirtualizedList>
  );
});
BottomSheetVirtualizedList.displayName = 'BottomSheetVirtualizedList';
