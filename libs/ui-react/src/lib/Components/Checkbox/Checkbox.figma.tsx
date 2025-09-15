// @ts-nocheck
/* eslint-disable */
import { Checkbox } from './Checkbox';
import figma from '@figma/code-connect';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=6688%3A3600',
  {
    imports: ["import { Checkbox } from '@ledgerhq/ldls-ui-react'"],
    props: {
      checked: props.checked,
      disabled: props.disabled,
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-checkbox-overview--docs',
      },
    ],
    example: (props) => (
      <Checkbox checked={props.checked} disabled={props.disabled} />
    ),
  },
);
