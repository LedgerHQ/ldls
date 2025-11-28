import { cn } from '@ledgerhq/ldls-utils-shared';
import React, { useState, useEffect, useCallback, useId } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ChevronDown } from '../../Symbols';
import { useControllableState } from '../../utils';
import { SlotPressable } from '../Slot';
import { useSelectActions } from './GlobalSelectContext';
import { SelectContextProvider, useSelectSafeContext } from './SelectContext';
import type {
  SelectProps,
  SelectTriggerProps,
  SelectContentProps,
  SelectGroupProps,
  SelectLabelProps,
  SelectItemProps,
  SelectItemTextProps,
  SelectSeparatorProps,
  SelectItemData,
} from './types';

/**
 * The root component that manages a select's state.
 *
 * This component coordinates between the trigger, content, and items.
 * It works with GlobalSelectProvider to display options in a bottom sheet.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-select-overview--docs Storybook}
 *
 * @example
 * import { Select, SelectTrigger, SelectContent, SelectItem, SelectItemText } from '@ledgerhq/ldls-ui-rnative';
 *
 * function App() {
 *   const [value, setValue] = useState('option1');
 *   return (
 *     <Select value={value} onValueChange={setValue}>
 *       <SelectTrigger label="Choose option">
 *         <SelectValue />
 *       </SelectTrigger>
 *       <SelectContent>
 *         <SelectItem value="option1">
 *           <SelectItemText>Option 1</SelectItemText>
 *         </SelectItem>
 *         <SelectItem value="option2">
 *           <SelectItemText>Option 2</SelectItemText>
 *         </SelectItem>
 *       </SelectContent>
 *     </Select>
 *   );
 * }
 */
export const Select: React.FC<SelectProps> = ({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled = false,
}) => {
  const selectId = useId();

  const [internalOpen, setInternalOpen] = useControllableState({
    prop: controlledOpen,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const [internalValue, setInternalValue] = useControllableState<
    string | undefined
  >({
    prop: controlledValue,
    defaultProp: defaultValue ?? undefined,
    onChange: (value: string | undefined) => {
      if (value !== undefined) {
        onValueChange?.(value);
      }
    },
  });

  const [items, setItems] = useState<SelectItemData[]>([]);

  const setOpen = useCallback(
    (newOpen: boolean) => {
      if (!disabled) {
        setInternalOpen?.(newOpen);
      }
    },
    [setInternalOpen, disabled],
  );

  const handleValueChange = useCallback(
    (newValue: string) => {
      setInternalValue?.(newValue);
    },
    [setInternalValue],
  );

  return (
    <SelectContextProvider
      selectId={selectId}
      open={internalOpen ?? false}
      setOpen={setOpen}
      value={internalValue}
      onValueChange={handleValueChange}
      disabled={disabled}
      items={items}
      setItems={setItems}
    >
      {children}
    </SelectContextProvider>
  );
};
Select.displayName = 'Select';

const triggerStyles = cn('group relative h-48 bg-muted rounded-sm px-16');

const labelStyles = cn(
  'absolute left-16 text-muted transition-all duration-300',
  'top-10 body-4 -translate-y-4',
);

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  children,
  className,
  label,
  labelClassName,
  asChild = false,
  disabled: triggerDisabled,
  ...props
}) => {
  const {
    selectId,
    setOpen,
    items,
    value,
    disabled: contextDisabled,
    label: contextLabel,
    onValueChange,
  } = useSelectSafeContext({
    consumerName: 'SelectTrigger',
    contextRequired: true,
  });

  const { showSelect } = useSelectActions();
  const disabled = triggerDisabled ?? contextDisabled;
  const finalLabel = label ?? contextLabel;

  const handlePress = useCallback((): void => {
    if (!disabled && items.length > 0) {
      setOpen(true);
      showSelect({
        id: selectId,
        items,
        selectedValue: value,
        onSelectValue: onValueChange,
        setOpen,
        label: finalLabel,
      });
    }
  }, [
    disabled,
    items,
    selectId,
    value,
    setOpen,
    showSelect,
    finalLabel,
    onValueChange,
  ]);

  const hasValue = value !== undefined && value !== '';
  const Comp = asChild ? SlotPressable : Pressable;

  return (
    <Comp
      disabled={disabled}
      onPress={handlePress}
      className={cn(triggerStyles, disabled && 'opacity-50', className)}
      {...props}
    >
      {finalLabel && (
        <Text
          className={cn(
            labelStyles,
            hasValue ? 'body-4' : 'body-2 top-14 translate-y-0',
            disabled && 'text-disabled',
            labelClassName,
          )}
        >
          {finalLabel}
        </Text>
      )}
      <View
        className={cn(
          'flex-1',
          finalLabel && hasValue && 'mt-16',
          finalLabel && !hasValue && 'mt-0',
        )}
      >
        {children}
      </View>
      <ChevronDown
        size={20}
        className={cn(
          'absolute right-0 text-muted',
          disabled && 'text-disabled',
        )}
      />
    </Comp>
  );
};
SelectTrigger.displayName = 'SelectTrigger';

