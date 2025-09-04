import React from 'react';
import { BaseInput, type BaseInputProps } from '../BaseInput';
import { IconButton } from '../IconButton/IconButton';
import { QrCode as QrCodeIcon } from '../../Symbols';

export interface AddressFieldInputProps
  extends Omit<BaseInputProps, 'prefix' | 'label'> {
  /**
   * Custom suffix element to show instead of the QR code icon.
   * When provided, the QR code icon will not be shown.
   */
  suffix?: React.ReactNode;
  /**
   * Custom prefix element to show instead of the "To:" prefix.
   * When provided, the "To:" prefix will not be shown.
   */
  prefix?: React.ReactNode;
  /**
   * Whether to hide the clear button that appears when input has content.
   * @default false
   */
  hideClearButton?: boolean;
  /**
   * Callback fired when the QR code scanner icon is clicked.
   * Only available when the input is empty and no custom suffix is provided.
   */
  onQrCodeClick?: () => void;
}

/**
 * A customizable address field input component for cryptocurrency addresses with fixed "To:" prefix, QR code scanner, automatic clear button, error states, and focus/hover effects.
 *
 * ## Key Features
 * - **Fixed "To:" prefix label** always visible on the left
 * - **Context-aware suffix icons** - QR code scanner when empty, clear button when content
 * - **Automatic clear button** appears when input has content
 * - **Clickable QR code scanner** for easy address scanning when input is empty
 * - **ENS and address support** optimized for cryptocurrency address entry
 * - **Error state styling** with aria-invalid and errorMessage support
 * - **Flexible styling** via className, containerClassName props
 *
 * ## Clear Button Behavior
 * - Shows automatically when input has content and is not disabled
 * - Works with both controlled and uncontrolled inputs using native value setter
 * - Can be hidden with `hideClearButton={true}`
 * - Extended behavior via optional `onClear` prop
 *
 * ## Layout & Spacing
 * Uses container-based spacing (px-16 padding + gap-8) for consistent element positioning.
 * Prefix (default "To:") is visible on the left, QR code icon appears when empty, clear button takes precedence when input has content.
 *
 *
 * @example
 * // Basic address field with automatic clear button
 * <AddressFieldInput value={address} onChange={(e) => setAddress(e.target.value)} />
 *
 * // Address field with error state
 * <AddressFieldInput
 *   value={invalidAddress}
 *   onChange={(e) => setInvalidAddress(e.target.value)}
 *   aria-invalid={!isValid}
 *   errorMessage="Please enter a valid address or ENS name"
 * />
 *
 * // Address field with QR scanner
 * <AddressFieldInput
 *   value={walletAddress}
 *   onChange={(e) => setWalletAddress(e.target.value)}
 *   onQrCodeClick={() => openQrScanner()}
 * />
 *
 * // Extend clear behavior with analytics
 * <AddressFieldInput
 *   value={recipientAddress}
 *   onChange={(e) => setRecipientAddress(e.target.value)}
 *   onQrCodeClick={() => openQrScanner()}
 *   onClear={() => {
 *     analytics.track('address_cleared');
 *   }}
 * />
 */
export const AddressFieldInput = React.forwardRef<
  HTMLInputElement,
  AddressFieldInputProps
>(({ prefix, suffix, onQrCodeClick, ...props }, ref) => {
  // Use custom prefix if provided, otherwise default "To:" prefix
  const effectivePrefix = prefix || (
    <span
      className="text-nowrap text-base group-has-[:disabled]:text-disabled"
      aria-hidden="true"
    >
      To:
    </span>
  );

  // Show QR code icon only when no custom suffix is provided
  // BaseInput will handle showing/hiding based on content via its clear button logic
  const effectiveSuffix = suffix || (
    <IconButton
      iconType="stroked"
      onClick={onQrCodeClick}
      aria-label="Scan QR code"
      disabled={!onQrCodeClick}
      className="group-has-[:disabled]:text-disabled"
    >
      <QrCodeIcon size={20} />
    </IconButton>
  );

  return (
    <BaseInput
      ref={ref}
      prefix={effectivePrefix}
      suffix={effectiveSuffix}
      {...props}
    />
  );
});

AddressFieldInput.displayName = 'AddressFieldInput';
