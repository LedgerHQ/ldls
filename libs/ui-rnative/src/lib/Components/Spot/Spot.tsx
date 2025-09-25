import { cva } from 'class-variance-authority';
import { IconSize } from '../Icon/Icon';
import { useMemo } from 'react';
import { View, Text, ViewProps } from 'react-native';
import {
  Bluetooth,
  CheckmarkCircleFill,
  DeleteCircleFill,
  InformationFill,
  Spinner,
  WarningFill,
} from '../../Symbols';
import { cn } from '../../utils';

const spotVariants = cva(
  'flex items-center justify-center rounded-full bg-muted-transparent',
  {
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
      size: {
        48: 'spot-w-48 spot-h-48',
        56: 'spot-w-56 spot-h-56',
        72: 'spot-w-72 spot-h-72',
      },
    },
  },
);

export type SpotAppearance =
  | 'icon'
  | 'bluetooth'
  | 'check'
  | 'error'
  | 'warning'
  | 'info'
  | 'loader'
  | 'number';

/**
 * A discriminated union that enforces type-safe props based on the `appearance`.
 */
type DiscriminatedSpotProps =
  | {
      /**
       * Displays a custom icon with neutral base styling.
       *
       * **Use case**: When you need to show a custom icon that isn't available in the predefined appearances.
       * **Style**: Default text color with transparent background.
       * **Required prop**: `icon` - Must provide an icon component.
       *
       * @example <Spot appearance="icon" icon={SettingsIcon} />
       */
      appearance: 'icon';
      /** A React component to be rendered as the icon. Required when appearance is 'icon'. */
      icon: React.ComponentType<{ size?: IconSize; className?: string }>;
    }
  | {
      /**
       * Displays a single digit (0-9) with number styling.
       *
       * **Use case**: Step indicators, counters, or numbered badges.
       * **Style**: Heading-4 typography with base text color.
       * **Required prop**: `number` - Must be a digit from 0 to 9.
       *
       * @example <Spot appearance="number" number={5} />
       */
      appearance: 'number';
      /** A single digit from 0 to 9 to display. Required when appearance is 'number'. */
      number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    }
  | {
      /**
       * Self-contained predefined status indicators with semantic styling.
       *
       * **Available options**:
       * - `'bluetooth'` - Bluetooth connection status (blue color)
       * - `'check'` - Success/completion state (green color)
       * - `'error'` - Error/failure state (red color)
       * - `'warning'` - Warning/caution state (yellow color)
       * - `'info'` - Informational state (muted color)
       * - `'loader'` - Loading/processing state (no color)
       *
       * **Use case**: Status indicators, feedback states, loading states.
       * **Style**: Each has semantic colors and predefined icons.
       * **Props**: No additional props required - fully self-contained.
       *
       * @example
       * <Spot appearance="check" />    // Success checkmark
       * <Spot appearance="error" />    // Error X icon
       * <Spot appearance="loader" />   // Loading spinner
       */
      appearance: Exclude<SpotAppearance, 'icon' | 'number'>;
    };

export type SpotSize = 48 | 56 | 72;

export type SpotProps = DiscriminatedSpotProps &
  ViewProps & {
    /**
     * Whether the spot is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * The size of the spot.
     * @default 48
     */
    size?: SpotSize;
    /**
     * Additional CSS classes for styling.
     */
    className?: string;
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
        return <Icon size={calculatedIconSize} />;
      }
      case 'number': {
        return (
          <Text className={calculatedNumberTypography}>{props.number}</Text>
        );
      }
      case 'bluetooth':
        // TODO: Replace with BluetoothCircleFill
        return <Bluetooth size={calculatedIconSize} />;
      case 'check':
        return <CheckmarkCircleFill size={calculatedIconSize} />;
      case 'error':
        return <DeleteCircleFill size={calculatedIconSize} />;
      case 'warning':
        return <WarningFill size={calculatedIconSize} />;
      case 'info':
        return <InformationFill size={calculatedIconSize} />;
      case 'loader':
        return <Spinner size={calculatedIconSize} />;
    }
  }, [props, calculatedIconSize, calculatedNumberTypography]);

  return (
    <View
      testID='spot-container'
      className={cn(
        className,
        spotVariants({ appearance, disabled, size }),
        appearance === 'number' && calculatedNumberTypography,
      )}
      {...rest}
    >
      {content}
    </View>
  );
};
