import type * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';
import { Button } from '../Button';

// TODO: complete with base button props
export interface IconButtonProps {
  /**
   * Accessible label for the IconButton
   */
  'aria-label': string;
  /**
   * The icon to display in the button
   */
  icon: NonNullable<BaseButtonProps['icon']>;
  /**
   * Whether to show a tooltip with the aria-label on hover
   * @default false
   */
  tooltip?: boolean;
  /**
   * The preferred position of the tooltip relative to the button
   * @default "top"
   */
  tooltipPlacement?: TooltipPrimitive.TooltipContentProps['side'];
  /**
   * Optional text to show in the tooltip. If not provided, aria-label will be used
   */
  tooltipText?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    return <Button>Hello</Button>;
  },
);

IconButton.displayName = 'IconButton';
