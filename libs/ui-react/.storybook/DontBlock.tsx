import { cn } from '@ledgerhq/ldls-utils-shared';
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
        <div className='!-mb-16 flex flex-col gap-4'>
          {title && (
            <div className='flex items-center gap-8'>
              <span className='text-[#EF4444]'>✕</span>
              <h4 className='!m-0 text-base body-2-semi-bold'>{title}</h4>
            </div>
          )}
          {description && (
            <p className='!m-0 text-muted body-3'>{description}</p>
          )}
        </div>
      )}

      {/* Code Block */}
      <div className='[&_pre]:!m-0 [&_pre]:!rounded-xs [&_pre]:!border-2 [&_pre]:!border-[#EF4444] [&_pre]:!bg-[#FEF2F2]'>
        {children}
      </div>
    </div>
  );
};

type DontBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export const DontBlock: React.FC<DontBlockProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-16', className)}>
      <div className='!-mb-16 grid grid-cols-1 gap-16 md:grid-cols-2'>
        {children}
      </div>
    </div>
  );
};
