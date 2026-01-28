import { describe, it, expect, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeFill, Settings, BasketPutIn } from '../../Symbols';
import { TabBar, TabBarItem } from './TabBar';

describe('TabBar', () => {
  it('should render tab items with labels', () => {
    const { getByText } = render(
      <TabBar active='home'>
        <TabBarItem value='home' label='Home' icon={HomeFill} />
        <TabBarItem value='settings' label='Settings' icon={Settings} />
      </TabBar>,
    );

    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Settings')).toBeTruthy();
  });

  it('should call onTabPress when tab is pressed', () => {
    const onTabPress = jest.fn();
    const { getByText } = render(
      <TabBar active='home' onTabPress={onTabPress}>
        <TabBarItem value='home' label='Home' icon={HomeFill} />
        <TabBarItem value='settings' label='Settings' icon={Settings} />
      </TabBar>,
    );

    fireEvent.press(getByText('Settings'));
    expect(onTabPress).toHaveBeenCalledWith('settings');
  });

  it('should fallback to value when label is not provided', () => {
    const { getByText } = render(
      <TabBar active='tab1'>
        <TabBarItem value='tab1' icon={HomeFill} />
        <TabBarItem value='tab2' icon={Settings} />
      </TabBar>,
    );

    expect(getByText('tab1')).toBeTruthy();
    expect(getByText('tab2')).toBeTruthy();
  });

  it('should render multiple tabs correctly', () => {
    const { getByText } = render(
      <TabBar active='home'>
        <TabBarItem value='home' label='Home' icon={HomeFill} />
        <TabBarItem value='shop' label='Shop' icon={BasketPutIn} />
        <TabBarItem value='settings' label='Settings' icon={Settings} />
      </TabBar>,
    );

    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Shop')).toBeTruthy();
    expect(getByText('Settings')).toBeTruthy();
  });
});
