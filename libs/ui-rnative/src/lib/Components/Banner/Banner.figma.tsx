// @ts-expect-error - @figma/code-connect does not have type declarations
import figma from '@figma/code-connect';
import { Banner } from './Banner';
import { BannerProps } from './types';

figma.connect(
  Banner,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=129%3A201',
  {
    imports: ["import { Banner } from '@ledgerhq/ldls-ui-react'"],
    props: {
      // These props were automatically mapped based on your linked code:
      appearance: figma.enum('appearance', {
        info: 'info',
        success: 'success',
        warning: 'warning',
        error: 'error',
      }),
      title: figma.string('title'),
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),
      primaryAction: figma.boolean('show-actions', {
        true: {
          label: 'Primary Action',
          onClick: () => {
            console.log('Primary Action clicked');
          },
        },
        false: undefined,
      }),
      secondaryAction: figma.boolean('show-actions', {
        true: figma.boolean('show-secondary-action', {
          true: {
            label: 'Secondary Action',
            onClick: () => {
              console.log('Secondary Action clicked');
            },
          },
          false: undefined,
        }),
        false: undefined,
      }),
      onClose: figma.boolean('show-close', {
        true: () => {
          console.log('Close clicked');
        },
        false: undefined,
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/communication-banner-overview--docs',
      },
    ],
    example: (props: BannerProps) => (
      <Banner
        appearance={props.appearance}
        title={props.title}
        description={props.description}
        primaryAction={props.primaryAction}
        secondaryAction={props.secondaryAction}
        onClose={props.onClose}
      />
    ),
  },
);
