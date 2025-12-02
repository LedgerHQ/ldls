import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import React, { ReactNode } from 'react';
import { SelectContentItem } from './types';

export type SelectContextValue = {
  selectId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string | undefined;
  onValueChange: (value: string) => void;
  disabled: boolean;
  items: SelectContentItem[];
  setItems: (items: SelectContentItem[]) => void;
  label?: string;
};

const [SelectProvider, _useSelectSafeContext] =
  createSafeContext<SelectContextValue>('Select');

export const useSelectSafeContext = _useSelectSafeContext;

type SelectContextProviderProps = {
  selectId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string | undefined;
  onValueChange: (value: string) => void;
  disabled: boolean;
  items: SelectContentItem[];
  setItems: (items: SelectContentItem[]) => void;
  label?: string;
  children: ReactNode;
};

/**
 * Internal context provider for an individual Select component.
 * This is used automatically by the Select component.
 */
export const SelectContextProvider: React.FC<SelectContextProviderProps> = ({
  selectId,
  open,
  setOpen,
  value,
  onValueChange,
  disabled,
  items,
  setItems,
  label,
  children,
}) => {
  return (
    <SelectProvider
      value={{
        selectId,
        open,
        setOpen,
        value,
        onValueChange,
        disabled,
        items,
        setItems,
        label,
      }}
    >
      {children}
    </SelectProvider>
  );
};
