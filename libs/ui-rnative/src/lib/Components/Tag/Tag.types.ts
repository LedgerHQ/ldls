import { ComponentType } from 'react';
import { ViewProps } from 'react-native';
import { IconSize } from '../Icon';

export interface TagProps extends ViewProps {
  /**
   * The appearance of the tag.
   */
  appearance?:
    | 'base'
    | 'gray'
    | 'accent'
    | 'success'
    | 'error'
    | 'warning'
    | 'disabled';
  /**
   * The icon of the tag.
   */
  icon?: ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * The label of the tag.
   */
  label: string;
  /**
   * The size of the tag.
   */
  size?: 'sm' | 'lg';
}
