import { PropsWithChildren, ReactNode } from 'react';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

export type BottomSheetHeaderProps = ViewProps & {
  /**
   * The title of the header.
   */
  title?: ReactNode;
  /**
   * The description of the header.
   */
  description?: ReactNode;
  /**
   * The callback function to handle the back event.
   */
  onBack?: () => void;
  /**
   * The callback function to handle the close event.
   */
  onClose?: () => void;
};

export type BottomSheetProps = PropsWithChildren & {};
