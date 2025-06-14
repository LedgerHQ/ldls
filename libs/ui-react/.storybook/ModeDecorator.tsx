import React, { useState } from 'react';
export const ModeDecorator = (Story: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };
  return (
    <>
      <button
        onClick={toggleMode}
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 9999,
          padding: '8px 12px',
          backgroundColor: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#333',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Story />
    </>
  );
};
