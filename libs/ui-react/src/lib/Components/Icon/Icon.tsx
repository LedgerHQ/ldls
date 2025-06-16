import { createElement, forwardRef } from 'react';
import { mergeClasses } from '../../../utils/class-name-utils';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
  className?: string;
  children: React.ReactElement;
}

const defaultAttributes = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  'aria-hidden': 'true',
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = 16,
      strokeWidth = 1.3,
      className = '',
      children,
      viewBox,
      ...props
    },
    ref
  ) => {
    return createElement(
      'svg',
      {
        ref,
        ...defaultAttributes,
        viewBox,
        width: size,
        height: size,
        stroke: 'currentColor',
        strokeWidth,
        className: mergeClasses('inline-block', className),
        ...props,
      },
      children
    );
  }
);

Icon.displayName = 'Icon';
