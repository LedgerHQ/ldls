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

type DiscriminatedSpotProps =
  | {
      appearance: 'icon';
      icon: React.ComponentType<{ size?: IconSize; className?: string }>;
    }
  | {
      appearance: 'number';
      number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    }
  | {
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
 * @param {'icon' | 'bluetooth' | 'check' | 'error' | 'warning' | 'info' | 'loader' | 'number'} appearance - The visual style and content type of the spot.
 * @param {boolean} [disabled] - Whether the spot has a disabled state.
 *
 * **Appearance-specific props:**
 *
 * **For `appearance="icon"`:**
 * @param {React.ComponentType<{ size?: IconSize; className?: string }>} icon - Icon component to render. Required when appearance is 'icon'.
 *
 * **For `appearance="number"`:**
 * @param {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9} number - Number to display (0-9). Required when appearance is 'number'.
 *
 * **For other appearances:** No additional props required. Each renders a predefined icon:
 * - `'bluetooth'` - Bluetooth icon in active state
 * - `'check'` - Check mark icon (success state)
 * - `'error'` - Delete/error icon (error state)
 * - `'warning'` - Warning icon (warning state)
 * - `'info'` - Information icon
 * - `'loader'` - Loading spinner icon
 *
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance - use the `appearance` prop instead.
 * @param {HTMLAttributes<HTMLDivElement>} [...] - All standard div props
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
  const { appearance, className, disabled } = props;

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
    <div className={cn(className, spotVariants({ appearance, disabled }))}>
      {content}
    </div>
  );
};
