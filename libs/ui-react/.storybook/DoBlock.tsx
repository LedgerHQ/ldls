import { cn } from '@ledgerhq/ldls-utils-shared';
import React from 'react';

type DoBlockItemProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export const DoBlockItem: React.FC<DoBlockItemProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <div
      className={cn('flex flex-col gap-12', className)}
      {...{ 'data-type': 'do-item' }}
    >
      {/* Header */}
      {(title || description) && (
        <div className='!-mb-16 flex flex-col gap-4 '>
          {title && (
            <div className='flex items-center gap-8 '>
              <span className='text-[#10B981]'>✓</span>
              <h4 className='!m-0 text-base body-2-semi-bold'>{title}</h4>
            </div>
          )}
          {description && (
            <p className='!m-0 text-muted body-3'>{description}</p>
          )}
        </div>
      )}

      {/* Code Block */}
      <div className='[&_pre]:!m-0 [&_pre]:!rounded-xs [&_pre]:!border-2 [&_pre]:!border-[#10B981] [&_pre]:!bg-[#F0FDF4]'>
        {children}
      </div>
    </div>
  );
};
