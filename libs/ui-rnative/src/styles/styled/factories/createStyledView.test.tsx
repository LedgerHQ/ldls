import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { View } from 'react-native';
import { LumenStyleSheetProvider } from '../../Provider/LumenStyleSheetProvider';
import { createStyledView } from './createStyledView';

const testThemes: any = {
  light: {
    spacings: { s16: 16 },
    sizes: { s48: 48, full: '100%' },
    colors: { bg: { surface: '#F0F0F0' }, border: {} },
    borderRadius: { md: 12 },
    shadows: {},
    typographies: { sm: {} },
  },
  dark: {
    spacings: { s16: 16 },
    sizes: { s48: 48, full: '100%' },
    colors: { bg: { surface: '#1C1C1E' }, border: {} },
    borderRadius: { md: 12 },
    shadows: {},
    typographies: { sm: {} },
  },
};

const renderWithProvider = (children: React.ReactElement) =>
  render(
    <LumenStyleSheetProvider themes={testThemes}>
      {children}
    </LumenStyleSheetProvider>,
  );

describe('createStyledView', () => {
  const StyledView = createStyledView(View);

  it('should have correct display name', () => {
    expect(StyledView.displayName).toBe('Styled(View)');
  });

  it('should resolve token props to styles', () => {
    renderWithProvider(
      <StyledView
        testID='view'
        padding='s16'
        width='s48'
        backgroundColor='surface'
        borderRadius='md'
      />,
    );

    const style = screen.getByTestId('view').props.style;
    expect(style).toMatchObject({
      padding: 16,
      width: 48,
      backgroundColor: '#F0F0F0',
      borderRadius: 12,
    });
  });

  it('should resolve full size token to 100%', () => {
    renderWithProvider(<StyledView testID='view' width='full' />);
    expect(screen.getByTestId('view').props.style.width).toBe('100%');
  });

  it('should merge style prop with resolved tokens', () => {
    renderWithProvider(
      <StyledView testID='view' padding='s16' style={{ opacity: 0.5 }} />,
    );

    const [stylesFromProps, otherStyles] =
      screen.getByTestId('view').props.style;

    expect(stylesFromProps.padding).toBe(16);
    expect(otherStyles.opacity).toBe(0.5);
  });

  it('should forward ref', () => {
    const ref = createRef<View>();
    renderWithProvider(<StyledView ref={ref} testID='view' />);
    expect(ref.current).toBeTruthy();
  });
});
