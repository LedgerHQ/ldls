import React from 'react';

import { BaseButtonProps } from '../Button';
import { BaseButton } from '../Button/BaseButton';

export interface IconButtonProps extends Omit<BaseButtonProps, 'isFull'> {
  /**
   * Accessible label for the IconButton
   */
  'aria-label': string;
  /**
   * The icon to display in the button
   */
  icon: NonNullable<BaseButtonProps['icon']>;
}

export const IconButton = React.forwardRef<
  React.ElementRef<typeof BaseButton>,
  IconButtonProps
>((props, ref) => {
  return <BaseButton ref={ref} {...props} />;
});

IconButton.displayName = 'IconButton';
