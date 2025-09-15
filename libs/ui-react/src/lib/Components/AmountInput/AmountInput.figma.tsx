// @ts-nocheck
import { AmountInput } from './AmountInput';

figma.connect(
  AmountInput,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=6245-2067',
  {
    imports: ["import { AmountInput } from '@ledgerhq/ldls-ui-react'"],
    props: {
      // Currency text mapping from fiat property
      currencyText: figma.enum('fiat', {
        $: '$',
        '€': '€',
        '£': '£',
      }),

      // Currency position based on type
      currencyPosition: figma.enum('type', {
        fiat: 'left',
        crypto: 'right',
      }),

      // Value based on field state
      value: figma.enum('fiel-state', {
        placeholder: '1000',
        typing: '1000',
      }),

      // Change handler (required for controlled component)
      onChange: figma.instance('(value) => setValue(value)'),

      // Disabled state
      disabled: figma.enum('state', {
        enabled: false,
        active: false,
        error: false,
        disabled: true,
      }),

      // Error state via aria-invalid
      'aria-invalid': figma.enum('state', {
        error: true,
        enabled: false,
        active: false,
        disabled: false,
      }),

      // Decimal support (default based on type)
      allowDecimals: figma.enum('type', {
        fiat: true,
        crypto: true,
      }),

      // Max length (reasonable defaults)
      maxLength: figma.enum('type', {
        fiat: 12,
        crypto: 18,
      }),
    },
    links: [
      {
        name: 'Documentation',
        url: 'https://ldls.vercel.app/?path=/docs/components-amountinput--docs',
      },
      {
        name: 'Storybook',
        url: 'https://ldls.vercel.app/?path=/story/components-amountinput--default',
      },
    ],
    example: (props) => (
      <AmountInput
        currencyText={props.currencyText}
        currencyPosition={props.currencyPosition}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        aria-invalid={props['aria-invalid']}
        allowDecimals={props.allowDecimals}
        maxLength={props.maxLength}
      />
    ),
  },
);
