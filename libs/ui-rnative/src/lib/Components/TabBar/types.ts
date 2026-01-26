import { ReactElement, ReactNode } from 'react';
import { BoxProps } from '../Utility';
import { TabBarItem } from './TabBar';

export type TabBarItemProps = {
  value: string;
  label?: string;
  icon?: ReactNode;
};

export type TabBarChildren =
  | ReactElement<TabBarItemProps, typeof TabBarItem>
  | ReactElement<TabBarItemProps, typeof TabBarItem>[];

export type TabBarProps = {
  active?: string;
  onTabPress?: (active: string) => void;
  children: TabBarChildren;
} & Omit<BoxProps, 'children'>;
