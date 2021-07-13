
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        //后缀名自动补全，引入时可不必写后缀名
        extensions: [".ts", ".tsx", ".js", ".jsx", ".less", ".css"]
    }
};
