import {
  useLumenStyleSheetContext,
  type LumenStyleSheetContextValue,
} from './LumenStyleSheetProvider';

export const useTheme = (): LumenStyleSheetContextValue => {
  const context = useLumenStyleSheetContext({
    consumerName: 'useTheme',
    contextRequired: true,
  });

  return context;
};
