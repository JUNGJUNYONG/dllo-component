import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
const input = "src/dllo.ts";

const plugins = [
    typescript({tsconfig: "./tsconfig.json"}),
    postcss({
        extract: false,
        modules: true,
        use: ['css'],
    })
];

export default [
    {
        input,
        plugins,
        output: {
            file: 'dist/dllo.js',
            format: "esm",
            sourcemap: true,
        }
        // external,
    }
];