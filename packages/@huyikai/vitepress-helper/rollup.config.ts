import addShebang from 'rollup-plugin-add-shebang';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const replaceVersion = () => {
  const packageJson = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8')
  );
  const version = packageJson.version;

  return {
    name: 'replace-version',
    transform(code, id) {
      if (id.endsWith('create.ts')) {
        return code.replace(
          /const packageVersion = '[^']*'/,
          `const packageVersion = '${version}'`
        );
      }
      return null;
    }
  };
};

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
      replaceVersion(),
      typescript(),
      terser(),
      addShebang({ include: 'lib/bin/index.js' })
    ]
  }
];
