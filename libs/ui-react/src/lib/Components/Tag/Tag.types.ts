import { IconSize } from '../Icon/Icon';

export type TagProps = {
  /**
   * The appearance of the tag.
   * @default accent
   */
  appearance?: 'base' | 'gray' | 'accent' | 'success' | 'error' | 'warning';
  /**
   * The size of the tag.
   * @default lg
   */
  size?: 'sm' | 'lg';
  /**
   * Icon component to render.
   */
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * Label text to display.
   * @required
   */
  label: string;
  /**
   * When `true`, prevents the user from interacting with the tag.
   *
   * @default false
   */
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
