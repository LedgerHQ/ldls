import { createContext, useContext } from 'react';

type TabBarContextValue = {
  active?: string;
  onTabPress: (value: string) => void;
};

const TabBarContext = createContext<TabBarContextValue | null>(null);

export function useTabBarContext() {
  const ctx = useContext(TabBarContext);
  if (!ctx) {
    throw new Error('TabBarItem must be used inside TabBar');
  }
  return ctx;
}

export { TabBarContext };
