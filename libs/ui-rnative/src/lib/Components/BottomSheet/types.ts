import { BottomSheetProps as GorhomBottomSheetProps } from '@gorhom/bottom-sheet';
import { PropsWithChildren, ReactNode } from 'react';
import { ViewProps } from 'react-native';

type ExtendsGorhomBottomSheetProps = Omit<
  GorhomBottomSheetProps,
  | 'detached'
  | 'enableBlurKeyboardOnGesture'
  | 'enableDynamicSizing'
  | 'enableHandlePanningGesture'
  | 'enablePanDownToClose'
  | 'maxDynamicContentSize'
  | 'onChange'
  | 'snapPoints'
>;

export type BottomSheetProps = PropsWithChildren & {
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * The snap points represent allowed heights of the bottom sheet.
   * You can use presets like 'full', 'half', 'quarter' or define your own snap points in % (string) or pixel (number).
   * If you want to use dynamic sizing, you should not define snapPoints.
   * @default 'full'
   */
  snapPoints?: 'full' | 'half' | 'quarter' | string[] | number[];
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
  maxDynamicContentSize?: GorhomBottomSheetProps['maxDynamicContentSize'];
  /**
   * The callback function to handle the change event.
   * @default undefined
   */
  onChange?: GorhomBottomSheetProps['onChange'];
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
   * @default undefined
   */
  onClose?: () => void;
  /**
   * The callback function to handle the open event.
   * @default undefined
   */
  onOpen?: () => void;
  /**
   * If true, the backdrop will be displayed.
   */
  showBackdropPress?: boolean;
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
  enableHandlePanningGesture?: GorhomBottomSheetProps['enableHandlePanningGesture'];
  /**
   * Whether to enable pan down to close.
   * If true, the sheet can be closed by dragging down.
   * @default true
   */
  enablePanDownToClose?: GorhomBottomSheetProps['enablePanDownToClose'];
  /**
   * Defines whether the bottom sheet is attached to the bottom or no.
   * @default false
   */
  detached?: GorhomBottomSheetProps['detached'];
  /**
   * Whether to enable blur keyboard on gesture.
   * If true, the keyboard will be blurred when the user interacts with the bottom sheet.
   * @default true
   */
  enableBlurKeyboardOnGesture?: GorhomBottomSheetProps['enableBlurKeyboardOnGesture'];
} & ExtendsGorhomBottomSheetProps;

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
