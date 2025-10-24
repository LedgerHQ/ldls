import { BottomSheetProps as GorhomBottomSheetProps } from '@gorhom/bottom-sheet';
import { PropsWithChildren, ReactNode } from 'react';
import { ViewProps } from 'react-native';

export type BottomSheetProps = PropsWithChildren & {
  /**
   * The callback function to handle the back event.
   */
  onBack?: () => void;
  /**
   * If true, the close button will be displayed.
   * This property should be used when no callback is required for the close action.
   * @default false
   */
  closeable?: boolean;
  /**
   * If true, the close button will be displayed
   * This property should be used when a callback function to handle the close event is required.
   * @default false
   */
  onClose?: () => void;
  /**
   * The size variant of the bottom sheet.
   * @default 'sm'
   */
  size?: 'sm' | 'lg';
  /**
   * The snap points of the bottom sheet.
   */
  snapPoints?: 'full' | 'half' | 'quarter' | string[] | number[];
  /**
   * Whether to enable handle panning gesture.
   * If true, the whole sheet area can be dragged to resize the sheet.
   * @default false
   */
  enableHandlePanningGesture?: boolean;
  /**
   * Whether to enable pan down to close.
   * If true, the sheet can be closed by dragging down.
   * @default true
   */
  enablePanDownToClose?: boolean;
  /**
   * Defines whether the bottom sheet is attached to the bottom or no.
   * @default false
   */
  detached?: boolean;
  /**
   * The callback function to handle the change event.
   * @default undefined
   */
  onChange?: GorhomBottomSheetProps['onChange'];
};

export type BottomSheetHeaderActionsProps = ViewProps &
  Pick<BottomSheetProps, 'closeable' | 'onClose' | 'onBack'>;

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
   * If true, the close button will be displayed.
   * This property should be used when no callback is required for the close action.
   * @default false
   */
  closeable?: boolean;
  /**
   * If true, the close button will be displayed
   * This property should be used when a callback function to handle the close event is required.
   * @default false
   */
  onClose?: () => void;
};
