// @ts-nocheck
/* eslint-disable */
import { Tag } from './Tag';
import figma from '@figma/code-connect';

figma.connect(
  Tag,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=722%3A5547',
  {
    imports: ["import { Tag } from '@ledgerhq/ldls-ui-react'"],
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-tag-overview--docs',
      },
    ],
    props: {
      // These props were automatically mapped based on your linked code:
      label: figma.string('label'),
      appearance: figma.enum('appearance', {
        base: 'base',
        gray: 'gray',
        accent: 'accent',
        success: 'success',
        error: 'error',
        warning: 'warning',
        disabled: 'disabled',
      }),
      size: figma.enum('size', {
        md: 'md',
        sm: 'sm',
      }),
      showicon: figma.boolean('show-icon'),
      icon: figma.instance('icon'),
      // No matching props could be found for these Figma properties:
      // "label": figma.string('label')
    },
    example: (props) => (
      <Tag
        label={props.label}
        appearance={props.appearance}
        size={props.size}
        icon={props.icon}
      />
    ),
  },
);
