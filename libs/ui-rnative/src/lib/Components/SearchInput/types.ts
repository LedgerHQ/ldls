import { BaseInputProps } from '../BaseInput';
import { BoxProps } from '../Utility';

export type SearchInputProps = Omit<BaseInputProps, 'prefix' | 'label'> &
  BoxProps;
