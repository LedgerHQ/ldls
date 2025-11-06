import { cn } from '@ledgerhq/ldls-utils-shared';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { ChevronDown, Check, ChevronUp } from '../../Symbols';
import type {
  SelectProps,
  SelectTriggerProps,
  SelectContentProps,
  SelectGroupProps,
  SelectLabelProps,
  SelectItemTextProps,
  SelectItemProps,
  SelectSeparatorProps,
} from './types';

function Select({ ...props }: SelectProps) {
  return <SelectPrimitive.Root data-slot='select' {...props} />;
}

function SelectGroup({ ...props }: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot='select-group' {...props} />;
}

const triggerStyles = cn(
  'group relative flex h-48 w-full items-center justify-between gap-8',
  'bg-muted rounded-sm px-16',
  'text-base body-2',
  'hover:bg-muted-hover',
  'focus:outline-none focus:ring-2 focus:ring-focus',
  'disabled:cursor-not-allowed disabled:text-disabled',
);

const labelStyles = cn(
  'pointer-events-none absolute left-16 text-muted origin-left transition-all duration-300',
  'top-10 body-4 -translate-y-4',
  'group-data-[placeholder]:body-2 group-data-[placeholder]:translate-y-0 group-data-[placeholder]:top-14',
  'group-data-[:disabled]:text-disabled group-data-[disabled]:text-disabled disabled:text-disabled group-data-[placeholder][disabled]:text-disabled',
  'truncate max-w-[calc(100%-var(--size-56))]',
);

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, labelClassName, label, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    data-slot='select-trigger'
    className={cn(triggerStyles, className)}
    {...props}
  >
    {label && (
      <label className={cn(labelStyles, labelClassName)}>{label}</label>
    )}
    <span className='mt-16 flex-1 truncate text-left opacity-100 transition-opacity delay-100 duration-300 group-data-[placeholder]:mt-0 group-data-[placeholder]:opacity-0'>
      <SelectPrimitive.Value data-slot='select-value' />
    </span>
    <SelectPrimitive.Icon asChild>
      <ChevronDown
        size={20}
        className='shrink-0 text-muted group-data-[disabled]:text-disabled '
      />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const contentStyles = cva(
  [
    'relative z-select max-h-[var(--radix-select-content-available-height)] overflow-y-auto overflow-x-hidden',
    'rounded-sm bg-muted',
    'shadow-md',
    'data-[side=bottom]:animate-slide-in-from-top-8',
    'data-[side=top]:animate-slide-in-from-bottom-8',
    'data-[side=left]:animate-slide-in-from-right-8',
    'data-[side=right]:animate-slide-in-from-left-8',
  ],
  {
    variants: {
      position: {
        popper:
          'data-[side=bottom]:translate-y-8 data-[side=left]:-translate-x-8 data-[side=right]:translate-x-8 data-[side=top]:-translate-y-8',
        'item-aligned': '',
      },
    },
    defaultVariants: {
      position: 'popper',
    },
  },
);

const viewportStyles = cva('p-8', {
  variants: {
    position: {
      popper:
        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
      'item-aligned': '',
    },
  },
  defaultVariants: {
    position: 'popper',
  },
});

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal data-slot='select-portal'>
    <SelectPrimitive.Content
      ref={ref}
      data-slot='select-content'
      className={cn(contentStyles({ position }), className)}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport className={viewportStyles({ position })}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    data-slot='select-label'
    className={cn('px-8 pb-0 pt-8 text-muted body-3-semi-bold mb-4', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const itemStyles = cn(
  'relative flex w-full cursor-default bg-base-transparent select-none items-center',
  'rounded-sm px-8 py-8',
  'text-base body-2',
  'outline-none',
  'focus:bg-base-transparent-hover',
  'active:bg-base-transparent-pressed',
  'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-disabled',
);

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    data-slot='select-item'
    className={cn(itemStyles, className)}
    {...props}
  >
    {children}
    <span className='absolute right-8 flex size-24 items-center justify-center'>
      <SelectPrimitive.ItemIndicator>
        <Check size={24} className='text-active' />
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    data-slot='select-separator'
    className={cn('h-px mx-8 my-4 border-b border-muted-subtle', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const SelectItemText = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemText>,
  SelectItemTextProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ItemText
    ref={ref}
    data-slot='select-item-text'
    className={cn('text-muted body-2', className)}
    {...props}
  />
));
SelectItemText.displayName = SelectPrimitive.ItemText.displayName;

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot='select-scroll-up-button'
      className={cn(
        'flex cursor-default items-center justify-center py-1 text-muted',
        className,
      )}
      {...props}
    >
      <ChevronUp className='size-4' />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot='select-scroll-down-button'
      className={cn(
        'flex cursor-default items-center justify-center py-1 text-muted',
        className,
      )}
      {...props}
    >
      <ChevronDown className='size-4' />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItemText,
  SelectItem,
  SelectSeparator,
  type SelectProps,
  type SelectTriggerProps,
  type SelectContentProps,
  type SelectGroupProps,
  type SelectLabelProps,
  type SelectItemTextProps,
  type SelectItemProps,
  type SelectSeparatorProps,
};
