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

export type TabBarChildren =
  | ReactElement<TabBarItemProps, typeof TabBarItem>
  | ReactElement<TabBarItemProps, typeof TabBarItem>[];

export type TabBarProps = {
  active?: string;
  onTabPress?: (active: string) => void;
  children: TabBarChildren;
} & Omit<BoxProps, 'children'>;
