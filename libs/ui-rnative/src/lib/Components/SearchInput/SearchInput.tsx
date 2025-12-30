import React from 'react';
import { TextInput } from 'react-native';
import { Search as SearchIcon } from '../../Symbols';
import { BaseInput } from '../BaseInput';
import { type SearchInputProps } from './types';

export const SearchInput = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  SearchInputProps
>((props, ref) => {
  return (
    <BaseInput
      ref={ref}
      prefix={<SearchIcon size={20} color='muted' accessible={false} />}
      {...props}
    />
  );
});

SearchInput.displayName = 'SearchInput';
