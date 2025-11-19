import React from 'react';
import { Skeleton } from './Skeleton';

import figma from '@figma/code-connect';

figma.connect(
  Skeleton,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=8004-10676',
  {
    imports: ["import { Skeleton } from '@ledgerhq/ldls-ui-react'"],
    links: [
      {
        name: '*',
        url: 'https://ldls.vercel.app/?path=/docs/feedback-skeleton--docs',
      },
    ],
    example: () => {
      return (
        <>
          {/* circle Skeleton */}
          <Skeleton className='h-56 w-56 rounded-full' />
          {/* square Skeleton */}
          <Skeleton className='h-56 w-112 rounded-md' />
          {/* line Skeleton */}
          <Skeleton className='h-16 w-112 rounded-md' />
        </>
      );
    },
  },
);
