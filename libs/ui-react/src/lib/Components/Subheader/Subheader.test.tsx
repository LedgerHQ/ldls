import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Subheader } from './Subheader';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';
import { Information } from '../../Symbols';
import '@testing-library/jest-dom';

describe('Subheader', () => {
  it('renders the title', () => {
    render(<Subheader title='Test Title' />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the info tooltip icon when Subheader.Info slot is provided', () => {
    const { container } = render(
      <Subheader title='Title'>
        <Subheader.Info>
          <Tooltip>
            <TooltipTrigger asChild>
              <Information
                size={12}
                className='shrink-0 text-muted'
                aria-label='More information'
              />
            </TooltipTrigger>
            <TooltipContent>Info</TooltipContent>
          </Tooltip>
        </Subheader.Info>
      </Subheader>,
    );
    expect(
      container.querySelector('[aria-label="More information"]'),
    ).toBeInTheDocument();
  });

  it('renders the action when Subheader.Action slot is provided', () => {
    render(
      <Subheader title='Title'>
        <Subheader.Action>
          <button>Action</button>
        </Subheader.Action>
      </Subheader>,
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders both Info and Action slots when provided', () => {
    const { container } = render(
      <Subheader title='Title'>
        <Subheader.Info>
          <Tooltip>
            <TooltipTrigger asChild>
              <Information
                size={12}
                className='shrink-0 text-muted'
                aria-label='More information'
              />
            </TooltipTrigger>
            <TooltipContent>Info</TooltipContent>
          </Tooltip>
        </Subheader.Info>
        <Subheader.Action>
          <button>Action</button>
        </Subheader.Action>
      </Subheader>,
    );
    expect(
      container.querySelector('[aria-label="More information"]'),
    ).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
