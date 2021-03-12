import typescript from "@rollup/plugin-typescript";

const input = "src/dllo.ts";

const plugins = [
    typescript({tsconfig: "./tsconfig.json"})
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