import { ReactNode } from 'react';
import { PressableProps, ViewProps, TextProps } from 'react-native';

export type SelectProps = {
  /**
   * The children of the select (SelectTrigger, SelectContent)
   */
  children: ReactNode;
  /**
   * The controlled open state of the select.
   * Must be used in conjunction with onOpenChange.
   */
  open?: boolean;
  /**
   * The value of the select when initially rendered.
   * Use when you do not need to control the state of the select.
   */
  defaultValue?: string;
  /**
   * Event handler called when the open state of the select changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The open state of the select when it is initially rendered.
   * Use when you do not need to control its open state.
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * When true, prevents the user from interacting with select.
   */
  disabled?: boolean;
  /**
   * The controlled value of the select.
   * Should be used in conjunction with onValueChange.
   */
  value?: string;
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;
};

export type SelectTriggerProps = {
  /**
   * The children to render inside the trigger
   */
  children?: ReactNode;
  /**
   * Extra class names to apply to the trigger element
   * @example className='border-error'
   */
  className?: string;
  /**
   * The label text that floats above the input when focused or filled
   * @example label='Select an option'
   */
  label?: string;
  /**
   * Additional class names to apply to the label element
   * @example labelClassName='text-error'
   */
  labelClassName?: string;
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
} & Omit<PressableProps, 'children' | 'onPress'>;

export type SelectContentProps = {
  /**
   * The children of the select content (SelectItem, SelectGroup, etc.)
   */
  children: ReactNode;
};

export type SelectGroupProps = {
  /**
   * The children of the select group (SelectLabel, SelectItem)
   */
  children: ReactNode;
} & ViewProps;

export type SelectLabelProps = {
  /**
   * The children of the select label
   * @required
   */
  children: ReactNode;
  /**
   * Extra class names to apply to the label element
   */
  className?: string;
} & TextProps;

export type SelectItemProps = {
  /**
   * The value of the select item
   * @required
   */
  value: string;
  /**
   * The children of the select item
   * @required
   */
  children: ReactNode;
  /**
   * Optional text used for display. Use this when the content is complex.
   */
  textValue?: string;
  /**
   * The disabled state of the select item
   */
  disabled?: boolean;
  /**
   * Extra class names to apply to the item element
   */
  className?: string;
} & Omit<PressableProps, 'children' | 'onPress' | 'disabled'>;

export type SelectItemTextProps = {
  /**
   * The children of the select item text
   * @required
   */
  children: ReactNode;
  /**
   * Extra class names to apply to the item text element
   */
  className?: string;
} & TextProps;

export type SelectSeparatorProps = {
  /**
   * Extra class names to apply to the separator element
   */
  className?: string;
} & ViewProps;

export type SelectItemData = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectData = {
  id: string;
  items: SelectItemData[];
  selectedValue: string | undefined;
  onSelectValue: (value: string) => void;
  setOpen?: (open: boolean) => void;
  label?: string;
};
