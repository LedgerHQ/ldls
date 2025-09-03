import React from 'react';
import { BaseInput, type BaseInputProps } from '../Input/BaseInput';
import { Search as SearchIcon } from '../../Symbols';

export interface SearchProps extends Omit<BaseInputProps, 'prefix' | 'label'> {}

/**
 * A search input component with a built-in search icon and automatic clear button.
 * Built on top of BaseInput but without labels for better search UX.
 *
 * ## Key Features
 * - **Search icon prefix** automatically positioned on the left (fixed 20px size, muted color)
 * - **Automatic clear button** appears when input has content (unless hideClearButton is true)
 * - **No label** - uses placeholder text for better search UX
 * - **Error state styling** with aria-invalid and errorMessage support
 * - **All BaseInput features** including suffix elements, controlled/uncontrolled modes
 *
 * ## Design System Compliance
 * Matches the design system specifications:
 * - Search icon positioned on the left (fixed 20px size with muted color)
 * - Clear button on the right when typing (using BaseInput's built-in clear functionality)
 * - Proper focus, hover, and active states
 * - Consistent spacing and typography
 *
 * @example
 * // Basic search input
 * <Search
 *   placeholder="Search"
 *   value={query}
 *   onChange={(e) => setQuery(e.target.value)}
 * />
 *
 * @example
 * // Search with error handling
 * <Search
 *   placeholder="Search products"
 *   value={searchTerm}
 *   onChange={(e) => setSearchTerm(e.target.value)}
 *   errorMessage={error}
 *   aria-invalid={!!error}
 * />
 *
 * @example
 * // Search with custom clear behavior
 * <Search
 *   placeholder="Search users"
 *   value={userQuery}
 *   onChange={(e) => setUserQuery(e.target.value)}
 *   onClear={() => {
 *     analytics.track('search_cleared');
 *     setUserQuery('');
 *   }}
 * />
 */
export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (props, ref) => {
    const searchIcon = (
      <SearchIcon
        size={20}
        className="text-muted group-has-[:disabled]:text-disabled"
        aria-hidden="true"
      />
    );

    return <BaseInput ref={ref} prefix={searchIcon} {...props} />;
  },
);

Search.displayName = 'Search';
