import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '@ledgerhq/ldls-utils-shared';
import { ChevronDown, Check, ChevronUp } from '../../Symbols';

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot='select' {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot='select-group' {...props} />;
}

const triggerStyles = cn(
  'group relative flex h-48 w-full items-center justify-between gap-8',
  'bg-muted rounded-sm px-16',
  'text-base body-2',
  'hover:bg-muted-hover',
  'focus:outline-none focus:ring-2 focus:ring-active',
  'disabled:cursor-not-allowed disabled:text-disabled',
);

const labelStyles = cn(
  'pointer-events-none absolute left-16 origin-left text-muted transition-all duration-[400ms]',
  'top-8 body-4 -translate-y-4',
  'group-data-[placeholder]:body-2 group-data-[placeholder]:translate-y-0 group-data-[placeholder]:top-[14px]',
  'group-has-[:disabled]:text-disabled',
  'truncate max-w-[calc(100%-var(--size-56))]',
);

interface SelectTriggerProps
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

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, labelClassName, label, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    data-slot='select-trigger'
    className={cn(triggerStyles, className)}
    {...props}
  >
    {label && (
      <label className={cn(labelStyles, labelClassName)}>{label}</label>
    )}
    <span className='mt-8 flex-1 truncate text-left opacity-100 transition-opacity duration-500 group-data-[placeholder]:mt-0 group-data-[placeholder]:opacity-0'>
      <SelectPrimitive.Value data-slot='select-value'>
        {children}
      </SelectPrimitive.Value>
    </span>
    <SelectPrimitive.Icon asChild>
      <ChevronDown size={20} className='shrink-0 text-muted' />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const contentStyles = cn(
  'relative z-select max-h-[var(--radix-select-content-available-height)] overflow-x-hidden overflow-y-auto',
  'bg-muted rounded-sm',
  'drop-shadow-md',
  'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
  'data-[side=bottom]:animate-slide-in-from-top',
  'data-[side=top]:animate-slide-in-from-bottom',
);

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal data-slot='select-portal'>
    <SelectPrimitive.Content
      ref={ref}
      data-slot='select-content'
      className={cn(
        contentStyles,
        position === 'popper' &&
          'data-[side=bottom]:translate-y-8 data-[side=left]:-translate-x-8 data-[side=right]:translate-x-8 data-[side=top]:-translate-y-8',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-8',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    data-slot='select-label'
    className={cn('px-8 pb-0 pt-4 text-muted body-3-semi-bold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const itemStyles = cn(
  'relative flex w-full cursor-default bg-base-transparent select-none items-center',
  'rounded-md px-8 py-8',
  'text-base body-2',
  'outline-none',
  'focus:bg-base-transparent-hover',
  'active:bg-base-transparent-pressed',
  'data-[disabled]:pointer-events-none',
);

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    data-slot='select-item'
    className={cn(itemStyles, className)}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
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
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    data-slot='select-separator'
    className={cn('h-px mx-8 my-4 border-b border-muted-subtle', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

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
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
