import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
} from './Select';
import { Button } from '../Button';

const meta: Meta<typeof Select> = {
  title: 'Selection/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Base: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className='w-384'>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger label='Label' />
          <SelectContent>
            <SelectItem value='option1'>Option 1</SelectItem>
            <SelectItem value='option2' disabled>
              Option 2 disabled
            </SelectItem>
            <SelectItem value='option3'>Option 3</SelectItem>
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
      <div className='w-384'>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger label='Category' />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='banana'>Banana</SelectItem>
              <SelectItem value='orange'>Orange</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value='carrot'>Carrot</SelectItem>
              <SelectItem value='broccoli'>Broccoli</SelectItem>
              <SelectItem value='spinach'>Spinach</SelectItem>
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
                {country}
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
            <SelectItem value='option1'>Option 1</SelectItem>
            <SelectItem value='option2'>Option 2</SelectItem>
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
            <SelectItem value='option1'>Option 1</SelectItem>
            <SelectItem value='option2'>Option 2</SelectItem>
            <SelectItem value='option3'>Option 3</SelectItem>
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
            <SelectItem value='tech'>Technology</SelectItem>
            <SelectItem value='design'>Design</SelectItem>
            <SelectItem value='business'>Business</SelectItem>
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
            <SelectItem value='low'>Low</SelectItem>
            <SelectItem value='medium'>Medium</SelectItem>
            <SelectItem value='high'>High</SelectItem>
            <SelectItem value='urgent'>Urgent</SelectItem>
          </SelectContent>
        </Select>

        <Button appearance='accent' type='submit' isFull>
          Submit
        </Button>
      </form>
    );
  },
};
