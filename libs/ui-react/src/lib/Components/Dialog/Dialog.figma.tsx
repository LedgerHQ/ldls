import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogProps,
} from './Dialog';
import { SheetBarProps } from '../SheetBar/SheetBar';
import { Button } from '../Button/Button';

import figma from '@figma/code-connect';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClose = () => {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onBack = () => {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setOpen = () => {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const open = false;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onOpenChange = () => {};

figma.connect(
  Dialog,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=6345-2641',
  {
    imports: [
      "import { Dialog, DialogContent, DialogTrigger, DialogHeader } from '@ledgerhq/lumen-ui-react'",
      "import { Button } from '@ledgerhq/lumen-ui-react'",
    ],
    props: {
      // Access nested SheetBar properties using figma.nestedProps()
      dialogHeader: figma.nestedProps('.dialog-header', {
        appearance: figma.enum('appearance', {
          compact: 'compact',
          extended: 'extended',
        }),
        title: figma.boolean('show-title', {
          true: figma.string('title'),
          false: undefined,
        }),
        description: figma.boolean('show-description', {
          true: figma.string('description'),
          false: undefined,
        }),
        onBack: figma.boolean('show-back-icon', {
          true: onBack,
          false: undefined,
        }),
      }),

      // Dialog close handler
      onOpenChange: onOpenChange,
      onClose: onClose,
      setOpen: setOpen,
      open: open,
    },
    links: [
      {
        name: 'Documentation',
        url: 'https://ldls.vercel.app/?path=/docs/components-dialog--docs',
      },
      {
        name: 'Storybook',
        url: 'https://ldls.vercel.app/?path=/story/components-dialog--base',
      },
    ],
    example: (
      props: DialogProps & { dialogHeader: Omit<SheetBarProps, 'onClose'> },
    ) => (
      <Dialog open={props.open} onOpenChange={props.onOpenChange}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader
            appearance={props.dialogHeader.appearance}
            title={props.dialogHeader.title}
            description={props.dialogHeader.description}
            onBack={props.dialogHeader.onBack}
            onClose={onClose}
          />
          <div className='p-16'>
            <p>Dialog content goes here</p>
            {/* Content varies based on: {props.contentState} */}
          </div>
        </DialogContent>
      </Dialog>
    ),
  },
);
