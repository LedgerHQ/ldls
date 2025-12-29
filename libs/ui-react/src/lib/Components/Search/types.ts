import { BaseInputProps } from '../BaseInput/types';

export type SearchProps = Omit<
  BaseInputProps,
  'prefix' | 'label' | 'labelClassName' | 'inputClassName'
>;
