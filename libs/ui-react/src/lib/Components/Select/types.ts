import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

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
  typeof SelectPrimitive.Content
>;

export type SelectItemProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>;

export type SelectSeparatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;
