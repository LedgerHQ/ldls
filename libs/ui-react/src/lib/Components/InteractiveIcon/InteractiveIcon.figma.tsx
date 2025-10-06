// @ts-nocheck
/* eslint-disable */
import React from 'react';
import { InteractiveIcon } from './InteractiveIcon';
import figma from '@figma/code-connect';

figma.connect(
  InteractiveIcon,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=6975%3A2571',
  {
    imports: [
      "import { InteractiveIcon } from '@ledgerhq/ldls-ui-react'",
      "// import { YourIconName } from '@ledgerhq/ldls-ui-react/Symbols'",
    ],
    props: {
      'icon-type': figma.enum('appearance', {
        filled: 'filled',
        stroked: 'stroked',
      }),
      children: figma.instance('icon'),
      state: figma.enum('state', {
        enabled: 'enabled',
        disabled: 'disabled',
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-interactiveicon-overview--docs',
      },
    ],
    example: (props) => (
      <InteractiveIcon
        iconType={props['icon-type']}
        disabled={props.state === 'disabled'}
        aria-label='Interactive icon'
      >
        {props.children}
      </InteractiveIcon>
    ),
  },
);
