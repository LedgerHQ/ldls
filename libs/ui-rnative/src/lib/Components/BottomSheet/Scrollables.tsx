import {
  BottomSheetView as GorhomBottomSheetView,
  BottomSheetFlatList as GorhomBottomSheetFlatList,
  BottomSheetSectionList as GorhomBottomSheetSectionList,
  BottomSheetScrollView as GorhomBottomSheetScrollView,
  BottomSheetVirtualizedList as GorhomBottomSheetVirtualizedList,
} from '@gorhom/bottom-sheet';
import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import { cssInterop } from 'nativewind';
import { FC, forwardRef } from 'react';

const styles = cva('flex-1 px-16 pb-24');

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

// Apply cssInterop to map className to style prop for Gorhom components
const StyledBottomSheetView = cssInterop(GorhomBottomSheetView, {
  className: 'style',
});
const StyledBottomSheetFlatList = cssInterop(GorhomBottomSheetFlatList, {
  className: 'style',
});
const StyledBottomSheetSectionList = cssInterop(GorhomBottomSheetSectionList, {
  className: 'style',
});
const StyledBottomSheetScrollView = cssInterop(GorhomBottomSheetScrollView, {
  className: 'style',
});
const StyledBottomSheetVirtualizedList = cssInterop(
  GorhomBottomSheetVirtualizedList,
  { className: 'style' },
);

export const BottomSheetView: FC<BottomSheetViewProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <StyledBottomSheetView className={cn(className, styles())} {...props}>
      {children}
    </StyledBottomSheetView>
  );
};
BottomSheetView.displayName = 'BottomSheetView';

export const BottomSheetFlatList = forwardRef<
  React.ElementRef<typeof GorhomBottomSheetFlatList>,
  BottomSheetFlatListProps
>(({ children, className, ...props }, ref) => {
  return (
    <StyledBottomSheetFlatList
      ref={ref}
      className={cn(className, styles())}
      {...props}
    >
      {children}
    </StyledBottomSheetFlatList>
  );
});
BottomSheetFlatList.displayName = 'BottomSheetFlatList';

export const BottomSheetSectionList = forwardRef<
  React.ElementRef<typeof GorhomBottomSheetSectionList>,
  BottomSheetSectionListProps
>(({ children, className, ...props }, ref) => {
  return (
    <StyledBottomSheetSectionList
      ref={ref}
      className={cn(className, styles())}
      {...props}
    >
      {children}
    </StyledBottomSheetSectionList>
  );
});
BottomSheetSectionList.displayName = 'BottomSheetSectionList';

export const BottomSheetScrollView = forwardRef<
  React.ElementRef<typeof GorhomBottomSheetScrollView>,
  BottomSheetScrollViewProps
>(({ children, className, ...props }, ref) => {
  return (
    <StyledBottomSheetScrollView
      ref={ref}
      className={cn(className, styles())}
      {...props}
    >
      {children}
    </StyledBottomSheetScrollView>
  );
});
BottomSheetScrollView.displayName = 'BottomSheetScrollView';

export const BottomSheetVirtualizedList = forwardRef<
  React.ElementRef<typeof GorhomBottomSheetVirtualizedList>,
  BottomSheetVirtualizedListProps
>(({ children, className, ...props }, ref) => {
  return (
    <StyledBottomSheetVirtualizedList
      ref={ref}
      className={cn(className, styles())}
      {...props}
    >
      {children}
    </StyledBottomSheetVirtualizedList>
  );
});
BottomSheetVirtualizedList.displayName = 'BottomSheetVirtualizedList';
