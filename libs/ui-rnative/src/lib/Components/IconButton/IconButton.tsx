import React from 'react';

import { BaseButton } from '../Button/BaseButton';
import { Pressable } from '../Utility';
import { IconButtonProps } from './types';

export const IconButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  IconButtonProps
>((props, ref) => {
  return <BaseButton ref={ref} {...props} />;
});

IconButton.displayName = 'IconButton';
