import { describe, it, expect, jest } from '@jest/globals';
import { ledgerLiveThemes } from '@ledgerhq/lumen-design-core';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { Settings, Plus } from '../../Symbols';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { InteractiveIcon } from './InteractiveIcon';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <ThemeProvider themes={ledgerLiveThemes} colorScheme='dark' locale='en'>
      {component}
    </ThemeProvider>,
  );
};

describe('InteractiveIcon Component', () => {
  it('should render correctly with children icon', () => {
    renderWithProvider(
      <InteractiveIcon
        iconType='filled'
        aria-label='Settings'
        testID='icon-button'
      >
        <Settings size={20} />
      </InteractiveIcon>,
    );
    const buttonElement = screen.getByTestId('icon-button');
    expect(buttonElement).toBeTruthy();
  });

  it('should render with filled iconType variant', () => {
    renderWithProvider(
      <InteractiveIcon
        iconType='filled'
        aria-label='Add item'
        testID='filled-icon'
      >
        <Plus size={20} />
      </InteractiveIcon>,
    );
    const buttonElement = screen.getByTestId('filled-icon');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.props.accessibilityRole).toBe('button');
  });

  it('should render with stroked iconType variant', () => {
    renderWithProvider(
      <InteractiveIcon
        iconType='stroked'
        aria-label='Settings'
        testID='stroked-icon'
      >
        <Settings size={20} />
      </InteractiveIcon>,
    );
    const buttonElement = screen.getByTestId('stroked-icon');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.props.accessibilityRole).toBe('button');
  });

  it('should have correct accessibility label', () => {
    renderWithProvider(
      <InteractiveIcon
        iconType='filled'
        aria-label='Open menu'
        testID='menu-icon'
      >
        <Settings size={20} />
      </InteractiveIcon>,
    );
    const buttonElement = screen.getByTestId('menu-icon');
    expect(buttonElement.props.accessibilityLabel).toBe('Open menu');
  });

  it('should be disabled when the disabled prop is true', () => {
    renderWithProvider(
      <InteractiveIcon
        iconType='filled'
        aria-label='Disabled button'
        disabled
        testID='disabled-icon'
      >
        <Settings size={20} />
      </InteractiveIcon>,
    );
    const buttonElement = screen.getByTestId('disabled-icon');
    expect(buttonElement.props.accessibilityState.disabled).toBe(true);
  });

  it('should call the onPress handler when pressed', () => {
    const handlePress = jest.fn();
    renderWithProvider(
      <InteractiveIcon
        iconType='filled'
        aria-label='Pressable'
        onPress={handlePress}
        testID='pressable-icon'
      >
        <Plus size={20} />
      </InteractiveIcon>,
    );

    const buttonElement = screen.getByTestId('pressable-icon');
    fireEvent.press(buttonElement);

    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('should not call the onPress handler when disabled', () => {
    const handlePress = jest.fn();
    renderWithProvider(
      <InteractiveIcon
        iconType='filled'
        aria-label='Disabled'
        onPress={handlePress}
        disabled
        testID='disabled-pressable'
      >
        <Settings size={20} />
      </InteractiveIcon>,
    );

    const buttonElement = screen.getByTestId('disabled-pressable');
    fireEvent.press(buttonElement);

    expect(handlePress).not.toHaveBeenCalled();
  });

  it('should call the onLongPress handler when long pressed', () => {
    const handleLongPress = jest.fn();
    renderWithProvider(
      <InteractiveIcon
        iconType='stroked'
        aria-label='Long pressable'
        onLongPress={handleLongPress}
        testID='long-pressable-icon'
      >
        <Plus size={20} />
      </InteractiveIcon>,
    );

    const buttonElement = screen.getByTestId('long-pressable-icon');
    fireEvent(buttonElement, 'onLongPress');

    expect(handleLongPress).toHaveBeenCalledTimes(1);
  });

  it('should apply custom style', () => {
    const customStyle = { marginTop: 8 };
    renderWithProvider(
      <InteractiveIcon
        iconType='filled'
        aria-label='Custom'
        style={customStyle}
        testID='custom-icon'
      >
        <Settings size={20} />
      </InteractiveIcon>,
    );
    const buttonElement = screen.getByTestId('custom-icon');
    // Style is merged as an array [resolvedStyle, customStyle]
    expect(buttonElement.props.style).toContainEqual(customStyle);
  });
});
