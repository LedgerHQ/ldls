import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
} from './Menu';

describe('Menu', () => {
  it('renders trigger element', () => {
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>,
    );

    expect(screen.getByText('Open Menu')).toBeInTheDocument();
  });

  it('opens menu on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem>Item 1</MenuItem>
        </MenuContent>
      </Menu>,
    );

    const trigger = screen.getByText('Open Menu');
    await user.click(trigger);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('calls onSelect when menu item is clicked', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={onSelect}>Item 1</MenuItem>
        </MenuContent>
      </Menu>,
    );

    await user.click(screen.getByText('Open Menu'));
    await user.click(screen.getByText('Item 1'));

    expect(onSelect).toHaveBeenCalled();
  });

  it('handles checkbox items', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();

    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuCheckboxItem checked={false} onCheckedChange={onCheckedChange}>
            Checkbox Item
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>,
    );

    await user.click(screen.getByText('Open Menu'));
    await user.click(screen.getByText('Checkbox Item'));

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('handles radio items', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuRadioGroup value='option1' onValueChange={onValueChange}>
            <MenuRadioItem value='option1'>Option 1</MenuRadioItem>
            <MenuRadioItem value='option2'>Option 2</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>,
    );

    await user.click(screen.getByText('Open Menu'));
    await user.click(screen.getByText('Option 2'));

    expect(onValueChange).toHaveBeenCalledWith('option2');
  });

  it('disables menu items when disabled prop is true', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuItem disabled onSelect={onSelect}>
            Disabled Item
          </MenuItem>
        </MenuContent>
      </Menu>,
    );

    await user.click(screen.getByText('Open Menu'));

    const disabledItem = screen.getByText('Disabled Item');
    expect(disabledItem).toHaveAttribute('data-disabled');
  });
});
