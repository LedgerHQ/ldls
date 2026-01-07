import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Information } from '../../Symbols';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';
import { Subheader } from './Subheader';
import '@testing-library/jest-dom';

describe('Subheader', () => {
  it('renders the title', () => {
    render(
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Test Title</Subheader.Title>
        </Subheader.Row>
      </Subheader>,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the count when provided', () => {
    render(
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Title</Subheader.Title>
          <Subheader.Count>30</Subheader.Count>
        </Subheader.Row>
      </Subheader>,
    );
    expect(screen.getByText('(30)')).toBeInTheDocument();
  });

  it('renders the hint tooltip icon when Subheader.Hint is provided', () => {
    const { container } = render(
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Title</Subheader.Title>
          <Subheader.Hint>
            <Tooltip>
              <TooltipTrigger asChild>
                <Information
                  size={16}
                  className='shrink-0 text-muted'
                  aria-label='More information'
                />
              </TooltipTrigger>
              <TooltipContent>Info</TooltipContent>
            </Tooltip>
          </Subheader.Hint>
        </Subheader.Row>
      </Subheader>,
    );
    expect(
      container.querySelector('[aria-label="More information"]'),
    ).toBeInTheDocument();
  });

  it('renders the description when provided', () => {
    render(
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Title</Subheader.Title>
        </Subheader.Row>
        <Subheader.Description>This is a description</Subheader.Description>
      </Subheader>,
    );
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders the action when Subheader.Action is provided in Row', () => {
    render(
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Title</Subheader.Title>
          <Subheader.Action>
            <button>Action</button>
          </Subheader.Action>
        </Subheader.Row>
      </Subheader>,
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders the action when Subheader.Action is provided at top level', () => {
    render(
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Title</Subheader.Title>
        </Subheader.Row>
        <Subheader.Action>
          <button>Action</button>
        </Subheader.Action>
      </Subheader>,
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders all components together', () => {
    const { container } = render(
      <Subheader>
        <Subheader.Row>
          <Subheader.Title>Title</Subheader.Title>
          <Subheader.Count>42</Subheader.Count>
          <Subheader.Hint>
            <Tooltip>
              <TooltipTrigger asChild>
                <Information
                  size={16}
                  className='shrink-0 text-muted'
                  aria-label='More information'
                />
              </TooltipTrigger>
              <TooltipContent>Info</TooltipContent>
            </Tooltip>
          </Subheader.Hint>
          <Subheader.Action>
            <button>Action</button>
          </Subheader.Action>
        </Subheader.Row>
        <Subheader.Description>Description text</Subheader.Description>
      </Subheader>,
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('(42)')).toBeInTheDocument();
    expect(
      container.querySelector('[aria-label="More information"]'),
    ).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });

  it('throws error when SubheaderRow is missing', () => {
    expect(() => {
      render(
        <Subheader>
          <Subheader.Title>Title</Subheader.Title>
        </Subheader>,
      );
    }).toThrow('Subheader requires a SubheaderRow child');
  });

  it('throws error when SubheaderRow is missing SubheaderTitle', () => {
    expect(() => {
      render(
        <Subheader>
          <Subheader.Row>
            <Subheader.Count>30</Subheader.Count>
          </Subheader.Row>
        </Subheader>,
      );
    }).toThrow('SubheaderRow requires a SubheaderTitle child');
  });
});
