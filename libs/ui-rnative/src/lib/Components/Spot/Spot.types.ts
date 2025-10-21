import React from 'react';
import { ViewProps } from 'react-native';
import { IconSize } from '../Icon';

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
