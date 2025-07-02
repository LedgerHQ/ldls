import { cva } from 'class-variance-authority';
import { createElement, forwardRef } from 'react';
import { cn } from '@ldls/utils-shared';

export type IconSize = 16 | 20 | 24 | 40 | 48;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
  className?: string;
  children: React.ReactNode;
}

const iconVariants = cva('inline-block', {
  variants: {
    size: {
      16: 'icon-w-16 icon-h-16 icon-stroke-16',
      20: 'icon-w-20 icon-h-20 icon-stroke-20',
      24: 'icon-w-24 icon-h-24 icon-stroke-24',
      40: 'icon-w-40 icon-h-40 icon-stroke-40',
      48: 'icon-w-48 icon-h-48 icon-stroke-48',
    },
  },
  defaultVariants: {
    size: 24,
  },
});

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', children, viewBox, xmlns, ...props }, ref) => {
    return createElement(
      'svg',
      {
        ref,
        fill: 'none',
        'aria-hidden': 'true',
        xmlns,
        viewBox,
        className: cn(iconVariants({ size }), 'inline-block', className),
        ...props,
      },
      children
    );
  }
);

Icon.displayName = 'Icon';
