import addShebang from 'rollup-plugin-add-shebang';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.esm.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [typescript(), terser()]
  },
  {
    input: 'bin/index.ts',
    output: [
      {
        file: 'lib/bin/index.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      typescript({ tsconfig: 'bin/tsconfig.json' }),
      terser(),
      addShebang({ include: 'lib/bin/index.js' })
    ]
  }
];
