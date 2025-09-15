// @ts-nocheck
/* eslint-disable */
import React from 'react';
import { IconButton } from './IconButton';
import figma from '@figma/code-connect';

figma.connect(
  IconButton,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=6975%3A2571',
  {
    imports: [
      "import { IconButton } from '@ledgerhq/ldls-ui-react'",
      "// import { YourIconName } from '@ledgerhq/ldls-ui-react/Symbols'",
    ],
    props: {
      iconType: figma.enum('type', {
        filled: 'filled',
        stroked: 'stroked',
      }),
      children: figma.enum('type', {
        filled: figma.instance('icon-filled'),
        stroked: figma.instance('icon-stroked'),
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-iconbutton-overview--docs',
      },
    ],
    example: (props) => (
      <IconButton iconType={props.iconType} aria-label="Icon button">
        {props.children}
      </IconButton>
    ),
  },
);
