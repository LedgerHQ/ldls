import React from 'react';
import { AddressInput } from './AddressInput';

import figma from '@figma/code-connect';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const openQrScanner = () => {};

figma.connect(
  AddressInput,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=7887-67',
  {
    imports: ["import { AddressInput } from '@ledgerhq/ldls-ui-react'"],
    props: {
      state: figma.enum('state', {
        enabled: 'enabled',
        disabled: 'disabled',
        hovered: 'hovered',
        active: 'active',
        focused: 'focused',
        error: 'error',
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/text-input-addressfieldinput-overview--docs',
      },
    ],
    example: (props: { state: 'enabled' | 'error' | 'disabled' }) => {
      switch (props.state) {
        case 'enabled':
          return (
            <AddressInput
              placeholder='Enter address or ENS'
              onQrCodeClick={openQrScanner}
            />
          );
        case 'error':
          return (
            <AddressInput
              placeholder='Enter address or ENS'
              onQrCodeClick={openQrScanner}
              errorMessage='Error message'
              aria-invalid={true}
            />
          );
        case 'disabled':
          return <AddressInput placeholder='Enter address or ENS' disabled />;
        default:
          return null;
      }
    },
  },
);
