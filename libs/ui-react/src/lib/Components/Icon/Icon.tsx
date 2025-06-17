import { createElement, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: 16 | 20 | 24 | 40 | 48;
  className?: string;
  children: React.ReactElement;
}

const defaultAttributes = {
  fill: 'none',
  'aria-hidden': 'true',
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className = '', children, viewBox, xmlns, ...props }, ref) => {
    const sizeMap = {
      16: 'icon-w-16 icon-h-16',
      20: 'icon-w-20 icon-h-20',
      24: 'icon-w-24 icon-h-24',
      40: 'icon-w-40 icon-h-40',
      48: 'icon-w-48 icon-h-48',
    };
    const strokeWidthMap = {
      16: 'icon-stroke-16',
      20: 'icon-stroke-20',
      24: 'icon-stroke-24',
      40: 'icon-stroke-40',
      48: 'icon-stroke-48',
    };

    return createElement(
      'svg',
      {
        ref,
        ...defaultAttributes,
        xmlns,
        viewBox,
        className: twMerge(
          'inline-block',
          sizeMap[size],
          strokeWidthMap[size],
          className
        ),
        ...props,
      },
      children
    );
  }
);

Icon.displayName = 'Icon';
