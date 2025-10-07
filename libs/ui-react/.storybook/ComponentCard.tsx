import React from 'react';
import { cn } from '@ledgerhq/ldls-utils-shared';

interface ComponentCardProps {
  title: string;
  description: string;
  href: string;
  emoji?: string;
  className?: string;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  description,
  href,
  emoji,
  className,
}) => {
  const handleClick = () => {
    // Navigate using window.parent to escape iframe context
    if (window.parent && window.parent !== window) {
      window.parent.location.href =
        window.parent.location.origin + window.parent.location.pathname + href;
    } else {
      window.location.href = href;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'group relative flex flex-col gap-16 overflow-hidden rounded-2xl border-2 border-[#F4F4F4] p-16 transition-all duration-200',
        'hover:-translate-y-1 hover:border-[#B380DD] hover:shadow-lg',
        'cursor-pointer',
        className,
      )}
    >
      {/* Content area */}
      <div className='flex flex-1 flex-col justify-between'>
        <div>
          <h3 className='mb-2 !cursor-pointer text-base heading-4-semi-bold group-hover:text-[#B380DD]'>
            {emoji && <div>{emoji}</div>}
            {title}
          </h3>
          <p className='line-clamp-2 text-muted body-3'>{description}</p>
        </div>

        {/* Hover indicator */}
        <div className='mt-4 flex items-center text-[#B380DD] opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
          <div className='body-3'>Learn more</div>
        </div>
      </div>
    </button>
  );
};

interface ComponentCardGridProps {
  children: React.ReactNode;
  className?: string;
}

export const ComponentCardGrid: React.FC<ComponentCardGridProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};
