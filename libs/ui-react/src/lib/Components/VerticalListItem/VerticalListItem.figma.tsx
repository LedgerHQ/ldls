// @ts-nocheck
/* eslint-disable */
import { VerticalListItem } from './VerticalListItem';
import figma from '@figma/code-connect';

figma.connect(
  VerticalListItem,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7?node-id=5783-1328',
  {
    imports: ["import { VerticalListItem } from '@ledgerhq/ldls-ui-react'"],
    props: {
      title: figma.string('title'),
      subtitle: figma.boolean('show-subtitle', {
        true: figma.string('subtitle'),
        false: undefined,
      }),
      spot: <Spot appearance='icon' icon={Settings} />,
      tag: figma.boolean('show-tag', {
        true: figma.instance('tag'),
        false: undefined,
      }),
      secondaryAction: (
        <InteractiveIcon
          iconType='stroked'
          aria-label='More actions'
          onClick={() => console.log('secondary action clicked')}
        >
          <MoreVertical />
        </InteractiveIcon>
      ),
      disabled: figma.enum('state', {
        disabled: true,
      }),
    },
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/components-verticallistitem-overview--docs',
      },
    ],
    example: (props) => (
      <VerticalListItem
        title={props.title}
        subtitle={props.subtitle}
        spot={props.spot}
        tag={props.tag}
        secondaryAction={props.secondaryAction}
        disabled={props.disabled}
      />
    ),
  },
);
