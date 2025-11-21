import React from 'react';
import { CardButton, CardButtonProps } from './CardButton';

import figma from '@figma/code-connect';

figma.connect(
  CardButton,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=89%3A525',
  {
    imports: ["import { CardButton } from '@ledgerhq/ldls-ui-react'"],
    props: {
      // These props were automatically mapped based on your linked code:
      title: figma.string('title'),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      icon: figma.boolean('show-icon', {
        true: figma.instance('icon'),
        false: undefined,
      }),
      hideChevron: figma.boolean('show-chevron', {
        true: false,
        false: true,
      }),
      disabled: figma.enum('state', {
        disabled: true,
      }),
      appearance: figma.enum('appearance', {
        base: 'base',
        outlined: 'outline',
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-cardbutton-overview--docs',
      },
    ],
    example: (props: CardButtonProps) => (
      <CardButton
        title={props.title}
        description={props.description}
        icon={props.icon}
        hideChevron={props.hideChevron}
        disabled={props.disabled}
        appearance={props.appearance}
      />
    ),
  },
);
