import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../shared';

const meta: Meta = {
  title: 'Foundations/Styles/Typography',
};

export default meta;
type Story = StoryObj;

const TypographySample = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => (
  <div>
    <div
      className={`${className} toto max-w-fit rounded-lg border border-muted-subtle p-24 text-base`}
    >
      The quick brown fox jumps over the lazy dog
    </div>
    <div className="mb-4 mt-16 text-base body-2">{title}</div>
    <div className="mb-32 text-muted body-4">{className}</div>
  </div>
);

const TypographyShowcase = () => {
  const typographyStyles = [
    { className: 'display-1', title: 'Display 1' },
    { className: 'display-2', title: 'Display 2' },
    { className: 'display-3', title: 'Display 3' },
    { className: 'display-4', title: 'Display 4' },
    { className: 'heading-1', title: 'Heading 1' },
    { className: 'heading-1-medium', title: 'Heading 1 Medium' },
    { className: 'heading-2', title: 'Heading 2' },
    { className: 'heading-2-medium', title: 'Heading 2 Medium' },
    { className: 'heading-3', title: 'Heading 3' },
    { className: 'heading-3-medium', title: 'Heading 3 Medium' },
    { className: 'body-1', title: 'Body 1' },
    { className: 'body-1-semi-bold', title: 'Body 1 Semi Bold' },
    { className: 'body-2', title: 'Body 2' },
    { className: 'body-2-semi-bold', title: 'Body 2 Semi Bold' },
    { className: 'body-3', title: 'Body 3' },
    { className: 'body-3-semi-bold', title: 'Body 3 Semi Bold' },
    { className: 'body-4', title: 'Body 4' },
    { className: 'body-4-semi-bold', title: 'Body 4 Semi Bold' },
  ];

  return (
    <div className="mb-32">
      <div className="space-y-12">
        {typographyStyles.map((style) => (
          <TypographySample key={style.className} {...style} />
        ))}
      </div>
    </div>
  );
};

export const Typography: Story = {
  render: () => (
    <div className="p-24">
      <SectionHeader
        title="Typography"
        description="Tailwind classes for controlling the typography of an element. Use `body-1`, `body-2`, `display-1`, `heading-1`... for the display text."
      />
      <TypographyShowcase />
    </div>
  ),
};
