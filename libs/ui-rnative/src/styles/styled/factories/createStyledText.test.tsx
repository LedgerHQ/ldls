import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { Text } from 'react-native';
import { LumenStyleSheetProvider } from '../../Provider/LumenStyleSheetProvider';
import { createStyledText } from './createStyledText';

const testThemes: any = {
  light: {
    spacings: { s8: 8 },
    sizes: {},
    colors: {
      bg: {},
      text: { base: '#000000', muted: '#666666' },
      border: {},
    },
    borderRadius: {},
    shadows: {},
    typographies: {
      sm: {
        body1: {
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 24,
          letterSpacing: 0,
        },
      },
    },
  },
  dark: {
    spacings: { s8: 8 },
    sizes: {},
    colors: {
      bg: {},
      text: { base: '#FFFFFF', muted: '#8E8E93' },
      border: {},
    },
    borderRadius: {},
    shadows: {},
    typographies: {
      sm: {
        body1: {
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 24,
          letterSpacing: 0,
        },
      },
    },
  },
};

const renderWithProvider = (children: React.ReactElement) =>
  render(
    <LumenStyleSheetProvider themes={testThemes}>
      {children}
    </LumenStyleSheetProvider>,
  );

describe('createStyledText', () => {
  const StyledText = createStyledText(Text);

  it('should have correct display name', () => {
    expect(StyledText.displayName).toBe('StyledText(Text)');
  });

  it('should apply typography variant', () => {
    renderWithProvider(
      <StyledText testID='text' variant='body1'>
        Hello
      </StyledText>,
    );

    const style = screen.getByTestId('text').props.style;
    expect(style).toMatchObject({
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
    });
  });

  it('should apply color token', () => {
    renderWithProvider(
      <StyledText testID='text' color='muted'>
        Muted
      </StyledText>,
    );
    expect(screen.getByTestId('text').props.style.color).toBe('#666666');
  });

  it('should combine variant, color and spacing', () => {
    renderWithProvider(
      <StyledText testID='text' variant='body1' color='base' marginTop='s8'>
        Styled
      </StyledText>,
    );

    const style = screen.getByTestId('text').props.style;
    expect(style).toMatchObject({
      fontSize: 16,
      color: '#000000',
      marginTop: 8,
    });
  });

  it('should merge style prop with resolved tokens', () => {
    renderWithProvider(
      <StyledText
        testID='text'
        variant='body1'
        style={{ textDecorationLine: 'underline' }}
      >
        Underlined
      </StyledText>,
    );

    const [stylesFromProps, otherStyles] =
      screen.getByTestId('text').props.style;

    expect(stylesFromProps.fontSize).toBe(16);
    expect(otherStyles.textDecorationLine).toBe('underline');
  });

  it('should forward ref', () => {
    const ref = createRef<Text>();
    renderWithProvider(
      <StyledText ref={ref} testID='text'>
        Ref
      </StyledText>,
    );
    expect(ref.current).toBeTruthy();
  });
});
