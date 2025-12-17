import { describe, it, expect, jest } from '@jest/globals';
import { ledgerLiveThemes } from '@ledgerhq/lumen-design-core';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { Settings } from '../../Symbols';
import { Spot } from '../Spot';
import { Tag } from '../Tag';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { Tile } from './Tile';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider themes={ledgerLiveThemes} colorScheme='dark' locale='en'>
    {children}
  </ThemeProvider>
);

describe('Tile Component', () => {
  const mockSpot = <Spot appearance='icon' icon={Settings} />;
  const mockTitle = 'Test Item';

  it('should render correctly with required props', () => {
    const { getByText, getByTestId } = render(
      <TestWrapper>
        <Tile leadingContent={mockSpot} title={mockTitle} testID='tile' />
      </TestWrapper>,
    );

    expect(getByTestId('tile')).toBeTruthy();
    expect(getByText(mockTitle)).toBeTruthy();
  });

  it('should render description when provided', () => {
    const description = 'Test description';
    const { getByText } = render(
      <TestWrapper>
        <Tile
          leadingContent={mockSpot}
          title={mockTitle}
          description={description}
          testID='tile'
        />
      </TestWrapper>,
    );

    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
  });

  it('should render without description when not provided', () => {
    const { getByText, queryByText } = render(
      <TestWrapper>
        <Tile leadingContent={mockSpot} title={mockTitle} testID='tile' />
      </TestWrapper>,
    );

    expect(getByText(mockTitle)).toBeTruthy();
    // Description should not exist
    expect(queryByText('Test description')).toBeNull();
  });

  it('should render trailingContent when provided', () => {
    const tagText = 'Test Tag';
    const mockTag = <Tag label={tagText} />;
    const { getByText } = render(
      <TestWrapper>
        <Tile
          leadingContent={mockSpot}
          title={mockTitle}
          trailingContent={mockTag}
          testID='tile'
        />
      </TestWrapper>,
    );

    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(tagText)).toBeTruthy();
  });

  it('should render custom trailingContent with testID', () => {
    const trailingText = 'Custom Trailing';
    const mockTrailing = <Text testID='custom-trailing'>{trailingText}</Text>;
    const { getByTestId } = render(
      <TestWrapper>
        <Tile
          leadingContent={mockSpot}
          title={mockTitle}
          trailingContent={mockTrailing}
          testID='tile'
        />
      </TestWrapper>,
    );

    expect(getByTestId('custom-trailing')).toBeTruthy();
  });

  it('should call onPress handler when pressed', () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <Tile
          leadingContent={mockSpot}
          title={mockTitle}
          onPress={handlePress}
          testID='tile'
        />
      </TestWrapper>,
    );

    fireEvent.press(getByTestId('tile'));

    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('should not call onPress when not provided', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Tile leadingContent={mockSpot} title={mockTitle} testID='tile' />
      </TestWrapper>,
    );

    // Should not throw error when pressing without onPress handler
    expect(() => {
      fireEvent.press(getByTestId('tile'));
    }).not.toThrow();
  });

  it('should call onLongPress handler when long pressed', () => {
    const handleLongPress = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <Tile
          leadingContent={mockSpot}
          title={mockTitle}
          onLongPress={handleLongPress}
          testID='tile'
        />
      </TestWrapper>,
    );

    fireEvent(getByTestId('tile'), 'onLongPress');

    expect(handleLongPress).toHaveBeenCalledTimes(1);
  });

  it('should support both onPress and onLongPress', () => {
    const handlePress = jest.fn();
    const handleLongPress = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <Tile
          leadingContent={mockSpot}
          title={mockTitle}
          onPress={handlePress}
          onLongPress={handleLongPress}
          testID='tile'
        />
      </TestWrapper>,
    );

    fireEvent.press(getByTestId('tile'));
    expect(handlePress).toHaveBeenCalledTimes(1);
    expect(handleLongPress).not.toHaveBeenCalled();

    fireEvent(getByTestId('tile'), 'onLongPress');
    expect(handleLongPress).toHaveBeenCalledTimes(1);
    expect(handlePress).toHaveBeenCalledTimes(1); // Should still be 1
  });

  it('should forward testID prop to Pressable', () => {
    const testId = 'custom-tile-id';
    const { getByTestId } = render(
      <TestWrapper>
        <Tile leadingContent={mockSpot} title={mockTitle} testID={testId} />
      </TestWrapper>,
    );

    expect(getByTestId(testId)).toBeTruthy();
  });

  it('should forward additional Pressable props', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Tile
          leadingContent={mockSpot}
          title={mockTitle}
          testID='tile'
          disabled={true}
        />
      </TestWrapper>,
    );

    const pressable = getByTestId('tile');
    expect(pressable.props.accessibilityState?.disabled).toBe(true);
  });

  it('should support custom accessibility label', () => {
    const customLabel = 'Custom accessibility label';
    const { getByTestId } = render(
      <TestWrapper>
        <Tile
          leadingContent={mockSpot}
          title={mockTitle}
          testID='tile'
          accessibilityLabel={customLabel}
        />
      </TestWrapper>,
    );

    const pressable = getByTestId('tile');
    expect(pressable.props.accessibilityLabel).toBe(customLabel);
  });

  it('should render complex leadingContent', () => {
    const customLeading = (
      <Text testID='custom-leading'>Custom Leading Content</Text>
    );
    const { getByTestId } = render(
      <TestWrapper>
        <Tile leadingContent={customLeading} title={mockTitle} testID='tile' />
      </TestWrapper>,
    );

    expect(getByTestId('custom-leading')).toBeTruthy();
  });

  it('should render with all optional props provided', () => {
    const description = 'Full description';
    const tagText = 'Tag Label';
    const mockTag = <Tag label={tagText} />;

    const { getByText, getByTestId } = render(
      <TestWrapper>
        <Tile
          leadingContent={mockSpot}
          title={mockTitle}
          description={description}
          trailingContent={mockTag}
          onPress={jest.fn()}
          onLongPress={jest.fn()}
          testID='tile'
        />
      </TestWrapper>,
    );

    expect(getByTestId('tile')).toBeTruthy();
    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
    expect(getByText(tagText)).toBeTruthy();
  });
});
