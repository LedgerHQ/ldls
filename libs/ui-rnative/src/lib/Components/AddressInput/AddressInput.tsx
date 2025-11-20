import React from 'react';
import { Text, TextInput } from 'react-native';
import { QrCode } from '../../Symbols';
import { BaseInput, type BaseInputProps } from '../BaseInput';
import { InteractiveIcon } from '../InteractiveIcon';

export type AddressInputProps = Omit<BaseInputProps, 'prefix' | 'label'> & {
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
   * Callback fired when the QR code scanner icon is clicked.
   * When provided, the QR code scanner icon will be displayed when input is empty.
   * When not provided, no QR code scanner icon will be shown.
   */
  onQrCodeClick?: () => void;
};

export const AddressInput = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  AddressInputProps
>(({ prefix = 'To:', suffix, onQrCodeClick, ...props }, ref) => {
  const actualPrefix = (
    <Text
      className='text-nowrap text-base group-has-[:disabled]:text-disabled'
      accessible={false}
      // TODO: use theme object here
      style={{ fontSize: 16, fontWeight: '500' }}
    >
      {prefix}
    </Text>
  );

  const actualSuffix =
    suffix ||
    (onQrCodeClick && (
      <InteractiveIcon
        iconType='filled'
        onPress={onQrCodeClick}
        accessibilityLabel='Scan QR code'
      >
        <QrCode size={20} />
      </InteractiveIcon>
    ));

  return (
    <BaseInput
      ref={ref}
      prefix={actualPrefix}
      suffix={actualSuffix}
      // TODO: use theme object here
      style={{ fontSize: 16, fontWeight: '500' }}
      {...props}
    />
  );
});

AddressInput.displayName = 'AddressInput';
