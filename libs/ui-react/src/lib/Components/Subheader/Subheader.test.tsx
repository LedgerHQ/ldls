import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
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
  it('renders the title without row', () => {
    render(
      <Subheader>
        <SubheaderTitle>Test Title</SubheaderTitle>
      </Subheader>,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the title with row', () => {
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
          <SubheaderCount value={30} />
        </SubheaderRow>
      </Subheader>,
    );
    expect(screen.getByText('(30)')).toBeInTheDocument();
  });

  it('renders custom formatted count', () => {
    render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
          <SubheaderCount value={150} format={(n) => (n > 99 ? '99+' : `${n}`)} />
        </SubheaderRow>
      </Subheader>,
    );
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('renders the hint when provided', () => {
    const { container } = render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
          <SubheaderHint
            content={
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
            }
          />
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

  it('renders the action in row', () => {
    const handlePress = vi.fn();
    render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
          <SubheaderAction onPress={handlePress}>Action</SubheaderAction>
        </SubheaderRow>
      </Subheader>,
    );
    const button = screen.getByText('Action');
    expect(button).toBeInTheDocument();
    button.click();
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('renders interactive row with onPress', () => {
    const handlePress = vi.fn();
    render(
      <Subheader>
        <SubheaderRow onPress={handlePress}>
          <SubheaderTitle>Title</SubheaderTitle>
          <SubheaderCount value={5} />
        </SubheaderRow>
      </Subheader>,
    );
    const row = screen.getByText('Title').closest('button');
    expect(row).toBeInTheDocument();
    row?.click();
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('renders all components together', () => {
    const handleAction = vi.fn();
    const { container } = render(
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title</SubheaderTitle>
          <SubheaderCount value={42} />
          <SubheaderHint
            content={
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
            }
          />
          <SubheaderAction onPress={handleAction}>Action</SubheaderAction>
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

  it('works without row wrapper', () => {
    render(
      <Subheader>
        <SubheaderTitle>Simple Title</SubheaderTitle>
        <SubheaderDescription>Simple Description</SubheaderDescription>
      </Subheader>,
    );
    expect(screen.getByText('Simple Title')).toBeInTheDocument();
    expect(screen.getByText('Simple Description')).toBeInTheDocument();
  });
});
