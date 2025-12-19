import { BaseInputProps } from '../BaseInput';

export type SearchProps = Omit<BaseInputProps, 'prefix' | 'label'>;
