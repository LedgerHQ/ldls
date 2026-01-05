import React from 'react';
import { Divider } from './Divider';
import { DividerProps } from './types';
import figma from '@figma/code-connect';

figma.connect(
  Divider,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=285-5969',
  {
    imports: ["import { Divider } from '@ledgerhq/lumen-ui-react'"],
    props: {
      orientation: figma.enum('orientation', {
        horizontal: 'horizontal',
        vertical: 'vertical',
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/layout-divider--docs',
      },
    ],
    example: (props: DividerProps) => (
      <Divider orientation={props.orientation} />
    ),
  },
);
