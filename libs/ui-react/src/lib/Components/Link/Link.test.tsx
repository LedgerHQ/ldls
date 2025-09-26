import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Link } from './Link';

describe('Link Component', () => {
  it('should render correctly with children', () => {
    render(<Link href='/'>Home</Link>);
    const linkElement = screen.getByRole('link', { name: /home/i });
    expect(linkElement).toBeInTheDocument();
  });

  it('should handle external links', () => {
    render(
      <Link href='https://example.com' isExternal>
        External
      </Link>,
    );
    const linkElement = screen.getByRole('link', { name: /external/i });
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should not add external attributes when asChild is true', () => {
    render(
      <Link asChild isExternal>
        <a href='https://example.com'>External Child</a>
      </Link>,
    );
    const linkElement = screen.getByRole('link', { name: /external child/i });
    expect(linkElement).not.toHaveAttribute('target');
    expect(linkElement).not.toHaveAttribute('rel');
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(
      <Link href='/' onClick={handleClick}>
        Clickable
      </Link>,
    );

    const linkElement = screen.getByRole('link');
    fireEvent.click(linkElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply correct classes for accent appearance and small size', () => {
    render(
      <Link href='/' appearance='accent' size='sm'>
        Accent Small
      </Link>,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass('gap-4 body-2-semi-bold');
    expect(linkElement).toHaveClass(
      'text-interactive hover:text-interactive-hover active:text-interactive-pressed',
    );
  });

  it('should render as child with merged props', () => {
    render(
      <Link asChild appearance='underlined' size='md'>
        <a href='/dashboard'>Dashboard</a>
      </Link>,
    );
    const linkElement = screen.getByRole('link', { name: /dashboard/i });
    expect(linkElement).toHaveClass('gap-8 body-1-semi-bold');
    expect(linkElement).toHaveClass(
      'text-base underline underline-offset-2 hover:text-base-hover active:text-base-pressed',
    );
  });
});
