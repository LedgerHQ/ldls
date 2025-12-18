import { cn } from '@ledgerhq/lumen-utils-shared';
import React, { useState, useEffect, useCallback, useId } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ChevronDown } from '../../Symbols';
import { useControllableState, extractTextFromChildren } from '../../utils';
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
  SelectContentItem,
} from './types';

const triggerStyles = cn(
  'group relative h-48 bg-muted rounded-sm px-16 flex-row items-center justify-between',
);

/**
 * The root component that manages a select's state.
 *
 * This component coordinates between the trigger, content, and items.
 * It works with GlobalSelectProvider to display options in a bottom sheet.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-select-overview--docs Storybook}
 *
 * @example
 * import { Select, SelectTrigger, SelectContent, SelectItem, SelectItemText } from '@ledgerhq/lumen-ui-rnative';
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
    SelectProps['value']
  >({
    prop: controlledValue,
    defaultProp: defaultValue ?? undefined,
    onChange: (value: SelectProps['value']) => {
      if (value !== undefined) {
        onValueChange?.(value);
      }
    },
  });

  const [items, setItems] = useState<SelectContentItem[]>([]);

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
  const isFloatingLabel = hasValue;

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
            'absolute left-16 text-muted w-full transition-all duration-200',
            isFloatingLabel ? 'top-6 body-4' : 'top-14 body-2',
            disabled && 'text-disabled',
            labelClassName,
          )}
          numberOfLines={1}
        >
          {finalLabel}
        </Text>
      )}
      <View
        className={cn(
          'flex-1',
          finalLabel && hasValue && 'pt-16 pb-2',
          finalLabel && !hasValue && 'py-0',
        )}
      >
        {children}
      </View>
      <ChevronDown
        size={20}
        className={cn('text-muted ml-8', disabled && 'text-disabled')}
      />
    </Comp>
  );
};
SelectTrigger.displayName = 'SelectTrigger';

/**
 * Displays the current selected value
 */
export const SelectValue: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { value, items } = useSelectSafeContext({
    consumerName: 'SelectValue',
    contextRequired: true,
  });

  const selectedItem = items.find(
    (item) => item.type === 'item' && item.value === value,
  );

  if (!selectedItem || selectedItem.type !== 'item') {
    return null;
  }

  return (
    <Text
      className={cn('truncate text-left text-base body-2', className)}
      numberOfLines={1}
    >
      {selectedItem.label}
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
    const items: SelectContentItem[] = [];

    const extractItems = (child: React.ReactNode): void => {
      React.Children.forEach(child, (element) => {
        if (!React.isValidElement(element)) return;

        if (element.type === SelectItem) {
          const props = element.props as SelectItemProps;
          const textValue =
            props.textValue ??
            extractTextFromChildren(props.children, SelectItemText);
          items.push({
            type: 'item',
            value: props.value,
            label: textValue,
            disabled: props.disabled,
          });
        } else if (element.type === SelectGroup) {
          extractItems(element.props.children);
        } else if (element.type === SelectLabel) {
          const labelText = extractTextFromChildren(
            element.props.children,
            SelectItemText,
          );
          items.push({
            type: 'group-label',
            label: labelText,
          });
        } else if (element.type === SelectSeparator) {
          items.push({
            type: 'separator',
          });
        } else if (element.props?.children) {
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
      className={cn('mx-8 my-4 h-1 bg-muted-subtle', className)}
      {...props}
    />
  );
};
SelectSeparator.displayName = 'SelectSeparator';
