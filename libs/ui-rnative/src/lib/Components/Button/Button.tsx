import React from 'react';
import { Pressable } from 'react-native';
import { BaseButton } from './BaseButton';
import { BaseButtonProps } from './BaseButton.types';

export type ButtonProps = {
  /**
   * The content to display inside the button.
   */
  children: React.ReactNode;
} & BaseButtonProps;

/**
 * A customizable button component that supports various appearances, sizes, full-width mode, loading states, and optional icons.
 *
 * When in loading state, it displays a spinner. If an icon is provided without children, it renders as an icon-only button.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_action-button--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_action-button--docs#dos-and-donts Guidelines}
 *
 * @example
 * // Basic primary button
 * import { Button } from '@ledgerhq/lumen-ui-rnative';
 *
 * <Button appearance="base" size="md" onPress={() => console.log('Clicked!')}>
 *   Click Me
 * </Button>
 *
 * // Full-width button with custom class
 * <Button appearance="accent" isFull={true} className="my-custom-class">
 *   Submit
 * </Button>
 */
export const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>((props, ref) => {
  return <BaseButton ref={ref} {...props} />;
});
Button.displayName = 'Button';
