import { createElement, forwardRef, SVGProps } from 'react';
import { Icon, IconProps } from './Icon';
import { toPascalCase } from '@ledgerhq/ldls-utils-shared';

/**
 * Create an Icon component
 * @param {string} iconName - The name of the icon
 * @param {React.ReactElement} iconJsx - The JSX content of the icon
 * @returns {ForwardRefExoticComponent} Icon component
 */
const createIcon = (
  iconName: string,
  iconJsx: React.ReactElement<SVGProps<SVGSVGElement>>,
) => {
  const Component = forwardRef<SVGSVGElement, Omit<IconProps, 'children'>>(
    ({ className, ...props }, ref) =>
      createElement(Icon, {
        ref,
        className,
        viewBox: iconJsx.props.viewBox,
        ...props,
        children: iconJsx.props.children,
      }),
  );

  Component.displayName = toPascalCase(iconName);

  return Component;
};

export default createIcon;
