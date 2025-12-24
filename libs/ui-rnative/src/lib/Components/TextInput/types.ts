import { BaseInputProps } from '../BaseInput';
import { BoxProps } from '../Utility';

export type TextInputProps = Omit<BaseInputProps, 'prefix'> & BoxProps;
