import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectTrigger,
} from './Select';

import figma from '@figma/code-connect';

figma.connect(
  Select,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=6397-463',
  {
    imports: [
      "import { Select, SelectContent, SelectItem, SelectItemText, SelectTrigger } from '@ledgerhq/ldls-ui-react'",
    ],
    props: {
      opened: figma.boolean('opened', {
        true: true,
        false: false,
      }),
      disabled: figma.enum('state', {
        disabled: true,
      }),
      label: figma.boolean('show-label', {
        true: figma.string('label'),
        false: false,
      }),

      value: figma.string('value'),
    },
    links: [
      {
        name: 'Documentation',
        url: 'https://ldls.vercel.app/?path=/docs/selection-select--docs',
      },
      {
        name: 'Storybook',
        url: 'https://ldls.vercel.app/?path=/story/selection-select--base',
      },
    ],
    example: (props: {
      opened: boolean;
      disabled: boolean;
      showLabel: boolean;
      label: string;
      value: string;
    }) => (
      <Select
        open={props.opened}
        disabled={props.disabled}
        value={props.value}
        onValueChange={() => {}}
      >
        <SelectTrigger label={props.label} />
        <SelectContent>
          <SelectItem value='option1'>
            <SelectItemText>Option 1</SelectItemText>
          </SelectItem>
          <SelectItem value='option2'>
            <SelectItemText>Option 2</SelectItemText>
          </SelectItem>
          <SelectItem value='option3'>
            <SelectItemText>Option 3</SelectItemText>
          </SelectItem>
        </SelectContent>
      </Select>
    ),
  },
);
