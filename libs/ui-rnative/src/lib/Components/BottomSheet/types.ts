import { PropsWithChildren, ReactNode } from 'react';
import { ViewProps } from 'react-native';

export type BottomSheetProps = PropsWithChildren & {
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * The snap points represent allowed heights of the bottom sheet.
   * You can use presets like 'full', 'medium', 'small' or define your own snap points in % (string) or pixel (number).
   * If you want to use dynamic sizing, you should not define snapPoints.
   * @default 'full'
   */
  snapPoints?: 'full' | 'medium' | 'small' | string[] | number[];
  /**
   * If true, the bottom sheet will be resized to fit the content.
   * You should not define snapPoints when enableDynamicSizing is true.
   * @default false
   */
  enableDynamicSizing?: boolean;
  /**
   * The maximum dynamic content size of the bottom sheet.
   * You should define maxDynamicContentSize when enableDynamicSizing is true.
   * By default, the max dynamic content size is the container height.
   * @default undefined
   */
  maxDynamicContentSize?: number;
  /**
   * The callback function to handle the change event.
   * The index of the snap point in the array.
   * @default undefined
   */
  onChange?: (index: number, position: number, type: 0 | 1) => void;
  /**
   * The callback function to handle the change event.
   * @default undefined
   */
  onAnimate?: (
    fromIndex: number,
    toIndex: number,
    fromPosition: number,
    toPosition: number,
  ) => void;
  /**
   * The callback function to handle the back event.
   */
  onBack?: () => void;
  /**
   * If true, the close button will be hidden.
   * @default false
   */
  hideCloseButton?: boolean;
  /**
   * Callback function to handle the close event.
   * @default undefined
   */
  onClose?: () => void;
  /**
   * Callback function to handle the open event.
   * @default undefined
   */
  onOpen?: () => void;
  /**
   * If true, the backdrop will be hidden.
   * @default false
   */
  hideBackdrop?: boolean;
  /**
   * The behavior of the backdrop press event.
   * You can defined an index to snap to when the backdrop is pressed.
   * @default 'close'
   */
  backdropPressBehavior?: 'none' | 'close' | number;
  /**
   * The callback function to handle the backdrop press event.
   * @default undefined
   */
  onBackdropPress?: () => void;
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
   * Whether to enable blur keyboard on gesture.
   * If true, the keyboard will be blurred when the user interacts with the bottom sheet.
   * @default true
   */
  enableBlurKeyboardOnGesture?: boolean;
};

export type BottomSheetHeaderProps = ViewProps & {
  /**
   * The appearance of the header.
   * @default 'compact'
   */
  appearance?: 'compact' | 'expanded';
  /**
   * The title of the header.
   */
  title?: ReactNode;
  /**
   * The description of the header.
   */
  description?: ReactNode;
  /**
   * Add spacing when used with virtual lists or section lists.
   * For these cases, spacing is needed because the header can't be wrapped on a BottomSheetView
   * @default false
   */
  spacing?: boolean;
};
