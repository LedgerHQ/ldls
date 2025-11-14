import { cva } from 'class-variance-authority';
import { useMemo } from 'react';
import { View, Text } from 'react-native';
import {
  Bluetooth,
  CheckmarkCircleFill,
  DeleteCircleFill,
  InformationFill,
  WarningFill,
} from '../../Symbols';
import { IconSize } from '../Icon';
import { Spinner } from '../Spinner';
import { SpotProps, SpotSize } from './Spot.types';

const spotVariants = {
  root: cva(
    'flex items-center justify-center rounded-full bg-muted-transparent',
    {
      variants: {
        size: {
          48: 'spot-w-48 spot-h-48',
          56: 'spot-w-56 spot-h-56',
          72: 'spot-w-72 spot-h-72',
        },
      },
    },
  ),
  inner: cva('', {
    variants: {
      appearance: {
        icon: 'text-base',
        bluetooth: 'text-[#0082FC]',
        check: 'text-success',
        error: 'text-error',
        warning: 'text-warning',
        info: 'text-muted',
        loader: '',
        number: 'text-base',
      },
      disabled: {
        true: 'text-disabled',
      },
    },
  }),
};

/**
 * A circular status indicator component that displays different types of content based on appearance.
 *
 * Uses a discriminated union type system where the required props depend on the `appearance` value:
 * - `'icon'` appearance requires an `icon` prop
 * - `'number'` appearance requires a `number` prop
 * - All other appearances are self-contained
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_media-graphics-spot--docs Storybook}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the spot's core appearance (colors, size, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { Spot } from '@ledgerhq/ldls-ui-rnative';
 *
 * // Custom icon spot
 * import { Settings } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Spot appearance="icon" icon={Settings} />
 *
 * // Number spot
 * <Spot appearance="number" number={5} />
 *
 * // Status indicators (no additional props needed)
 * <Spot appearance="check" />
 * <Spot appearance="error" />
 * <Spot appearance="warning" />
 * <Spot appearance="loader" />
 *
 * // Bluetooth states
 * <Spot appearance="bluetooth" />
 * <Spot appearance="bluetooth" disabled />
 */
export const Spot = (props: SpotProps) => {
  const { appearance, className, disabled, size = 48, ...rest } = props;

  const sizeMap: Record<SpotSize, IconSize> = {
    48: 20,
    56: 24,
    72: 40,
  };

  const numberTypographyMap: Record<SpotSize, string> = {
    48: 'heading-4',
    56: 'heading-3',
    72: 'heading-1',
  };

  const calculatedIconSize = sizeMap[size] ?? 20;
  const calculatedNumberTypography = numberTypographyMap[size] ?? 'heading-4';

  const content = useMemo(() => {
    switch (props.appearance) {
      case 'icon': {
        const { icon: Icon } = props;
        return (
          <Icon
            size={calculatedIconSize}
            className={spotVariants.inner({ appearance, disabled })}
          />
        );
      }
      case 'number': {
        return (
          <Text
            className={spotVariants.inner({
              appearance,
              disabled,
              className: calculatedNumberTypography,
            })}
          >
            {props.number}
          </Text>
        );
      }
      case 'bluetooth':
        // TODO: Replace with BluetoothCircleFill
        return (
          <Bluetooth
            className={spotVariants.inner({ appearance, disabled })}
            size={calculatedIconSize}
          />
        );
      case 'check':
        return (
          <CheckmarkCircleFill
            className={spotVariants.inner({ appearance, disabled })}
            size={calculatedIconSize}
          />
        );
      case 'error':
        return (
          <DeleteCircleFill
            className={spotVariants.inner({ appearance, disabled })}
            size={calculatedIconSize}
          />
        );
      case 'warning':
        return (
          <WarningFill
            className={spotVariants.inner({ appearance, disabled })}
            size={calculatedIconSize}
          />
        );
      case 'info':
        return (
          <InformationFill
            className={spotVariants.inner({ appearance, disabled })}
            size={calculatedIconSize}
          />
        );
      case 'loader':
        return (
          <Spinner
            className={spotVariants.inner({ appearance, disabled })}
            size={calculatedIconSize}
          />
        );
    }
  }, [props, calculatedIconSize, calculatedNumberTypography]);

  return (
    <View
      testID='spot-container'
      className={spotVariants.root({ size, className })}
      {...rest}
    >
      {content}
    </View>
  );
};
