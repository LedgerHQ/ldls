import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import { Linking } from 'react-native';
import { Link } from './Link';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(() => Promise.resolve()),
}));

describe('Link Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with children text', () => {
    const { getByText } = render(
      <Link href='https://example.com'>Click me</Link>,
    );

    expect(getByText('Click me')).toBeTruthy();
  });

  it('should call Linking.openURL with href when pressed', async () => {
    const { getByText } = render(
      <Link href='https://example.com'>Click me</Link>,
    );

    fireEvent.press(getByText('Click me'));

    expect(Linking.openURL).toHaveBeenCalledWith('https://example.com');
    expect(Linking.openURL).toHaveBeenCalledTimes(1);
  });

  it('should call custom onPress handler instead of Linking.openURL when provided', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Link href='https://example.com' onPress={onPress}>
        Custom Press
      </Link>,
    );

    fireEvent.press(getByText('Custom Press'));

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).not.toHaveBeenCalled();
  });

  it('should call onPress handler when no href is provided', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Link onPress={onPress}>No Href Link</Link>);

    fireEvent.press(getByText('No Href Link'));

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).not.toHaveBeenCalled();
  });

  it('should have link accessibility role', () => {
    const { getByTestId } = render(
      <Link href='https://example.com' testID='accessible-link'>
        Accessible Link
      </Link>,
    );

    const linkElement = getByTestId('accessible-link');
    expect(linkElement.props.accessibilityRole).toBe('link');
  });

  it('should handle different URL protocols', () => {
    const { getByText, rerender } = render(
      <Link href='mailto:test@example.com'>Email Link</Link>,
    );

    fireEvent.press(getByText('Email Link'));
    expect(Linking.openURL).toHaveBeenCalledWith('mailto:test@example.com');

    rerender(<Link href='tel:+1234567890'>Phone Link</Link>);
    fireEvent.press(getByText('Phone Link'));
    expect(Linking.openURL).toHaveBeenCalledWith('tel:+1234567890');
  });
});
