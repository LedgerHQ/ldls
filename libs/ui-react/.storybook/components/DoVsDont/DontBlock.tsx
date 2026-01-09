import { cn } from '@ledgerhq/lumen-utils-shared';
import React from 'react';

type DontBlockItemProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export const DontBlockItem: React.FC<DontBlockItemProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <div
      className={cn('flex flex-col gap-12', className)}
      {...{ 'data-type': 'dont-item' }}
    >
      {/* Header */}
      {(title || description) && (
        <div className='-mb-16! flex flex-col gap-4'>
          {title && (
            <div className='flex items-center gap-8'>
              <span className='text-[#EF4444]'>✕</span>
              <h4 className='m-0! body-2-semi-bold text-base'>{title}</h4>
            </div>
          )}
          {description && (
            <p className='m-0! body-3 text-muted'>{description}</p>
          )}
        </div>
      )}

      {/* Code Block */}
      <div className='[&_pre]:m-0! [&_pre]:rounded-xs! [&_pre]:border-2! [&_pre]:border-[#EF4444]! [&_pre]:bg-[#FEF2F2]!'>
        {children}
      </div>
    </div>
  );
};
