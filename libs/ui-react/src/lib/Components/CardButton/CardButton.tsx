import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@ldls/utils-shared';
import { IconSize } from '../Icon/Icon';
import { ChevronRight } from '../../Symbols';

const buttonVariants = cva(
  'inline-flex h-fit w-fit max-w-full cursor-pointer items-center gap-12 rounded-sm p-12 transition-colors focus-visible:outline-focus focus-visible:ring-2 disabled:pointer-events-none disabled:text-disabled',
  {
    variants: {
      appearance: {
        base: 'bg-muted text-base hover:bg-muted-hover active:bg-muted-pressed disabled:bg-disabled',
        outline:
          'bg-base-transparent text-base outline-dashed outline-muted-subtle hover:bg-base-transparent-hover hover:outline-muted-subtle-hover focus-visible:outline-none focus-visible:outline-offset-0 active:bg-base-transparent-pressed active:outline-muted-subtle-pressed disabled:bg-base-transparent disabled:outline-disabled',
      },
      isFull: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      appearance: 'base',
    },
  },
);

export interface CardButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  title: string;
  description?: string;
  caret?: boolean;
  isFull?: boolean;
}

export const CardButton = React.forwardRef<HTMLButtonElement, CardButtonProps>(
  (
    {
      className,
      appearance,
      icon,
      title,
      description,
      caret,
      isFull,
      ...props
    },
    ref,
  ) => {
    const IconComponent = icon;

    return (
      <button
        ref={ref}
        className={cn(
          className,
          buttonVariants({
            appearance,
            isFull,
          }),
        )}
        disabled={props.disabled}
        {...props}
      >
        {IconComponent && <IconComponent size={24} className="flex-shrink-0" />}
        <div className="flex min-w-0 flex-1 flex-col gap-4 text-left">
          <div className="min-w-0 truncate body-1-semi-bold">{title}</div>
          {description && (
            <div className="line-clamp-2 min-w-0 body-2">{description}</div>
          )}
        </div>
        {caret && <ChevronRight size={24} className="flex-shrink-0" />}
      </button>
    );
  },
);
CardButton.displayName = 'CardButton';
