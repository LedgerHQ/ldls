import { cn } from '@ledgerhq/ldls-utils-shared';
import React from 'react';
import { Folder } from '../src/lib/Symbols/Icons/Folder';

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface CustomTabsProps {
  children: React.ReactNode;
}

export const CustomTabs: React.FC<CustomTabsProps> = ({ children }) => {
  const [active, setActive] = React.useState<number>(0);

  // Extract Tab components from children
  const tabs = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabProps> =>
      React.isValidElement(child) && child.type === Tab,
  );

  if (tabs.length === 0) {
    return <div className='text-muted'>No tabs found</div>;
  }

  return (
    <div>
      {/* Tab buttons */}
      <div className='mb-24 flex gap-24'>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={cn(
              'group relative flex flex-col items-center gap-8 rounded-lg p-12 transition-all duration-200 focus:outline-none',
              active === idx
                ? 'text-active-subtle'
                : 'text-muted hover:text-active',
            )}
            onClick={() => setActive(idx)}
          >
            {/* Folder Icon */}
            <div
              className={cn(
                'rounded-lg p-8 transition-all duration-200',
                active === idx
                  ? 'bg-accent text-base'
                  : 'group-hover:opacity-80',
              )}
            >
              <Folder size={24} />
            </div>

            {/* Label */}
            <span
              className={cn(
                'transition-colors duration-200 body-3',
                active === idx
                  ? 'text-black'
                  : 'group-hover:text-active group-hover:opacity-80',
              )}
            >
              {tab.props.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className='p-24'>
        {tabs.map((tab, idx) => {
          if (idx !== active) return null;
          return <div key={idx}>{tab.props.children}</div>;
        })}
      </div>
    </div>
  );
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};
