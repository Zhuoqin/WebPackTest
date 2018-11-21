module.exports = [
    {
        entry: './main.ts',
        mode: "production",
        output: {
            filename: '../../js/main.js',
            libraryTarget: "this",
        },
        resolve: {
            extensions: ['.webpack.js', '.web.js', '.ts', '.js']
        },
        externals: {
            "jquery": "jQuery"
        },
        module: {
            rules: [
                {test: /\.ts$/, loader: 'ts-loader'}
            ]
        }
    }
];