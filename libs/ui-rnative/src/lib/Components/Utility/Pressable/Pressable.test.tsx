import { describe, it, expect, jest } from '@jest/globals';
import { ledgerLiveThemes } from '@ledgerhq/lumen-design-core';
import { render, screen, fireEvent } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { Text, View, ViewStyle } from 'react-native';

import { ThemeProvider } from '../../ThemeProvider/ThemeProvider';
import { Pressable } from './Pressable';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <ThemeProvider themes={ledgerLiveThemes} colorScheme='dark' locale='en'>
      {component}
    </ThemeProvider>,
  );
};

// Helper to extract resolved style from Pressable
const getResolvedStyle = (
  pressable: ReturnType<typeof screen.getByTestId>,
  state: { pressed: boolean } = { pressed: false },
) => {
  const styleProp = pressable.props.style;
  if (typeof styleProp === 'function') {
    return styleProp(state);
  }
  return styleProp;
};

describe('Pressable Utility Component', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      renderWithProvider(<Pressable testID='pressable' />);
      expect(screen.getByTestId('pressable')).toBeTruthy();
    });

    it('should render children', () => {
      renderWithProvider(
        <Pressable testID='pressable'>
          <Text>Child Content</Text>
        </Pressable>,
      );
      expect(screen.getByText('Child Content')).toBeTruthy();
    });

    it('should have correct display name', () => {
      expect(Pressable.displayName).toBe('StyledPressable(Pressable)');
    });
  });

  describe('Token Props (lx)', () => {
    it('should resolve padding token', () => {
      renderWithProvider(
        <Pressable testID='pressable' lx={{ padding: 's16' }} />,
      );
      const pressable = screen.getByTestId('pressable');
      const resolvedStyle = getResolvedStyle(pressable);
      expect(resolvedStyle[0].padding).toBe(16);
    });

    it('should resolve backgroundColor token', () => {
      renderWithProvider(
        <Pressable testID='pressable' lx={{ backgroundColor: 'surface' }} />,
      );
      const pressable = screen.getByTestId('pressable');
      const resolvedStyle = getResolvedStyle(pressable);
      expect(resolvedStyle[0].backgroundColor).toBeDefined();
    });

    it('should resolve multiple token props', () => {
      renderWithProvider(
        <Pressable
          testID='pressable'
          lx={{
            padding: 's16',
            marginTop: 's8',
            borderRadius: 'md',
          }}
        />,
      );
      const pressable = screen.getByTestId('pressable');
      const resolvedStyle = getResolvedStyle(pressable);
      expect(resolvedStyle[0].padding).toBe(16);
      expect(resolvedStyle[0].marginTop).toBe(8);
      expect(resolvedStyle[0].borderRadius).toBeDefined();
    });
  });

  describe('Style Props', () => {
    it('should merge static style prop with resolved tokens', () => {
      const customStyle: ViewStyle = { opacity: 0.5 };
      renderWithProvider(
        <Pressable
          testID='pressable'
          lx={{ padding: 's16' }}
          style={customStyle}
        />,
      );
      const pressable = screen.getByTestId('pressable');
      const resolvedStyle = getResolvedStyle(pressable);
      expect(resolvedStyle[0].padding).toBe(16);
      expect(resolvedStyle[1]).toMatchObject({ opacity: 0.5 });
    });

    it('should support function-based style prop', () => {
      renderWithProvider(
        <Pressable
          testID='pressable'
          lx={{ backgroundColor: 'surface' }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.7 : 1,
          })}
        />,
      );
      const pressable = screen.getByTestId('pressable');
      const resolvedStyle = getResolvedStyle(pressable);

      // Token styles should be resolved
      expect(resolvedStyle[0].backgroundColor).toBeDefined();
      // Function-based style should be evaluated (default state is unpressed)
      expect(resolvedStyle[1]).toMatchObject({ opacity: 1 });
    });
  });

  describe('Interactions', () => {
    it('should call onPress when pressed', () => {
      const handlePress = jest.fn();
      renderWithProvider(
        <Pressable testID='pressable' onPress={handlePress} />,
      );

      fireEvent.press(screen.getByTestId('pressable'));
      expect(handlePress).toHaveBeenCalledTimes(1);
    });

    it('should call onPressIn when press starts', () => {
      const handlePressIn = jest.fn();
      renderWithProvider(
        <Pressable testID='pressable' onPressIn={handlePressIn} />,
      );

      fireEvent(screen.getByTestId('pressable'), 'onPressIn');
      expect(handlePressIn).toHaveBeenCalledTimes(1);
    });

    it('should call onPressOut when press ends', () => {
      const handlePressOut = jest.fn();
      renderWithProvider(
        <Pressable testID='pressable' onPressOut={handlePressOut} />,
      );

      fireEvent(screen.getByTestId('pressable'), 'onPressOut');
      expect(handlePressOut).toHaveBeenCalledTimes(1);
    });

    it('should call onLongPress when long pressed', () => {
      const handleLongPress = jest.fn();
      renderWithProvider(
        <Pressable testID='pressable' onLongPress={handleLongPress} />,
      );

      fireEvent(screen.getByTestId('pressable'), 'onLongPress');
      expect(handleLongPress).toHaveBeenCalledTimes(1);
    });

    it('should not call onPress when disabled', () => {
      const handlePress = jest.fn();
      renderWithProvider(
        <Pressable testID='pressable' onPress={handlePress} disabled />,
      );

      fireEvent.press(screen.getByTestId('pressable'));
      expect(handlePress).not.toHaveBeenCalled();
    });
  });

  describe('Ref Forwarding', () => {
    it('should forward ref', () => {
      const ref = createRef<View>();
      renderWithProvider(<Pressable ref={ref} testID='pressable' />);
      expect(ref.current).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should pass accessibility props', () => {
      renderWithProvider(
        <Pressable
          testID='pressable'
          accessibilityLabel='Interactive button'
          accessibilityRole='button'
        />,
      );
      const pressable = screen.getByTestId('pressable');
      expect(pressable.props.accessibilityLabel).toBe('Interactive button');
      expect(pressable.props.accessibilityRole).toBe('button');
    });

    it('should pass accessibility state', () => {
      renderWithProvider(
        <Pressable
          testID='pressable'
          accessibilityState={{ disabled: true, selected: true }}
        />,
      );
      const pressable = screen.getByTestId('pressable');
      expect(pressable.props.accessibilityState).toEqual({
        disabled: true,
        selected: true,
      });
    });
  });

  describe('Children Render Function', () => {
    it('should support children as render function', () => {
      renderWithProvider(
        <Pressable testID='pressable'>
          {({ pressed }) => (
            <Text testID='child-text'>
              {pressed ? 'Pressed!' : 'Not pressed'}
            </Text>
          )}
        </Pressable>,
      );
      expect(screen.getByText('Not pressed')).toBeTruthy();
    });
  });
});
