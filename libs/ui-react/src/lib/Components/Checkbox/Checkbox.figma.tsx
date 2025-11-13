// @ts-nocheck
/* eslint-disable */
import { Checkbox } from './Checkbox';
import figma from '@figma/code-connect';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=6688-3600',
  {
    imports: ["import { Checkbox } from '@ledgerhq/ldls-ui-react'"],
    label: 'React',
    props: {
      checkbox: figma.nestedProps('.checkbox', {
        checked: figma.boolean('checked'),
        disabled: figma.enum('state', {
          disabled: true,
        }),
      }),
      label: figma.boolean('show-label', {
        true: figma.string('label'),
        false: undefined,
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-checkbox-overview--docs',
      },
    ],
    example: (props) =>
      props.label ? (
        <>
          <Checkbox
            id='checkbox-id'
            name='checkbox-name'
            checked={props.checkbox.checked}
            disabled={props.checkbox.disabled}
          />
          <label htmlFor='checkbox-id' className='cursor-pointer body-2'>
            {props.label}
          </label>
        </>
      ) : (
        <Checkbox
          checked={props.checkbox.checked}
          disabled={props.checkbox.disabled}
        />
      ),
  },
);
