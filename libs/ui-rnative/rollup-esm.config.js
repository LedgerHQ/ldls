const { withNx } = require('@nx/rollup/with-nx');

export default withNx({
  main: './src/index.ts',
  outputPath: './dist',
  tsConfig: './tsconfig.lib.json',
  format: ['esm'],
  sourceMap: true,
});
