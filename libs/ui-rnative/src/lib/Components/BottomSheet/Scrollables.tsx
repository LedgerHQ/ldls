import {
  BottomSheetView as GorhomBottomSheetView,
  BottomSheetFlatList as GorhomBottomSheetFlatList,
  BottomSheetSectionList as GorhomBottomSheetSectionList,
  BottomSheetScrollView as GorhomBottomSheetScrollView,
  BottomSheetVirtualizedList as GorhomBottomSheetVirtualizedList,
} from '@gorhom/bottom-sheet';
import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import { remapProps } from 'nativewind';
import { FC } from 'react';

const styles = cva('mt-16 flex-1 px-16 pb-24');

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

export const BottomSheetView: FC<BottomSheetViewProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <_BottomSheetView className={cn(className, styles())} {...props}>
      {children}
    </_BottomSheetView>
  );
};

export const BottomSheetFlatList: FC<BottomSheetFlatListProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <_BottomSheetFlatList className={cn(className, styles())} {...props}>
      {children}
    </_BottomSheetFlatList>
  );
};
export const BottomSheetSectionList: FC<BottomSheetSectionListProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <_BottomSheetSectionList className={cn(className, styles())} {...props}>
      {children}
    </_BottomSheetSectionList>
  );
};
export const BottomSheetScrollView: FC<BottomSheetScrollViewProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <_BottomSheetScrollView className={cn(className, styles())} {...props}>
      {children}
    </_BottomSheetScrollView>
  );
};
export const BottomSheetVirtualizedList: FC<
  BottomSheetVirtualizedListProps
> = ({ children, className, ...props }) => {
  return (
    <_BottomSheetVirtualizedList className={cn(className, styles())} {...props}>
      {children}
    </_BottomSheetVirtualizedList>
  );
};

const _BottomSheetView = remapProps(GorhomBottomSheetView, {
  className: 'style',
});
const _BottomSheetFlatList = remapProps(GorhomBottomSheetFlatList, {
  className: 'style',
});
const _BottomSheetSectionList = remapProps(GorhomBottomSheetSectionList, {
  className: 'style',
});
const _BottomSheetScrollView = remapProps(GorhomBottomSheetScrollView, {
  className: 'style',
});
const _BottomSheetVirtualizedList = remapProps(
  GorhomBottomSheetVirtualizedList,
  { className: 'style' },
);
