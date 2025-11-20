import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import React, { ReactNode } from 'react';

export type TooltipContentData = {
  title?: string;
  content?: ReactNode;
};

export type TooltipContextValue = {
  tooltipId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  contentData: TooltipContentData | null;
  setContentData: (data: TooltipContentData | null) => void;
};

const [TooltipProvider, _useTooltipSafeContext] =
  createSafeContext<TooltipContextValue>('Tooltip');

export const useTooltipSafeContext = _useTooltipSafeContext;

type TooltipContextProviderProps = {
  tooltipId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  contentData: TooltipContentData | null;
  setContentData: (data: TooltipContentData | null) => void;
  children: ReactNode;
};

/**
 * Internal context provider for an individual Tooltip component.
 * This is used automatically by the Tooltip component.
 */
export const TooltipContextProvider: React.FC<TooltipContextProviderProps> = ({
  tooltipId,
  open,
  setOpen,
  contentData,
  setContentData,
  children,
}) => {
  return (
    <TooltipProvider
      value={{
        tooltipId,
        open,
        setOpen,
        contentData,
        setContentData,
      }}
    >
      {children}
    </TooltipProvider>
  );
};
