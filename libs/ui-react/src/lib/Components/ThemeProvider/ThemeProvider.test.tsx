import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider, useTheme } from './ThemeProvider';

const root = document.documentElement;

const setupMatchMedia = (prefersDark: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: prefersDark,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
};

beforeEach(() => {
  root.className = '';
});

afterEach(() => {
  root.className = '';
});

describe('ThemeProvider', () => {
  it('applies light class when theme is light', () => {
    render(
      <ThemeProvider mode='light'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('light');
    expect(root).not.toHaveClass('dark');
  });

  it('applies dark class when theme is dark', () => {
    render(
      <ThemeProvider mode='dark'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('dark');
    expect(root).not.toHaveClass('light');
  });

  it('uses system preference when theme is system and prefers dark', () => {
    setupMatchMedia(true);

    render(
      <ThemeProvider mode='system'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('dark');
    expect(root).not.toHaveClass('light');
  });

  it('uses system preference when theme is system and prefers light', () => {
    setupMatchMedia(false);

    render(
      <ThemeProvider mode='system'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('light');
    expect(root).not.toHaveClass('dark');
  });

  it('updates class using useTheme context', () => {
    const Consumer = () => {
      const { mode, setMode } = useTheme();
      return (
        <div data-testid='theme-value' onClick={() => setMode('light')}>
          {mode}
        </div>
      );
    };

    render(
      <ThemeProvider mode='dark'>
        <Consumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    fireEvent.click(screen.getByTestId('theme-value'));
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
    expect(root).toHaveClass('light');
    expect(root).not.toHaveClass('dark');
  });
});
