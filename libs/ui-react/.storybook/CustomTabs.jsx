import React from 'react';
import { Folder } from '../src/lib/Symbols/Icons/Folder';

export const CustomTabs = ({ children }) => {
  const [active, setActive] = React.useState(0);

  // Extract Tab components from children
  const tabs = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Tab,
  );

  if (tabs.length === 0) {
    return <div className="text-muted">No tabs found</div>;
  }

  return (
    <div className="storybook-tabs">
      {/* Tab buttons */}
      <div className="mb-24 flex gap-24">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`group relative flex flex-col items-center gap-8 rounded-lg p-12 transition-all duration-200 focus:outline-none ${
              active === idx
                ? 'text-active-subtle'
                : 'text-muted hover:text-active'
            } `}
            onClick={() => setActive(idx)}
          >
            {/* Folder Icon */}
            <div
              className={`rounded-lg p-8 transition-all duration-200 ${
                active === idx
                  ? 'bg-active-subtle text-active'
                  : 'bg-muted group-hover:bg-active-subtle'
              } `}
            >
              <Folder size={24} />
            </div>

            {/* Label */}
            <span
              className={`transition-colors duration-200 body-3 ${
                active === idx ? 'text-active' : 'group-hover:text-active'
              } `}
            >
              {tab.props.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-24">
        {tabs.map((tab, idx) => {
          if (idx !== active) return null;
          return <div key={idx}>{tab.props.children}</div>;
        })}
      </div>
    </div>
  );
};

export const Tab = ({ children }) => {
  return <div>{children}</div>;
};