/**
 * Displays the current selected value or placeholder
 */
export const SelectValue: React.FC<{
  placeholder?: string;
  className?: string;
}> = ({ placeholder = 'Select...', className }) => {
  const { value, items } = useSelectSafeContext({
    consumerName: 'SelectValue',
    contextRequired: true,
  });

  const selectedItem = items.find((item) => item.value === value);
  const displayText = selectedItem?.label ?? placeholder;

  return (
    <Text
      className={cn(
        'truncate text-left body-2',
        !selectedItem && 'text-muted',
        selectedItem && 'text-base translate-y-4',
        className,
      )}
      numberOfLines={1}
    >
      {displayText}
    </Text>
  );
};
SelectValue.displayName = 'SelectValue';

/**
 * Container for select items. This component collects all items
 * and makes them available to the bottom sheet.
 */
export const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
  const { setItems } = useSelectSafeContext({
    consumerName: 'SelectContent',
    contextRequired: true,
  });

  useEffect(() => {
    const items: SelectItemData[] = [];

    const extractItems = (child: React.ReactNode): void => {
      React.Children.forEach(child, (element) => {
        if (!React.isValidElement(element)) return;

        if (element.type === SelectItem) {
          const props = element.props as SelectItemProps;
          const textValue =
            props.textValue ?? extractTextFromChildren(props.children);
          items.push({
            value: props.value,
            label: textValue,
            disabled: props.disabled,
          });
        }

        if (element.type === SelectGroup && element.props.children) {
          extractItems(element.props.children);
        }

        if (element.props?.children) {
          extractItems(element.props.children);
        }
      });
    };

    extractItems(children);
    setItems(items);
  }, [children, setItems]);

  return null;
};
SelectContent.displayName = 'SelectContent';

/**
 * Helper function to extract text from children
 */
const extractTextFromChildren = (children: React.ReactNode): string => {
  let text = '';

  React.Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child;
    } else if (React.isValidElement(child)) {
      if (child.type === SelectItemText && child.props.children) {
        text += extractTextFromChildren(child.props.children);
      } else if (child.props?.children) {
        text += extractTextFromChildren(child.props.children);
      }
    }
  });

  return text;
};

export const SelectGroup: React.FC<SelectGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <View className={cn('flex w-full gap-4', className)} {...props}>
      {children}
    </View>
  );
};
SelectGroup.displayName = 'SelectGroup';

export const SelectLabel: React.FC<SelectLabelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text
      className={cn(
        'px-8 pb-0 pt-8 text-muted body-3-semi-bold mb-4',
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  );
};
SelectLabel.displayName = 'SelectLabel';

/**
 * Individual select item. Note: The actual rendering happens in GlobalSelectBottomSheet.
 * This component is used to declare the structure and collect item data.
 */
export const SelectItem: React.FC<SelectItemProps> = () => {
  // This component doesn't render anything - it's used for structure
  // The actual items are rendered in GlobalSelectBottomSheet
  return null;
};
SelectItem.displayName = 'SelectItem';

export const SelectItemText: React.FC<SelectItemTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text className={cn('text-base body-2', className)} {...props}>
      {children}
    </Text>
  );
};
SelectItemText.displayName = 'SelectItemText';

export const SelectSeparator: React.FC<SelectSeparatorProps> = ({
  className,
  ...props
}) => {
  return (
    <View
      className={cn('h-px mx-8 my-4 bg-muted-subtle', className)}
      {...props}
    />
  );
};
SelectSeparator.displayName = 'SelectSeparator';
