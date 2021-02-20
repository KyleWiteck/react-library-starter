import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import progress from 'rollup-plugin-progress'
import scss from 'rollup-plugin-scss'
import packageJson from './package.json'
import includePaths from 'rollup-plugin-includepaths'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            paths: (id) => id,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
            paths: (id) => id,
        },
    ],
    external: (id) => id.indexOf('node_modules') >= 0,
    plugins: [
        progress(),
        peerDepsExternal(),
        resolve(),
        commonjs({
            include: ['node_modules/**'],
            exclude: [
                'src/**/*.test.tsx',
                'src/**/**/*.test.tsx',
                'src/**/**/**/*.test.tsx',
            ],
        }),
        includePaths({ paths: ['./'] }),
        scss({ output: false }),
        typescript({
            useTsconfigDeclarationDir: true,
            exclude: [
                'src/**/*.test.tsx',
                'src/**/**/*.test.tsx',
                'src/**/**/**/*.test.tsx',
                'src/**/*.stories.tsx',
                'src/**/**/*.stories.tsx',
                'src/**/**/**/*.stories.tsx',
            ],
            tsconfigDefaults: {
                compilerOptions: {
                    plugins: [
                        { transform: 'typescript-transform-paths' },
                        {
                            transform: 'typescript-transform-paths',
                            afterDeclarations: true,
                        },
                    ],
                },
            },
        }),
        json({
            compact: true,
        }),
    ],
    external: ['react', 'react-dom', 'prop-types'],
}
