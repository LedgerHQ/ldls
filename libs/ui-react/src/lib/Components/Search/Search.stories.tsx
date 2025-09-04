import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from './Search';
import { ListItem } from '../ListItem';

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'Components/Search/Overview',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the search input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the search input is disabled',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the input',
    },
    value: {
      control: 'text',
      description: 'Controlled value of the search input',
    },
    hideClearButton: {
      control: 'boolean',
      description: 'Hide the clear button that appears when typing',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

/**
 * The default search component with a search icon prefix and automatic clear button functionality.
 */
export const Default: Story = {
  args: {
    placeholder: 'Search text',
  },
  parameters: {
    docs: {
      source: {
        code: '<Search placeholder="Search text" />',
      },
    },
  },
};

/**
 * Empty search showing placeholder text.
 */
export const Empty: Story = {
  args: {
    placeholder: 'Search text',
    containerClassName: 'max-w-md',
  },
  parameters: {
    docs: {
      source: {
        code: '<Search placeholder="Search text" containerClassName="max-w-md" />',
      },
    },
  },
};

/**
 * Search with content showing the clear button.
 */
export const WithContent: Story = {
  args: {
    placeholder: 'Search text',
    defaultValue: 'Search text',
    containerClassName: 'max-w-md',
  },
  parameters: {
    docs: {
      source: {
        code: '<Search placeholder="Search text" defaultValue="Search text" containerClassName="max-w-md" />',
      },
    },
  },
};

/**
 * Disabled search input.
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Search text',
    disabled: true,
    defaultValue: 'Disabled input',
    containerClassName: 'max-w-md',
  },
  parameters: {
    docs: {
      source: {
        code: '<Search placeholder="Search text" disabled defaultValue="Disabled input" containerClassName="max-w-md" />',
      },
    },
  },
};

/**
 * Search in error state with error message.
 */
export const Error: Story = {
  args: {
    placeholder: 'Search text',
    defaultValue: 'Invalid search',
    errorMessage: 'Search term is invalid',
    'aria-invalid': true,
    containerClassName: 'max-w-md',
  },
  parameters: {
    docs: {
      source: {
        code: `<Search 
  placeholder="Search text"
  defaultValue="Invalid search"
  errorMessage="Search term is invalid"
  aria-invalid={true}
  containerClassName="max-w-md"
/>`,
      },
    },
  },
};

/**
 * Search component with debounced functionality to avoid excessive filtering.
 */
export const DebouncedSearch: Story = {
  render: () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [filteredResults, setFilteredResults] = React.useState<string[]>([]);

    const items = [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Elderberry',
      'Fig',
      'Grape',
    ];

    // Debounce search and filter results
    React.useEffect(() => {
      const timer = setTimeout(() => {
        if (searchValue.trim() === '') {
          setFilteredResults([]);
        } else {
          const results = items.filter((item) =>
            item.toLowerCase().includes(searchValue.toLowerCase()),
          );
          setFilteredResults(results);
        }
      }, 300);

      return () => clearTimeout(timer);
    }, [searchValue]);

    return (
      <div className="space-y-4">
        <Search
          placeholder="Search fruits (debounced)"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClear={() => {
            setFilteredResults([]);
          }}
          containerClassName="max-w-md"
        />

        {searchValue.length > 0 && (
          <div className="rounded-md bg-muted p-16">
            {filteredResults.length > 0 ? (
              <div className="space-y-4">
                {filteredResults.map((result) => (
                  <ListItem key={result} title={result} />
                ))}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-muted-contrast body-2">Nothing found</p>
                <p className="text-muted-contrast mt-4 body-3">
                  Try searching for different keywords
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
};
