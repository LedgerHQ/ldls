import React from 'react';
import { SearchInput, SearchInputProps } from './SearchInput';

import figma from '@figma/code-connect';

figma.connect(
  SearchInput,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=2248%3A3468',
  {
    imports: ["import { SearchInput } from '@ledgerhq/lumen-ui-react'"],
    props: {
      placeholder: figma.string('label'),
      value: figma.enum('search-state', {
        placeholder: '',
        typing: 'Search text',
      }),
      disabled: figma.enum('state', {
        disabled: true,
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-searchinput-overview--docs',
      },
    ],
    example: (props: SearchInputProps) => (
      <SearchInput
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
      />
    ),
  },
);

