// @ts-nocheck
/* eslint-disable */
import { Link } from './Link';
import figma from '@figma/code-connect';

figma.connect(
  Link,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=770%3A11982',
  {
    imports: ["import { Link } from '@ledgerhq/ldls-ui-react'"],
    props: {
      // These props were automatically mapped based on your linked code:
      isExternal: figma.boolean('show-external-link', {
        true: true,
        false: false,
      }),
      icon: figma.boolean('show-icon', {
        true: figma.instance('icon'),
        false: undefined,
      }),
      children: figma.string('label'),
      appearance: figma.enum('appearance', {
        underlined: 'underlined',
        accent: 'accent',
      }),
      size: figma.enum('size', {
        sm: 'sm',
        md: 'md',
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-link-overview--docs',
      },
    ],
    example: (props) => (
      <Link
        isExternal={props.isExternal}
        icon={props.icon}
        appearance={props.appearance}
        size={props.size}
        href="#"
      >
        {props.children}
      </Link>
    ),
  },
);
