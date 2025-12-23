import React from 'react';
import { TextInput } from 'react-native';
import { LumenStyleSheet } from '../../../styles';
import { Search as SearchIcon } from '../../Symbols';
import { BaseInput } from '../BaseInput';
import { type SearchProps } from './Search.types';

export const Search = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  SearchProps
>((props, ref) => {
  const { theme } = LumenStyleSheet.useTheme();

  return (
    <BaseInput
      ref={ref}
      prefix={
        <SearchIcon
          size={20}
          color={theme.colors.text.muted}
          accessible={false}
        />
      }
      {...props}
    />
  );
});

Search.displayName = 'Search';
