import { cva } from 'class-variance-authority';
import { IconSize } from '../Icon/Icon';
import { HTMLAttributes, useMemo } from 'react';
import {
  BluetoothCircleFill,
  CheckmarkCircleFill,
  DeleteCircleFill,
  InformationFill,
  Spinner,
  WarningFill,
} from '../../Symbols';
import { cn } from '@ldls/utils-shared';

const spotVariants = cva(
  'flex size-48 items-center justify-center rounded-full bg-muted-transparent',
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
        number: 'text-base heading-4',
      },
      disabled: {
        true: 'text-disabled',
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

export type SpotProps = DiscriminatedSpotProps &
  HTMLAttributes<HTMLDivElement> & {
    disabled?: boolean;
  };

/**
 * A circular status indicator component that displays different types of content based on appearance.
 *
 * Uses a discriminated union type system where the required props depend on the `appearance` value:
 * - `'icon'` appearance requires an `icon` prop
 * - `'number'` appearance requires a `number` prop
 * - All other appearances are self-contained
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-spot-overview--docs Storybook}
 *
 * @component
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the spot's core appearance (colors, size, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { Spot } from '@ldls/ui-react';
 *
 * // Custom icon spot
 * import { Settings } from '@ldls/ui-react/symbols';
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
  const { appearance, className, disabled, ...rest } = props;

  const content = useMemo(() => {
    switch (props.appearance) {
      case 'icon': {
        const { icon: Icon } = props;
        return <Icon size={20} />;
      }
      case 'number': {
        return props.number;
      }
      case 'bluetooth':
        return <BluetoothCircleFill size={20} />;
      case 'check':
        return <CheckmarkCircleFill size={20} />;
      case 'error':
        return <DeleteCircleFill size={20} />;
      case 'warning':
        return <WarningFill size={20} />;
      case 'info':
        return <InformationFill size={20} />;
      case 'loader':
        return <Spinner size={20} />;
    }
  }, [props]);

  return (
    <div
      className={cn(className, spotVariants({ appearance, disabled }))}
      {...rest}
    >
      {content}
    </div>
  );
};
