// @ts-expect-error - @figma/code-connect does not have type declarations
import figma from '@figma/code-connect';
import { InteractiveIcon } from './InteractiveIcon';

figma.connect(
  InteractiveIcon,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=6975%3A2571',
  {
    imports: [
      "import { InteractiveIcon } from '@ledgerhq/ldls-ui-rnative'",
      "// import { YourIconName } from '@ledgerhq/ldls-ui-rnative/symbols'",
    ],
    props: {
      iconType: figma.enum('appearance', {
        filled: 'filled',
        stroked: 'stroked',
      }),
      disabled: figma.enum('state', {
        disabled: true,
      }),
      children: figma.instance('icon-filled'),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-interactiveicon-overview--docs',
      },
    ],
    example: (props: any) => (
      <InteractiveIcon iconType={props.iconType} aria-label='Interactive icon'>
        {props.children}
      </InteractiveIcon>
    ),
  },
);
