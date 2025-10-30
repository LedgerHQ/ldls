import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';

export type SelectTriggerProps = {
  /**
   * The label text that floats above the input when focused or filled
   * @example label='Choose an option'
   */
  label?: string;
  /** Additional class names to apply to the label element
   * @example labelClassName='text-error'
   */
  labelClassName?: string;
} & React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;

export type SelectContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
>;

export type SelectItemProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>;

export type SelectSeparatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;
