import React from 'react';
import { BaseInput, type BaseInputProps } from '../BaseInput';
import { IconButton } from '../IconButton/IconButton';
import { QrCode as QrCodeIcon } from '../../Symbols';

export interface AddressFieldInputProps
  extends Omit<BaseInputProps, 'prefix' | 'label'> {
  /**
   * Custom suffix element to show instead of the QR code icon.
   * Default suffix is a QR code scanner when empty (if onQrCodeClick provided), clear button when content.
   * — both can be overridden with a custom suffix.
   *
   * @default QrCodeIcon
   */
  suffix?: React.ReactNode;
  /**
   * Custom prefix text to show instead of the "To:" prefix.
   * @default "To:"
   */
  prefix?: string;
  /**
   * Whether to hide the clear button that appears when input has content.
   * @default false
   */
  hideClearButton?: boolean;
  /**
   * Callback fired when the QR code scanner icon is clicked.
   * When provided, the QR code scanner icon will be displayed when input is empty.
   * When not provided, no QR code scanner icon will be shown.
   */
  onQrCodeClick?: () => void;
}

/**
 * A customizable address field input component for cryptocurrency addresses with fixed "To:" prefix, QR code scanner, automatic clear button, error states, and focus/hover effects.
 *
 * ## Key Features
 * - **Customizable prefix text** - defaults to "To:" but can be overridden via prefix prop
 * - **Context-aware suffix icons** - QR code scanner when empty (if onQrCodeClick provided), clear button when content
 * - **Automatic clear button** appears when input has content
 * - **Conditional QR code scanner** appears only when onQrCodeClick handler is provided
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
 * // Address field with custom prefix
 * <AddressFieldInput
 *   prefix="From:"
 *   value={senderAddress}
 *   onChange={(e) => setSenderAddress(e.target.value)}
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
>(({ prefix = 'To:', suffix, onQrCodeClick, ...props }, ref) => {
  // Use custom prefix if provided, otherwise default "To:" prefix
  const effectivePrefix = (
    <span
      className="text-nowrap text-base body-1 group-has-[:disabled]:text-disabled"
      aria-hidden="true"
    >
      {prefix}
    </span>
  );

  // Show QR code icon only when no custom suffix is provided AND onQrCodeClick exists
  // BaseInput will handle showing/hiding based on content via its clear button logic
  const effectiveSuffix =
    suffix ||
    (onQrCodeClick ? (
      <IconButton
        iconType="stroked"
        onClick={onQrCodeClick}
        aria-label="Scan QR code"
        className="group-has-[:disabled]:text-disabled"
      >
        <QrCodeIcon size={20} />
      </IconButton>
    ) : undefined);

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
