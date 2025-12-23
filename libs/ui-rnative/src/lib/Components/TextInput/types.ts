import { LumenViewStyleLX } from '../../../styles';
import { BaseInputProps } from '../BaseInput';

export type TextInputProps = Omit<BaseInputProps, 'prefix'> & LumenViewStyleLX;
