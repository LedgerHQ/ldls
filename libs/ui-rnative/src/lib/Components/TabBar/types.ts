import { ReactElement } from 'react';
import { IconSize } from '../Icon';
import { BoxProps } from '../Utility';
import { TabBarItem } from './TabBar';

type IconComponent = React.ComponentType<{
  size?: IconSize;
  className?: string;
}>;

export type TabBarItemProps = {
  value: string;
  label?: string;
  icon?: IconComponent;
  activeIcon?: IconComponent;
};

export type TabBarChild = ReactElement<TabBarItemProps, typeof TabBarItem>;
export type TabBarChildren = [TabBarChild, TabBarChild, ...TabBarChild[]];

export type TabBarProps = {
  active: string;
  onTabPress: (active: string) => void;
  children: TabBarChildren;
} & Omit<BoxProps, 'children'>;
