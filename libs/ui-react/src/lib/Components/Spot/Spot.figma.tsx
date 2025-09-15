// @ts-nocheck
/* eslint-disable */
import { Spot } from './Spot';
import figma from '@figma/code-connect';

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
    },
    example: (props) => (
      <Spot
        appearance={props.appearance}
        icon={props.icon}
        disabled={props.disabled}
      />
    ),
  },
);
