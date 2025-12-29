import React from 'react';
import { Text, TextInput } from 'react-native';
import { useCommonTranslation } from '../../../i18n';
import { useStyleSheet } from '../../../styles';
import { QrCode } from '../../Symbols';
import { BaseInput } from '../BaseInput';
import { InteractiveIcon } from '../InteractiveIcon';
import { type AddressInputProps } from './types';

export const AddressInput = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  AddressInputProps
>(({ prefix = 'To:', suffix, onQrCodeClick, ...props }, ref) => {
  const { t } = useCommonTranslation();
  const styles = useStyles();

  const actualPrefix = (
    <Text accessible={false} style={styles.prefix}>
      {prefix}
    </Text>
  );

  const actualSuffix =
    suffix ||
    (onQrCodeClick && (
      <InteractiveIcon
        iconType='stroked'
        onPress={onQrCodeClick}
        accessibilityLabel={t('components.addressInput.qrCodeAriaLabel')}
      >
        <QrCode size={20} />
      </InteractiveIcon>
    ));

  return (
    <BaseInput
      ref={ref}
      prefix={actualPrefix}
      suffix={actualSuffix}
      {...props}
    />
  );
});

const useStyles = () => {
  return useStyleSheet((t) => {
    return {
      prefix: {
        ...t.typographies.body1,
        color: t.colors.text.base,
      },
    };
  }, []);
};

AddressInput.displayName = 'AddressInput';
