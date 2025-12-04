import { cn } from '@ledgerhq/ldls-utils-shared';

import type { SkeletonProps } from './types';

function Skeleton({ className, component, ...props }: SkeletonProps) {
  if (component === 'list-item') {
    return (
      <div
        data-slot='skeleton'
        data-testid='skeleton'
        className={cn('flex w-full items-center gap-16 py-8', className)}
        {...props}
      >
        <Skeleton className='size-48 shrink-0 rounded-full' />
        <div className='flex flex-1 flex-col gap-10'>
          <Skeleton className='h-12 w-176 rounded-full' />
          <Skeleton className='h-12 w-112 rounded-full' />
        </div>
      </div>
    );
  }

  if (component === 'tile') {
    return (
      <div
        data-slot='skeleton'
        data-testid='skeleton'
        className={cn(
          'flex w-112 flex-col items-center gap-12 rounded-md px-8 py-16',
          className,
        )}
        {...props}
      >
        <Skeleton className='size-48 shrink-0 rounded-full' />
        <div className='flex w-full flex-col items-center gap-8'>
          <Skeleton className='h-12 w-48 rounded-full' />
          <Skeleton className='h-12 w-64 rounded-full' />
        </div>
      </div>
    );
  }

  return (
    <div
      data-slot='skeleton'
      data-testid='skeleton'
      className={cn('animate-pulse rounded-md bg-surface', className)}
      {...props}
    />
  );
}

export { Skeleton };
