const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.js');

const prodConfig = {
    mode: 'production',
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
    devtool: 'nosources-source-map',
    plugins: [
        new CleanWebpackPlugin(),

    ],
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom"
        }
    },
};

module.exports = merge(prodConfig, baseConfig);
