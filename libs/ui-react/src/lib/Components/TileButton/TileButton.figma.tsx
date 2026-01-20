import React from 'react';
import { TileButton } from './TileButton';

import figma from '@figma/code-connect';
import { TileButtonProps } from './types';

figma.connect(
  TileButton,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=10547-591',
  {
    imports: [
      "import { TileButton } from '@ledgerhq/lumen-ui-react'",
      "// import { YourIconName } from '@ledgerhq/lumen-ui-react/symbols'",
    ],
    props: {
      disabled: figma.enum('state', {
        disabled: true,
      }),
      children: figma.string('label'),
      icon: figma.instance('icon'),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/action-tilebutton--docs',
      },
    ],
    // @ts-ignore
    example: (props: TileButtonProps) => (
      <TileButton disabled={props.disabled} icon={props.icon}>
        {props.children}
      </TileButton>
    ),
  },
);
