import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react-native';
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
    const handlePrimary = vi.fn();
    const { getByText } = render(
      <Banner
        title='Banner with Primary'
        primaryAction={'Primary'}
        secondaryAction={'Secondary'}
      />,
    );

    getByText('Primary');
    getByText('Secondary');
  });
});
