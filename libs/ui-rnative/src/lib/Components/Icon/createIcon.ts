import React, { forwardRef } from 'react';
import { Svg, SvgProps } from 'react-native-svg';
import { toPascalCase } from '../../utils';
import { Icon } from './Icon';
import { IconProps } from './Icon.types';

/**
 * Create an Icon component for React Native
 * @param {string} iconName - The name of the icon
 * @param {React.ReactElement} iconJsx - The JSX content of the icon (SVG paths/elements)
 * @returns {ForwardRefExoticComponent} Icon component
 */
const createIcon = (
  iconName: string,
  iconJsx: React.ReactElement<SvgProps>,
) => {
  const Component = forwardRef<Svg, Omit<IconProps, 'children'>>(
    ({ className, ...props }, ref) =>
      React.createElement(Icon, {
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
