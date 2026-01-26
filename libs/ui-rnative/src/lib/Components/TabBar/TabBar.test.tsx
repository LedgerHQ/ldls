import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react-native';
import { TabBar } from './TabBar';

describe('TabBar', () => {
  it('should render', () => {
    const { getByText } = render(<TabBar />);
    expect(getByText('TabBar Component')).toBeTruthy();
  });
});
