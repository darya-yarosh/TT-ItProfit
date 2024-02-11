const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['', '.js'],
        modules: [__dirname, 'node_modules']
    },
    entry: {
        main: path.resolve(__dirname, './client/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Itprofit - Training task by Yarosh D.S.',
            template: path.resolve(__dirname, './client/index.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            // CSS, SASS
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // SVG
            {
                test: /\.svg$/,
                use: ['file-loader'],
            }
        ],
    },
};