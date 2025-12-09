import React from 'react';
import { SheetBar, SheetBarProps } from './SheetBar';

import figma from '@figma/code-connect';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleClose = () => {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleBack = () => {};

figma.connect(
  SheetBar,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=2135-3079',
  {
    imports: ["import { SheetBar } from '@ledgerhq/lumen-ui-react'"],
    props: {
      // Size variant mapping
      appearance: figma.enum('appearance', {
        compact: 'compact',
        extended: 'extended',
      }),

      // Title text
      title: figma.boolean('show-title', {
        true: figma.string('title'),
        false: undefined,
      }),

      // Description text
      description: figma.boolean('show-description', {
        true: figma.string('description'),
        false: undefined,
      }),

      // Close button (always present)
      onClose: handleClose,

      // Back button (optional)
      onBack: figma.boolean('show-back-icon', {
        true: handleBack,
        false: undefined,
      }),
    },
    links: [
      {
        name: 'Documentation',
        url: 'https://ldls.vercel.app/?path=/docs/components-sheetbar--docs',
      },
      {
        name: 'Storybook',
        url: 'https://ldls.vercel.app/?path=/story/components-sheetbar--base',
      },
    ],
    example: (props: SheetBarProps) => (
      <SheetBar
        appearance={props.appearance}
        title={props.title}
        description={props.description}
        onClose={props.onClose}
        onBack={props.onBack}
      />
    ),
  },
);
