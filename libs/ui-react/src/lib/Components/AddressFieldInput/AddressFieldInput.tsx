import React from 'react';
import { BaseInput, type BaseInputProps } from '../Input/BaseInput';
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
 * An address field input component for entering cryptocurrency addresses or ENS names.
 * Built on top of BaseInput with a fixed "To:" prefix label and context-aware suffix icons.
 *
 * ## Key Features
 * - **Fixed "To:" prefix** - Always visible inline label
 * - **Clickable QR code scanner icon** - Appears when input is empty for easy scanning
 * - **Automatic clear button** - Appears when input has content (unless hideClearButton is true)
 * - **ENS support** - Placeholder indicates support for both addresses and ENS names
 * - **Error state styling** - Full BaseInput error handling support
 * - **All BaseInput features** - Including controlled/uncontrolled modes, validation, etc.
 *
 * ## Design System Compliance
 * Matches the design system specifications:
 * - "To:" prefix label positioned on the left
 * - IconButton with QR code icon (20px) when empty for address scanning
 * - Clear button on the right when typing (using BaseInput's built-in functionality)
 * - Proper focus, hover, and active states with purple accent colors
 * - Consistent spacing and typography
 *
 * @example
 * // Basic address field input
 * <AddressFieldInput
 *   placeholder="Enter address or ENS"
 *   value={address}
 *   onChange={(e) => setAddress(e.target.value)}
 * />
 *
 * @example
 * // Address field with error handling
 * <AddressFieldInput
 *   placeholder="Enter address or ENS"
 *   value={invalidAddress}
 *   onChange={(e) => setInvalidAddress(e.target.value)}
 *   errorMessage={addressError}
 *   aria-invalid={!!addressError}
 * />
 *
 * @example
 * // Address field with QR code scanning and clear behavior
 * <AddressFieldInput
 *   placeholder="Enter address or ENS"
 *   value={walletAddress}
 *   onChange={(e) => setWalletAddress(e.target.value)}
 *   onQrCodeClick={() => {
 *     // Open QR code scanner modal/camera
 *     openQrScanner();
 *   }}
 *   onClear={() => {
 *     analytics.track('address_cleared');
 *     setWalletAddress('');
 *     setAddressError('');
 *   }}
 * />
 */
export const AddressFieldInput = React.forwardRef<
  HTMLInputElement,
  AddressFieldInputProps
>(({ suffix, onQrCodeClick, ...props }, ref) => {
  const prefixLabel = (
    <span
      className="font-medium text-nowrap text-base group-has-[:disabled]:text-disabled"
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
      prefix={prefixLabel}
      suffix={effectiveSuffix}
      {...props}
    />
  );
});

AddressFieldInput.displayName = 'AddressFieldInput';
