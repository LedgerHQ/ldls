import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Information } from '../../Symbols';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';
import {
  Subheader,
  SubheaderRow,
  SubheaderTitle,
  SubheaderCount,
  SubheaderHint,
  SubheaderDescription,
  SubheaderAction,
} from './Subheader';
import '@testing-library/jest-dom';

describe('Subheader', () => {
  it('renders the title', () => {
    render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Test Title</SubheaderTitle>
        </SubheaderRow>
      </Subheader>,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the count when provided', () => {
    render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
          <SubheaderCount>30</SubheaderCount>
        </SubheaderRow>
      </Subheader>,
    );
    expect(screen.getByText('(30)')).toBeInTheDocument();
  });

  it('renders the hint tooltip icon when SubheaderHint is provided', () => {
    const { container } = render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
          <SubheaderHint>
            <Tooltip>
              <TooltipTrigger asChild>
                <Information
                  size={16}
                  className='text-muted shrink-0'
                  aria-label='More information'
                />
              </TooltipTrigger>
              <TooltipContent>Info</TooltipContent>
            </Tooltip>
          </SubheaderHint>
        </SubheaderRow>
      </Subheader>,
    );
    expect(
      container.querySelector('[aria-label="More information"]'),
    ).toBeInTheDocument();
  });

  it('renders the description when provided', () => {
    render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
        </SubheaderRow>
        <SubheaderDescription>This is a description</SubheaderDescription>
      </Subheader>,
    );
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders the action when SubheaderAction is provided in Row', () => {
    render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
          <SubheaderAction>
            <button>Action</button>
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>,
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders the action when SubheaderAction is provided at top level', () => {
    render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
        </SubheaderRow>
        <SubheaderAction>
          <button>Action</button>
        </SubheaderAction>
      </Subheader>,
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders all components together', () => {
    const { container } = render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
          <SubheaderCount>42</SubheaderCount>
          <SubheaderHint>
            <Tooltip>
              <TooltipTrigger asChild>
                <Information
                  size={16}
                  className='text-muted shrink-0'
                  aria-label='More information'
                />
              </TooltipTrigger>
              <TooltipContent>Info</TooltipContent>
            </Tooltip>
          </SubheaderHint>
          <SubheaderAction>
            <button>Action</button>
          </SubheaderAction>
        </SubheaderRow>
        <SubheaderDescription>Description text</SubheaderDescription>
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
          <SubheaderTitle>Title</SubheaderTitle>
        </Subheader>,
      );
    }).toThrow('Subheader requires a SubheaderRow child');
  });

  it('throws error when SubheaderRow is missing SubheaderTitle', () => {
    expect(() => {
      render(
        <Subheader>
          <SubheaderRow>
            <SubheaderCount>30</SubheaderCount>
          </SubheaderRow>
        </Subheader>,
      );
    }).toThrow('SubheaderRow requires a SubheaderTitle child');
  });
});
