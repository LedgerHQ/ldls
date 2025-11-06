import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectGroup,
  SelectSeparator,
} from './Select';

const meta: Meta<typeof Select> = {
  title: 'Selection/Select',
  component: Select,
  subcomponents: {
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectItemText,
    SelectGroup,
    SelectSeparator,
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: false,
    },
    open: {
      control: false,
    },
    defaultOpen: {
      control: false,
    },
    onOpenChange: {
      action: false,
    },
    value: {
      control: false,
    },
    defaultValue: {
      control: false,
    },
    dir: {
      control: false,
    },
    name: {
      control: false,
    },
    required: {
      control: false,
    },
    disabled: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Base: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className='w-400'>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger label='Choose an option' />
          <SelectContent>
            <SelectItem value='option1'>
              <SelectItemText>Option 1</SelectItemText>
            </SelectItem>
            <SelectItem value='option2' disabled textValue='Option 2 disabled'>
              <SelectItemText>Option 2 disabled</SelectItemText>
            </SelectItem>
            <SelectItem value='option3' textValue='Option 3'>
              <SelectItemText>Option 3</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

export const WithGroups: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className='w-400'>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger label='Category' />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='apple'>
                <SelectItemText>Apple</SelectItemText>
              </SelectItem>
              <SelectItem value='banana'>
                <SelectItemText>Banana</SelectItemText>
              </SelectItem>
              <SelectItem value='orange'>
                <SelectItemText>Orange</SelectItemText>
              </SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value='carrot'>
                <SelectItemText>Carrot</SelectItemText>
              </SelectItem>
              <SelectItem value='broccoli'>
                <SelectItemText>Broccoli</SelectItemText>
              </SelectItem>
              <SelectItem value='spinach'>
                <SelectItemText>Spinach</SelectItemText>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

export const LongList: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const countries = [
      'United States',
      'Canada',
      'Mexico',
      'United Kingdom',
      'France',
      'Germany',
      'Italy',
      'Spain',
      'Japan',
      'South Korea',
      'China',
      'India',
      'Australia',
      'New Zealand',
      'Brazil',
      'Argentina',
    ];

    return (
      <div className='w-208'>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger label='Country' />
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country.toLowerCase()}>
                <SelectItemText>{country}</SelectItemText>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  },
};

// Disabled
export const Disabled: Story = {
  render: () => {
    return (
      <div className='w-208'>
        <Select disabled>
          <SelectTrigger label='Disabled' />
          <SelectContent>
            <SelectItem value='option1'>
              <SelectItemText>Option 1</SelectItemText>
            </SelectItem>
            <SelectItem value='option2'>
              <SelectItemText>Option 2</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

// With Default Value
export const WithDefaultValue: Story = {
  render: () => {
    return (
      <div className='w-208'>
        <Select defaultValue='option2'>
          <SelectTrigger label='Label' />
          <SelectContent>
            <SelectItem value='option1'>
              <SelectItemText>Option 1</SelectItemText>
            </SelectItem>
            <SelectItem value='option2'>
              <SelectItemText>Option 2</SelectItemText>
            </SelectItem>
            <SelectItem value='option3'>
              <SelectItemText>Option 3</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    return (
      <div className='w-208'>
        <Select>
          <SelectTrigger label='Label' />
          <SelectContent>
            <SelectItem
              value='option1'
              className='flex flex-col items-start justify-start gap-2'
            >
              <SelectItemText>Option 1</SelectItemText>
              <div className='text-muted body-4'>this is a description</div>
            </SelectItem>
            <SelectItem
              value='option2'
              className='flex flex-col items-start justify-start gap-4'
            >
              <SelectItemText>Option 2</SelectItemText>
              <div className='text-muted body-4'>this is a description</div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

// Form Integration
export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      category: '',
      priority: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      alert(
        `Form submitted:\nCategory: ${formData.category}\nPriority: ${formData.priority}`,
      );
    };

    return (
      <form onSubmit={handleSubmit} className='flex w-256 flex-col gap-16'>
        <Select
          value={formData.category}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, category: value }))
          }
          name='category'
          required
        >
          <SelectTrigger label='Category' />
          <SelectContent>
            <SelectItem value='tech'>
              <SelectItemText>Technology</SelectItemText>
            </SelectItem>
            <SelectItem value='design'>
              <SelectItemText>Design</SelectItemText>
            </SelectItem>
            <SelectItem value='business'>
              <SelectItemText>Business</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={formData.priority}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, priority: value }))
          }
          name='priority'
          required
        >
          <SelectTrigger label='Priority' />
          <SelectContent>
            <SelectItem value='low'>
              <SelectItemText>Low</SelectItemText>
            </SelectItem>
            <SelectItem value='medium'>
              <SelectItemText>Medium</SelectItemText>
            </SelectItem>
            <SelectItem value='high'>
              <SelectItemText>High</SelectItemText>
            </SelectItem>
            <SelectItem value='urgent'>
              <SelectItemText>Urgent</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>

        <Button appearance='accent' type='submit' isFull>
          Submit
        </Button>
      </form>
    );
  },
};
