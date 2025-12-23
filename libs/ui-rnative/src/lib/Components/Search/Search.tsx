import React from 'react';
import { TextInput } from 'react-native';
import { Search as SearchIcon } from '../../Symbols';
import { BaseInput } from '../BaseInput';
import { type SearchProps } from './types';

export const Search = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  SearchProps
>((props, ref) => {
  return (
    <BaseInput
      ref={ref}
      prefix={<SearchIcon size={20} color='muted' accessible={false} />}
      {...props}
    />
  );
});

Search.displayName = 'Search';
