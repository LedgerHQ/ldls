import { cn } from '@ledgerhq/ldls-utils-shared';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { DeleteCircleFill } from 'src/lib/Symbols';

export type BaseInputProps = {
  /** The label text that floats above the input when focused or filled */
  label?: string;
  /** Additional class names to apply to the input element */
  className?: string;
  /** Additional class names to apply to the container element */
  containerClassName?: string;
  /** Additional class names to apply to the label element */
  labelClassName?: string;
  /** An optional error message displayed below the input */
  errorMessage?: string;
  /**
   * Custom content to render after the input (right side in LTR).
   * @example suffix={<Icon />}
   */
  suffix?: React.ReactNode;
  /**
   * Custom content to render before the input (left side in LTR).
   * @example prefix={<Icon />}
   */
  prefix?: React.ReactNode;
  /** Optional function to extend the default clear behavior with custom logic */
  onClear?: () => void;
  /** Hide the clear button (shown by default when input has content) */
  hideClearButton?: boolean;
};

const baseContainerStyles = cn(
  'group cursor-text relative flex h-48 w-full items-center gap-8 px-16 rounded-sm bg-muted transition-colors',
  'hover:bg-muted-hover focus-within:ring-2 focus-within:ring-active',
  'has-[:disabled]:pointer-events-none has-[:disabled]:cursor-not-allowed has-[:disabled]:bg-disabled has-[:disabled]:text-disabled',
  'has-[:invalid]:ring-1 has-[:invalid]:ring-error has-[:invalid]:border-error',
  'has-[input[aria-invalid="true"]]:ring-1 has-[input[aria-invalid="true"]]:ring-error has-[input[aria-invalid="true"]]:border-error',
);

const baseInputStyles = cn(
  'peer flex-1 w-full text-base outline-none body-1 transition-colors bg-muted caret-active',
  'group-hover:bg-muted-hover group-disabled:bg-disabled',
  'group-has-[:disabled]:pointer-events-none group-has-[:disabled]:cursor-not-allowed group-has-[:disabled]:bg-disabled group-has-[:disabled]:text-disabled',
  'placeholder:text-muted group-has-[:disabled]:placeholder:text-disabled',
  '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
  'truncate',
);

const baseLabelStyles = cn(
  'pointer-events-none absolute left-16 top-6 origin-left text-muted transition-all duration-300 body-4',
  'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:body-2',
  'group-has-[:disabled]:text-disabled',
  'peer-focus:top-6 peer-focus:-translate-y-0 peer-focus:body-4',
  'truncate w-[calc(100%-var(--size-56))]',
);

export const BaseInput = React.forwardRef<TextInput, BaseInputProps>(
  ({ label, errorMessage, className, containerClassName, labelClassName }) => {
    return (
      <View>
        <View className={cn(baseContainerStyles, containerClassName)}>
          <TextInput
            className={cn(baseInputStyles, label && 'pt-12 body-2', className)}
            value={'asdf'}
          />
          {label && (
            <Text
              className={cn(
                baseLabelStyles,
                errorMessage && 'text-error',
                labelClassName,
              )}
            >
              {label}
            </Text>
          )}
        </View>
        {errorMessage && (
          <View className='mt-8 flex-row items-center gap-2' role='alert'>
            <DeleteCircleFill size={16} className='shrink-0 text-error' />
            <Text className='text-error body-3'>{errorMessage}</Text>
          </View>
        )}
      </View>
    );
  },
);
