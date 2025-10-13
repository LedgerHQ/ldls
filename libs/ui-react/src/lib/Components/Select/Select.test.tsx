import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';

describe('Select', () => {
  it('renders with placeholder text', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders with floating label', () => {
    render(
      <Select>
        <SelectTrigger label='Choose an option'>
          <SelectValue />
        </SelectTrigger>
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
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.queryByRole('label')).not.toBeInTheDocument();
  });

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup();

    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
  });

  it('selects an option when clicked', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();

    render(
      <Select onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    const option1 = screen.getByText('Option 1');
    await user.click(option1);

    expect(onValueChange).toHaveBeenCalledWith('option1');
  });

  it('displays selected value', () => {
    render(
      <Select value='option1'>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(
      <Select disabled>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();

    render(
      <Select onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole('combobox');

    // Open with Enter
    await user.click(trigger);
    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    // Navigate with arrow keys and select with Enter
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');

    expect(onValueChange).toHaveBeenCalledWith('option2');
  });

  it('closes dropdown when Escape is pressed', async () => {
    const user = userEvent.setup();

    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });
  });

  it('works with default value', () => {
    render(
      <Select defaultValue='option2'>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
