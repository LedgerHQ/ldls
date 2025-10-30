import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  /**
   * The label text that floats above the input when focused or filled
   * @example label='Choose an option'
   */
  label?: string;
  /** Additional class names to apply to the label element
   * @example labelClassName='text-error'
   */
  labelClassName?: string;
}

export type SelectContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content & {
    /**
     * The positioning mode for the select content
     * @default 'popper'
     */
    position?: 'popper' | 'item-aligned';
    /**
     * The side of the trigger to position the content
     * @default 'bottom'
     */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * The distance in pixels from the trigger
     * @default 0
     */
    sideOffset?: number;
  }
>;

export type SelectItemProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>;

export type SelectSeparatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;
