import { createContext, FC, ReactNode, useContext, useMemo } from 'react';

export function createSafeContext<ContextValueType extends object>(
  rootComponentName: string,
  defaultContext?: ContextValueType,
) {
  const Context = createContext<ContextValueType | undefined>(defaultContext);

  const Provider: FC<{
    children: ReactNode;
    value: ContextValueType;
  }> = ({ children, value: context }) => {
    // Only re-memoize when prop values change
    const memoValue = useMemo(
      () => context,
      Object.values(context ?? {}),
    ) as ContextValueType;

    return <Context.Provider value={memoValue}>{children}</Context.Provider>;
  };

  Provider.displayName = rootComponentName + 'Provider';

  function useSafeContext({
    consumerName,
    contextRequired,
  }: {
    consumerName: string;
    contextRequired: boolean;
  }) {
    const context = useContext(Context);

    if (context) {
      return context;
    }

    /**
     * If the context is required, throw an error.
     */
    if (contextRequired) {
      throw new Error(
        `\`${consumerName}\` must be used within \`${rootComponentName}\``,
      );
    }

    return (defaultContext || {}) as ContextValueType;
  }

  return [Provider, useSafeContext] as const;
}
