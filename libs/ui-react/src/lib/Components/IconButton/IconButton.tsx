import type * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';
import { BaseButton, BaseButtonProps } from '../Button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip/Tooltip';

export interface IconButtonProps extends Omit<BaseButtonProps, 'isFull'> {
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
  (
    {
      className,
      icon,
      tooltip = false,
      tooltipPlacement = 'top',
      tooltipText,
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    const button = (
      <BaseButton
        ref={ref}
        icon={icon}
        className={className}
        aria-label={ariaLabel}
        {...props}
      />
    );

    if (tooltip) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent side={tooltipPlacement}>
            {tooltipText || ariaLabel}
          </TooltipContent>
        </Tooltip>
      );
    }

    return button;
  },
);

IconButton.displayName = 'IconButton';
