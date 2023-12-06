import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.esm.js',
      format: 'esm',
      sourcemap: true,
    }
  ],
  plugins: [typescript(), terser()]
};
