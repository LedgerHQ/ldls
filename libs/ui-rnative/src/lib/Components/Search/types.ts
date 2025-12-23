import { BaseInputProps } from '../BaseInput';
import { BoxProps } from '../Utility';

export type SearchProps = Omit<BaseInputProps, 'prefix' | 'label'> & BoxProps;
