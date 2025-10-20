import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from './ThemeProvider';
import { useThemeState } from './useThemeState';

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
      <ThemeProvider theme='light'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('light');
    expect(root).not.toHaveClass('dark');
  });

  it('applies dark class when theme is dark', () => {
    render(
      <ThemeProvider theme='dark'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('dark');
    expect(root).not.toHaveClass('light');
  });

  it('uses system preference when theme is system and prefers dark', () => {
    setupMatchMedia(true);

    render(
      <ThemeProvider theme='system'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('dark');
    expect(root).not.toHaveClass('light');
  });

  it('uses system preference when theme is system and prefers light', () => {
    setupMatchMedia(false);

    render(
      <ThemeProvider theme='system'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('light');
    expect(root).not.toHaveClass('dark');
  });

  it('updates classes when theme changes', () => {
    const { rerender } = render(
      <ThemeProvider theme='light'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('light');
    expect(root).not.toHaveClass('dark');

    rerender(
      <ThemeProvider theme='dark'>
        <div data-testid='child' />
      </ThemeProvider>,
    );

    expect(root).toHaveClass('dark');
    expect(root).not.toHaveClass('light');
  });

  it('provides theme in context', () => {
    const Consumer = () => {
      const { theme } = useThemeState();
      return <div data-testid='theme-value'>{theme}</div>;
    };

    render(
      <ThemeProvider theme='dark'>
        <Consumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
  });
});
