import { TypographyTokensByBreakpoint } from '../types';
import { typographyLgTokens } from './typography.lg';
import { typographyMdTokens } from './typography.md';
import { typographySmTokens } from './typography.sm';
import { typographyXlTokens } from './typography.xl';

export const typographyTokens = {
  sm: typographySmTokens,
  md: typographyMdTokens,
  lg: typographyLgTokens,
  xl: typographyXlTokens,
} satisfies TypographyTokensByBreakpoint;
