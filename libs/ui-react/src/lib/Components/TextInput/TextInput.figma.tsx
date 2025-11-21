import React from 'react';
import { TextInput, TextInputProps } from './TextInput';

import figma from '@figma/code-connect';

figma.connect(
  TextInput,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=2248-3905',
  {
    imports: ["import { TextInput } from '@ledgerhq/ldls-ui-react'"],
    props: {
      label: figma.string('label-text'),
      placeholder: figma.string('placeholder-text'),
      value: figma.enum('input-state', {
        placeholder: '',
        typing: 'User input text',
      }),
      disabled: figma.enum('state', {
        disabled: true,
      }),
      errorMessage: figma.enum('state', {
        error: 'This field is required',
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/input-textinput--docs',
      },
    ],
    example: (props: TextInputProps) => (
      <TextInput
        label={props.label}
        placeholder={props.placeholder}
        value={props.value}
        errorMessage={props.errorMessage}
        disabled={props.disabled}
      />
    ),
  },
);
