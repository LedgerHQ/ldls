import React from 'react';
import { TextInput } from 'react-native';
import { Search as SearchIcon } from '../../Symbols';
import { BaseInput, type BaseInputProps } from '../BaseInput';
import { InteractiveIcon } from '../InteractiveIcon';

export type SearchProps = Omit<BaseInputProps, 'prefix' | 'label'>;

export const Search = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  SearchProps
>((props, ref) => {
  return (
    <BaseInput
      ref={ref}
      prefix={
        <InteractiveIcon iconType='filled' disabled>
          <SearchIcon size={20} accessible={false} />
        </InteractiveIcon>
      }
      style={{ fontSize: 16, fontWeight: '500' }}
      {...props}
    />
  );
});

Search.displayName = 'Search';
