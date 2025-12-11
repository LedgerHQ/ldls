import React from 'react';
import { Checkbox } from './Checkbox';

import figma from '@figma/code-connect';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=6688-3600',
  {
    imports: ["import { Checkbox } from '@ledgerhq/lumen-ui-react'"],
    props: {
      checkbox: figma.nestedProps('.checkbox', {
        checked: figma.boolean('checked'),
        disabled: figma.enum('state', {
          disabled: true,
        }),
      }),
      label: figma.boolean('show-label', {
        true: (
          <label htmlFor='checkbox-id' className='cursor-pointer body-2'>
            Label
          </label>
        ),
        false: undefined,
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-checkbox-overview--docs',
      },
    ],
    example: (props: {
      checkbox: { checked: boolean; disabled: boolean };
      label?: string;
    }) => (
      <>
        <Checkbox
          id='checkbox-id'
          name='checkbox-name'
          checked={props.checkbox.checked}
          disabled={props.checkbox.disabled}
        />
        {props.label}
      </>
    ),
  },
);
