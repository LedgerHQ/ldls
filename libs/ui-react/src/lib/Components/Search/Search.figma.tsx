import React from 'react';
import { Search, SearchProps } from './Search';

import figma from '@figma/code-connect';

figma.connect(
  Search,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=2248%3A3468',
  {
    imports: ["import { Search } from '@ledgerhq/ldls-ui-react'"],
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
        url: 'https://ldls.vercel.app/?path=/docs/components-search-overview--docs',
      },
    ],
    example: (props: SearchProps) => (
      <Search
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
      />
    ),
  },
);
