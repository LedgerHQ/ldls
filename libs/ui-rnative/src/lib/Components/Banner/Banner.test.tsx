import { describe, it, expect, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import { Button } from '../Button';
import { Banner } from './Banner';

describe('Banner Component', () => {
  it('should render correctly with minimal props', () => {
    const { getByText } = render(
      <Banner title='banner-title' description='banner-description' />,
    );
    getByText('banner-title');
    getByText('banner-description');
  });

  it('should render with different appearances', () => {
    const { getByTestId, rerender } = render(
      <Banner testID='banner-id' title='Info Banner' appearance='info' />,
    );
    expect(getByTestId('banner-id').props.className).toContain('bg-muted');

    rerender(
      <Banner testID='banner-id' title='Success Banner' appearance='success' />,
    );
    expect(getByTestId('banner-id').props.className).toContain('bg-success');

    rerender(
      <Banner testID='banner-id' title='Warning Banner' appearance='warning' />,
    );
    expect(getByTestId('banner-id').props.className).toContain('bg-warning');

    rerender(
      <Banner testID='banner-id' title='Error Banner' appearance='error' />,
    );
    expect(getByTestId('banner-id').props.className).toContain('bg-error');
  });

  it('should render primary and secondary actions', () => {
    const { getByText } = render(
      <Banner
        title='Banner with Primary'
        primaryAction={<Button>Primary</Button>}
        secondaryAction={<Button>Secondary</Button>}
      />,
    );

    getByText('Primary');
    getByText('Secondary');
  });

  it('should handle primaryAction button clicks', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Banner
        title='Banner with Primary'
        primaryAction={<Button onPress={onPressMock}>Primary</Button>}
      />,
    );

    expect(onPressMock).not.toHaveBeenCalled();
    fireEvent.press(getByText('Primary'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should handle onClose button clicks', () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <Banner title='Banner with Primary' onClose={onCloseMock} />,
    );

    expect(onCloseMock).not.toHaveBeenCalled();
    fireEvent.press(getByTestId('banner-close-button'));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
