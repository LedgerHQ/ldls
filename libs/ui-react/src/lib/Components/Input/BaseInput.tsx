import React from 'react';
import { cn } from '@ldls/utils-shared';

const baseInputStyles = cn(
  'peer block h-48 w-full rounded-md bg-muted px-12 text-base outline-none transition-colors body-2',
  'hover:bg-muted-hover focus-visible:ring-2 focus-visible:ring-active',
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled',
  'aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-error aria-[invalid=true]:border-error',
);

const baseLabelStyles = cn(
  'absolute left-12 top-8 origin-left text-muted transition-all duration-300 body-4',
  'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:body-2',
  'peer-focus:top-8 peer-focus:-translate-y-0 peer-focus:body-4',
);

export interface BaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The label text that floats above the input when focused or filled */
  label?: string;
  /** Additional class names to apply to the input */
  className?: string;
}

/**
 * Base input component with floating label and error state styling.
 * This is an internal component used to build other input components.
 *
 * @internal
 */
export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, label, id, disabled, ...props }, ref) => {
    // Generate a unique ID if one isn't provided
    const inputId = id || `input-${Math.random().toString(36).slice(2, 11)}`;

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          placeholder=" "
          className={cn(baseInputStyles, label && 'pt-16', className)}
          {...props}
        />
        {label && (
          <label htmlFor={inputId} className={baseLabelStyles}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

BaseInput.displayName = 'BaseInput';
