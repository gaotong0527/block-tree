const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const devConfig = {
    mode: 'development',
    entry: path.join(__dirname, "../src/index.js"),
    output: {
        path: path.join(__dirname, "../lib/"),
        filename: "index.js",
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.css$/,
                exclude: /\.min\.css$/,
                use: ['less-loader', 'css-loader?modules'],
            },
            {
                test: /\.min\.css$/,
                use: ['less-loader', 'css-loader?modules'],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),

    ],
    devtool: 'eval-cheap-module-source-map',
    target: 'web',
};
module.exports = merge(devConfig, baseConfig);
