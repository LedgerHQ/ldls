import { LumenViewStyleLX } from '../../../styles';
import { BaseInputProps } from '../BaseInput';

export type SearchProps = Omit<BaseInputProps, 'prefix' | 'label'> &
  LumenViewStyleLX;
