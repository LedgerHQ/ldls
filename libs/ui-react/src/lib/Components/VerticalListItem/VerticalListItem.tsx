import { cn } from '@ldls/utils-shared';
import { IconSize } from '../Icon/Icon';
import { MoreVertical } from '../../Symbols';

const IconButton = ({
  icon: IconComponent,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<{ size?: IconSize; className?: string }>;
  className?: string;
}) => {
  return (
    <button type="button" className={cn(className, 'rounded-full')} {...props}>
      <IconComponent size={24} />
    </button>
  );
};

const defaultClassName = cn(
  'flex flex-col gap-8 text-base body-3 bg-base-transparent relative',
  'hover:bg-base-transparent-hover',
  'active:bg-base-transparent-pressed',
);

export interface VerticalListItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
}

export const VerticalListItem = ({
  className,
  title,
  description,
  ...props
}: VerticalListItemProps) => {
  return (
    <button className={cn(className, defaultClassName)} {...props}>
      <div className="flex h-56 w-56 items-center justify-center">Spot</div>
      <div className="flex flex-col">
        <div>{title}</div>
        {description && <div className="text-muted">{description}</div>}
      </div>
      <IconButton className="absolute right-4 top-4" icon={MoreVertical} />
    </button>
  );
};
