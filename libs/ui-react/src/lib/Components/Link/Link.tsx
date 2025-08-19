import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@ldls/utils-shared';
import { IconSize } from '../Icon/Icon';
import { Slot } from '@radix-ui/react-slot';
import { ExternalLink } from '../../Symbols';

const linkVariants = cva(
  'inline-flex w-fit max-w-full items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus',
  {
    variants: {
      appearance: {
        underlined:
          'text-base underline underline-offset-2 hover:text-base-hover active:text-base-pressed',
        accent:
          'text-interactive hover:text-interactive-hover active:text-interactive-pressed',
      },
      size: {
        sm: 'gap-4 body-2-semi-bold',
        md: 'gap-8 body-1-semi-bold',
      },
    },
    defaultVariants: {
      appearance: 'underlined',
      size: 'md',
    },
  },
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  isExternal?: boolean;
  asChild?: boolean;
  children: React.ReactNode; // Children are required
}

/**
 * A customizable link component that supports underlined text and accent button-like appearances, sizes, optional icons, and external link handling.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {'underlined' | 'accent'} [appearance='underlined'] - The visual style of the link (text underlined or button-like).
 * @param {'sm' | 'md'} [size='md'] - The size variant of the link.
 * @param {React.ComponentType<{ size?: IconSize; className?: string }>} [icon] - An optional icon component to render inside the link.
 *   The icon styles are defined by the link. Please do not override them.
 * @param {boolean} [isExternal=false] - If true, adds target="_blank" and rel="noopener noreferrer" for external links.
 * @param {boolean} [asChild=false] - If true, renders the child element directly with link styles instead of wrapping in an anchor element.
 *   Useful for creating router links or other semantic elements with link appearance.
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance - use the `appearance` prop instead.
 * @param {React.ReactNode} [children] - The link's content, typically text.
 * @param {React.AnchorHTMLAttributes<HTMLAnchorElement>} [...] - All standard anchor props (e.g., `href`, `onClick` etc.).
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the link's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { Link } from '@ldls/ui-react';
 *
 * // Basic underlined link
 * <Link appearance="underlined" size="md" href="/page">
 *   Go to Page
 * </Link>
 *
 * // Accent button-like link with icon
 * import { ArrowRight } from '@ldls/ui-react/symbols';
 *
 * <Link appearance="accent" size="sm" href="https://example.com" isExternal icon={ArrowRight}>
 *   External Site
 * </Link>
 *
 * // Link as a router link (asChild pattern)
 * import { Link as RouterLink } from 'react-router-dom';
 *
 * <Link asChild appearance="underlined" size="md">
 *   <RouterLink to="/dashboard">Dashboard</RouterLink>
 * </Link>
 *
 * // Note: When using asChild, the child element is responsible for its own content.
 * // Icons and other Link props like 'icon' are ignored when asChild is true - handle these in the child if needed.
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      children,
      appearance,
      size = 'md',
      icon,
      isExternal = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const iconSizeMap: { [key: string]: IconSize } = {
      sm: 16,
      md: 20,
    };

    const calculatedIconSize = size ? iconSizeMap[size] : 20;
    const IconComponent = icon;

    const Comp = asChild ? Slot : 'a';

    return (
      <Comp
        ref={ref}
        className={cn(
          className,
          linkVariants({
            appearance,
            size,
          }),
        )}
        target={isExternal && !asChild ? '_blank' : undefined}
        rel={isExternal && !asChild ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {IconComponent && (
              <IconComponent
                size={calculatedIconSize}
                className="flex-shrink-0"
              />
            )}
            {children && <span className="min-w-0 truncate">{children}</span>}
            {isExternal && (
              <ExternalLink
                size={calculatedIconSize}
                className="flex-shrink-0"
              />
            )}
          </>
        )}
      </Comp>
    );
  },
);
Link.displayName = 'Link';
