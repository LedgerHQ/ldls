import { BaseInputProps } from '../BaseInput/types';

export type SearchInputProps = Omit<
  BaseInputProps,
  'prefix' | 'label' | 'labelClassName' | 'inputClassName'
>;
