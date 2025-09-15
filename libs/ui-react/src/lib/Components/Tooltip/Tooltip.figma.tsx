// @ts-nocheck
/* eslint-disable */
import { Tooltip } from './Tooltip';
import figma from '@figma/code-connect';

figma.connect(
  Tooltip,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=6387%3A409',
  {
    imports: [
      "import { Tooltip, TooltipContent, TooltipTrigger } from '@ledgerhq/ldls-ui-react'",
    ],
    props: {
      label: figma.string('label'),
      direction: figma.enum('direction', {
        top: 'top',
        bottom: 'bottom',
        left: 'left',
        right: 'right',
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-tooltip-overview--docs',
      },
    ],
    example: (props) => (
      <Tooltip>
        <TooltipTrigger>
          <button>Hover me</button>
        </TooltipTrigger>
        <TooltipContent side={props.direction}>{props.label}</TooltipContent>
      </Tooltip>
    ),
  },
);
