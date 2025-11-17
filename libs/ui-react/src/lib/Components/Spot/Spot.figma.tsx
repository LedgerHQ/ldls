import React from 'react';
import { Spot, SpotAppearance, SpotSize } from './Spot';
// @ts-expect-error - @figma/code-connect does not have type declarations
import figma from '@figma/code-connect';
import { IconSize } from '../Icon/Icon';

figma.connect(
  Spot,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=6786%3A4738',
  {
    imports: ["import { Spot } from '@ledgerhq/ldls-ui-react'"],
    props: {
      // These props were automatically mapped based on your linked code:
      disabled: figma.enum('state', {
        disabled: true,
      }),
      appearance: figma.enum('appearance', {
        'interface-icon': 'interface-icon',
        loader: 'loader',
        number: 'number',
        'info-muted': 'info-muted',
        warning: 'warning',
        error: 'error',
        check: 'check',
        'bluetooth-disabled': 'bluetooth-disabled',
        bluetooth: 'bluetooth',
      }),
      icon: figma.instance('icon'),
      number: figma.enum('appearance', {
        number: 1,
      }),
    },
    example: (props: {
      appearance: SpotAppearance;
      icon: React.ComponentType<{ size?: IconSize; className?: string }>;
      disabled: boolean;
      number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    }) => (
      <Spot
        appearance={props.appearance}
        icon={props.icon}
        number={props.number}
        disabled={props.disabled}
      />
    ),
  },
);
