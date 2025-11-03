import { cn } from '@ledgerhq/ldls-utils-shared';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { ExternalLink } from '../../Symbols';
import { IconSize } from '../Icon/Icon';

const linkVariants = cva(
  'focus-visible:outline-focus inline-flex w-fit max-w-full items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-4',
  {
    variants: {
      appearance: {
        underlined:
          'hover:text-base-hover active:text-base-pressed text-base underline underline-offset-2',
        accent:
          'text-interactive hover:text-interactive-hover active:text-interactive-pressed',
      },
      size: {
        sm: 'body-2-semi-bold gap-4',
        md: 'body-1-semi-bold gap-8',
      },
    },
    defaultVariants: {
      appearance: 'underlined',
      size: 'md',
    },
  },
);

export type LinkProps = {
  /**
   * The visual style of the link.
   * @default underlined
   */
  appearance?: 'underlined' | 'accent';
  /**
   * The size variant of the link.
   * @default md
   */
  size?: 'sm' | 'md';
  /**
   * An optional icon component to render inside the link.
   * The icon styles are defined by the link. Please do not override them.
   */
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * If true, adds target="_blank" and rel="noopener noreferrer" for external links.
   * @default false
   */
  isExternal?: boolean;
  /**
   * If true, renders the child element directly with link styles instead of wrapping in an anchor element.
   * Useful for creating router links or other semantic elements with link appearance.
   * @default false
   */
  asChild?: boolean;
  /**
   * The link's content, typically text.
   */
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants>;

/**
 * A customizable link component that supports underlined text and accent button-like appearances, sizes, optional icons, and external link handling.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the link's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { Link } from '@ledgerhq/ldls-ui-react';
 *
 * // Basic underlined link
 * <Link appearance="underlined" size="md" href="/page">
 *   Go to Page
 * </Link>
 *
 * // Accent button-like link with icon
 * import { ArrowRight } from '@ledgerhq/ldls-ui-react/symbols';
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
              <IconComponent size={calculatedIconSize} className='shrink-0' />
            )}
            <span className='min-w-0 truncate'>{children}</span>
            {isExternal && (
              <>
                <ExternalLink
                  size={calculatedIconSize}
                  className='shrink-0'
                  aria-hidden='true'
                />
                <span className='sr-only'>(opens in a new tab)</span>
              </>
            )}
          </>
        )}
      </Comp>
    );
  },
);
Link.displayName = 'Link';
