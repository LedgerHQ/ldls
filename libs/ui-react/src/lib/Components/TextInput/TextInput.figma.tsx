// @ts-nocheck
/* eslint-disable */
import { TextInput } from './TextInput';
import figma from '@figma/code-connect';

figma.connect(
  Input,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=2248%3A3905',
  {
    imports: ["import { Input } from '@ledgerhq/ldls-ui-react'"],
    props: {
      label: figma.boolean('show-title', {
        true: figma.string('title'),
        false: undefined,
      }),
      placeholder: figma.string('description'),
      value: figma.enum('field-state', {
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
        url: 'https://ldls.vercel.app/?path=/docs/components-input-overview--docs',
      },
    ],
    example: (props) => (
      <Input
        label={props.label}
        placeholder={props.placeholder}
        value={props.value}
        errorMessage={props.errorMessage}
        disabled={props.disabled}
      />
    ),
  },
);
