import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from './Search';

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
  },
  parameters: {
    docs: {
      source: {
        code: '<Search placeholder="Search text" />',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

/**
 * Search with content showing the clear button.
 */
export const WithContent: Story = {
  args: {
    placeholder: 'Search text',
    defaultValue: 'Search text',
  },
  parameters: {
    docs: {
      source: {
        code: '<Search placeholder="Search text" defaultValue="Search text" />',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

/**
 * Disabled search input.
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Search text',
    disabled: true,
    defaultValue: 'Disabled input',
  },
  parameters: {
    docs: {
      source: {
        code: '<Search placeholder="Search text" disabled defaultValue="Disabled input" />',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
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
  },
  parameters: {
    docs: {
      source: {
        code: `<Search 
  placeholder="Search text"
  defaultValue="Invalid search"
  errorMessage="Search term is invalid"
  aria-invalid={true}
/>`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

/**
 * Search component with controlled state demonstrating the clear functionality.
 */
export const Controlled: Story = {
  render: () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [searchResults, setSearchResults] = React.useState<string[]>([]);

    // Simulate search results
    React.useEffect(() => {
      if (searchValue.length > 0) {
        const mockResults = [
          'Apple',
          'Banana',
          'Cherry',
          'Date',
          'Elderberry',
        ].filter((item) =>
          item.toLowerCase().includes(searchValue.toLowerCase()),
        );
        setSearchResults(mockResults);
      } else {
        setSearchResults([]);
      }
    }, [searchValue]);

    return (
      <div className="max-w-md space-y-4">
        <Search
          placeholder="Search fruits"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClear={() => {
            setSearchValue('');
            console.log('Search cleared');
          }}
        />

        {searchResults.length > 0 && (
          <div className="border-gray-200 rounded-md border p-4">
            <h4 className="font-medium mb-2">
              Results ({searchResults.length}):
            </h4>
            <ul className="space-y-1">
              {searchResults.map((result) => (
                <li key={result} className="text-sm text-gray-600">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};
