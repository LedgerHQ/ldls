import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { Select, SelectContent, SelectItem, SelectTrigger } from './Select';

describe('Select', () => {
  it('renders with floating label', () => {
    render(
      <Select>
        <SelectTrigger label='Choose an option' />
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  it('renders without label when not provided', () => {
    render(
      <Select>
        <SelectTrigger />
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.queryByRole('label')).not.toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(
      <Select disabled>
        <SelectTrigger />
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();
  });

  it('works with default value', () => {
    render(
      <Select defaultValue='option2'>
        <SelectTrigger />
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
