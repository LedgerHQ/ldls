import { cn } from '@ldls/utils-shared';

export const ColorSwatch = ({
  name,
  className,
  textClassName = 'text-base',
  category = 'background',
}: {
  name: string;
  className: string;
  textClassName?: string;
  category?: 'background' | 'text' | 'border';
}) => {
  const getSwatchContent = () => {
    switch (category) {
      case 'text':
        return (
          <>
            <div
              className={cn(
                className,
                'border h-64 rounded-lg border-muted p-16',
              )}
            >
              <div className={cn('heading-4', textClassName)}>Aa</div>
            </div>
            <div className="mt-8 text-base body-1-semi-bold">{name}</div>
            <div className="text-muted body-3">{textClassName}</div>
          </>
        );
      case 'border':
        return (
          <>
            <div
              className={cn(
                'bg- h-64 rounded-lg border-2 p-16',
                className.replace('bg-base', ''),
              )}
            ></div>
            <div className="mt-8 text-base body-1-semi-bold">{name}</div>
            <div className="text-muted body-3">
              {className.replace('bg-base ', '')}
            </div>
          </>
        );
      default:
        return (
          <>
            <div
              className={cn(
                'border flex h-64 flex-col justify-between rounded-lg border-muted-subtle p-16',
                className,
              )}
            ></div>
            <div className={cn('mt-8 body-1-semi-bold', textClassName)}>
              {name}
            </div>
            <div className={cn('text-muted body-3', textClassName)}>
              {className}
            </div>
          </>
        );
    }
  };

  return <div className="group">{getSwatchContent()}</div>;
};

export const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="mb-48">
    <h2 className="mb-8 text-base display-4">{title}</h2>
    {description && <p className="text-muted">{description}</p>}
  </div>
);

export const ColorSection = ({
  title,
  tokens,
  category = 'background',
}: {
  title?: string;
  tokens: Array<{ name: string; className: string; textClassName?: string }>;
  category?: 'background' | 'text' | 'border';
}) => (
  <div className="mb-32">
    {title && <h3 className="mb-32 text-base heading-3">{title}</h3>}
    <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tokens.map(({ name, className, textClassName }) => (
        <ColorSwatch
          key={name}
          name={name}
          className={className}
          textClassName={textClassName}
          category={category}
        />
      ))}
    </div>
  </div>
);
