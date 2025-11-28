import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

export type BannerProps = ViewProps & {
  /**
   * The type of banner which affects color and icon.
   */
  appearance?: 'info' | 'success' | 'warning' | 'error';
  /**
   * The main title of the banner.
   */
  title?: string;
  /**
   * Optional descriptive text.
   */
  description?: ReactNode;
  /**
   * Optional primary action.
   */
  primaryAction?: React.ReactNode;
  /**
   * Optional secondary action.
   */
  secondaryAction?: React.ReactNode;
  /**
   * Optional close action.
   */
  onClose?: () => void;
  /**
   * Optional aria label for the close button.
   */
  closeAriaLabel?: string;
};
