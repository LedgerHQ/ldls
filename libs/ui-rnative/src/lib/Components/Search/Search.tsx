import React from 'react';
import { TextInput } from 'react-native';
import { Search as SearchIcon } from '../../Symbols';
import { BaseInput, type BaseInputProps } from '../BaseInput';

export type SearchProps = Omit<BaseInputProps, 'prefix' | 'label'>;

export const Search = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  SearchProps
>((props, ref) => {
  return (
    <BaseInput
      ref={ref}
      prefix={
        <SearchIcon
          size={20}
          className='text-muted group-has-[:disabled]:text-disabled'
          accessible={false}
        />
      }
      style={{ fontSize: 16, fontWeight: '500' }}
      {...props}
    />
  );
});

Search.displayName = 'Search';
