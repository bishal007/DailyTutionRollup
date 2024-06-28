import css from 'rollup-plugin-css-only';
export default  {
    input: 'src/main.js',
    // for multiple files
    // output: [{ 
    //     file: 'build/bundle.js',
    //     format: 'cjs',
    //     inlineDynamicImports: true
    // },{
    //     file: 'dist/bundle-b2.js',
    //     format: 'es'
    // }],
    output: {
        file: 'build/bundle.js',
        format: 'cjs',
        inlineDynamicImports: true
    },
    plugins: [css({ output: 'bundle1.css' })]
}