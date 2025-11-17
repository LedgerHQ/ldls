import React from 'react';
import { Button, ButtonProps } from './Button';
// @ts-expect-error - @figma/code-connect does not have type declarations
import figma from '@figma/code-connect';

figma.connect(
  Button,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=9%3A28',
  {
    imports: [
      "import { Button } from '@ledgerhq/ldls-ui-react'",
      "// import { YourIconName } from '@ledgerhq/ldls-ui-react/Symbols'",
    ],
    props: {
      // These props were automatically mapped based on your linked code:
      disabled: figma.enum('state', {
        disabled: true,
      }),
      loading: figma.enum('state', {
        loading: true,
      }),
      content: figma.enum('content', {
        text: 'text',
        iconText: 'iconText',
      }),
      appearance: figma.enum('appearance', {
        base: 'base',
        gray: 'gray',
        accent: 'accent',
        transparent: 'transparent',
        'no-background': 'no-background',
        red: 'red',
      }),
      size: figma.enum('size', {
        sm: 'sm',
        md: 'md',
        lg: 'lg',
      }),
      label: figma.string('label'),
      icon: figma.instance('icon'),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/action-button-overview--docs',
      },
    ],
    example: (props: ButtonProps & { label: string }) => (
      <Button
        disabled={props.disabled}
        loading={props.loading}
        appearance={props.appearance}
        size={props.size}
        icon={props.icon}
      >
        {props.label}
      </Button>
    ),
  },
);
