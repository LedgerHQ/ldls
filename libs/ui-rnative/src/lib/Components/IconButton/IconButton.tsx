import React from 'react';

import { BaseButtonProps } from '../Button';
import { BaseButton } from '../Button/BaseButton';

export type IconButtonProps = {
  /**
   * Accessible label for the IconButton
   */
  accessibilityLabel: string;
  /**
   * The icon to display in the button
   */
  icon: NonNullable<BaseButtonProps['icon']>;
} & Omit<BaseButtonProps, 'isFull'>;

export const IconButton = React.forwardRef<
  React.ElementRef<typeof BaseButton>,
  IconButtonProps
>((props, ref) => {
  return <BaseButton ref={ref} {...props} />;
});

IconButton.displayName = 'IconButton';
