# utils-shared

Shared utility functions for the Lumen design system.

## Contributing

### Adding New Utilities

1. Create your utility function in `src/lib/`
2. Export it from `src/index.ts`
3. Add tests in the corresponding `.spec.ts` file
4. Update this README with usage examples

### Development Commands

```bash
# Build the library
npx nx build @ledgerhq/lumen-utils-shared

# Run tests
npx nx test @ledgerhq/lumen-utils-shared

# Lint code
npx nx lint @ledgerhq/lumen-utils-shared
```

### Guidelines

- Keep utilities pure and side-effect free
- Add comprehensive tests for all functions
- Use TypeScript for type safety
- Follow existing naming conventions
