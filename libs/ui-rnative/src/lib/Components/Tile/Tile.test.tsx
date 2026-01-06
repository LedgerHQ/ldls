import { describe, it, expect, jest } from '@jest/globals';
import { ledgerLiveThemes } from '@ledgerhq/lumen-design-core';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { Settings } from '../../Symbols';
import { Tag } from '../Tag';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import {
  Tile,
  TileSpot,
  TileContent,
  TileTitle,
  TileDescription,
} from './Tile';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider themes={ledgerLiveThemes} colorScheme='dark' locale='en'>
    {children}
  </ThemeProvider>
);

describe('Tile Component', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with composite API', () => {
      const { getByText, getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId('tile')).toBeTruthy();
      expect(getByText('Test Title')).toBeTruthy();
    });

    it('should render description when provided', () => {
      const { getByText } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
              <TileDescription>Test description</TileDescription>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByText('Test Title')).toBeTruthy();
      expect(getByText('Test description')).toBeTruthy();
    });

    it('should render without description when not provided', () => {
      const { getByText, queryByText } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByText('Test Title')).toBeTruthy();
      expect(queryByText('Test description')).toBeNull();
    });

    it('should render custom content', () => {
      const tagText = 'Test Tag';
      const { getByText } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
            <Tag label={tagText} />
          </Tile>
        </TestWrapper>,
      );

      expect(getByText('Test Title')).toBeTruthy();
      expect(getByText(tagText)).toBeTruthy();
    });

    it('should render custom content with testID', () => {
      const trailingText = 'Custom Trailing';
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
            <Text testID='custom-trailing'>{trailingText}</Text>
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId('custom-trailing')).toBeTruthy();
    });
  });

  describe('Press Handlers', () => {
    it('should call onPress handler when pressed', () => {
      const handlePress = jest.fn();
      const { getByTestId } = render(
        <TestWrapper>
          <Tile onPress={handlePress} testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      fireEvent.press(getByTestId('tile'));

      expect(handlePress).toHaveBeenCalledTimes(1);
    });

    it('should not call onPress when not provided', () => {
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(() => {
        fireEvent.press(getByTestId('tile'));
      }).not.toThrow();
    });

    it('should call onLongPress handler when long pressed', () => {
      const handleLongPress = jest.fn();
      const { getByTestId } = render(
        <TestWrapper>
          <Tile onLongPress={handleLongPress} testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
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
            onPress={handlePress}
            onLongPress={handleLongPress}
            testID='tile'
          >
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      fireEvent.press(getByTestId('tile'));
      expect(handlePress).toHaveBeenCalledTimes(1);
      expect(handleLongPress).not.toHaveBeenCalled();

      fireEvent(getByTestId('tile'), 'onLongPress');
      expect(handleLongPress).toHaveBeenCalledTimes(1);
      expect(handlePress).toHaveBeenCalledTimes(1);
    });
  });

  describe('Context Propagation', () => {
    it('should propagate disabled state to TileSpot', () => {
      const { getByTestId } = render(
        <TestWrapper>
          <Tile disabled testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      const pressable = getByTestId('tile');
      expect(pressable.props.accessibilityState?.disabled).toBe(true);
    });

    it('should propagate disabled state to text components', () => {
      const { getByText } = render(
        <TestWrapper>
          <Tile disabled testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
              <TileDescription>Test Description</TileDescription>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByText('Test Title')).toBeTruthy();
      expect(getByText('Test Description')).toBeTruthy();
    });
  });

  describe('Appearance Variants', () => {
    it('should render with no-background appearance by default', () => {
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId('tile')).toBeTruthy();
    });

    it('should render with card appearance when specified', () => {
      const { getByTestId } = render(
        <TestWrapper>
          <Tile appearance='card' testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId('tile')).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should forward testID prop to Pressable', () => {
      const testId = 'custom-tile-id';
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID={testId}>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId(testId)).toBeTruthy();
    });

    it('should support custom accessibility label', () => {
      const customLabel = 'Custom accessibility label';
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile' accessibilityLabel={customLabel}>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      const pressable = getByTestId('tile');
      expect(pressable.props.accessibilityLabel).toBe(customLabel);
    });

    it('should set accessibility role to button', () => {
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      const pressable = getByTestId('tile');
      expect(pressable.props.accessibilityRole).toBe('button');
    });
  });

  describe('Sub-components', () => {
    it('should render TileContent with testID', () => {
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId('tile-content')).toBeTruthy();
    });

    it('should render TileTitle with testID', () => {
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId('tile-title')).toBeTruthy();
    });

    it('should render TileDescription with testID', () => {
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
              <TileDescription>Test Description</TileDescription>
            </TileContent>
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId('tile-description')).toBeTruthy();
    });
  });

  describe('Complex Scenarios', () => {
    it('should render with all features combined', () => {
      const description = 'Full description';
      const tagText = 'Tag Label';

      const { getByText, getByTestId } = render(
        <TestWrapper>
          <Tile
            appearance='card'
            onPress={jest.fn()}
            onLongPress={jest.fn()}
            testID='tile'
          >
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
              <TileDescription>{description}</TileDescription>
            </TileContent>
            <Tag label={tagText} />
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId('tile')).toBeTruthy();
      expect(getByText('Test Title')).toBeTruthy();
      expect(getByText(description)).toBeTruthy();
      expect(getByText(tagText)).toBeTruthy();
    });

    it('should render complex custom content', () => {
      const customLeading = (
        <Text testID='custom-leading'>Custom Leading Content</Text>
      );
      const { getByTestId } = render(
        <TestWrapper>
          <Tile testID='tile'>
            <TileSpot appearance='icon' icon={Settings} />
            <TileContent>
              <TileTitle>Test Title</TileTitle>
            </TileContent>
            {customLeading}
          </Tile>
        </TestWrapper>,
      );

      expect(getByTestId('custom-leading')).toBeTruthy();
    });
  });
});
