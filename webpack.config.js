const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("dotenv").config();

const isDev = process.env.ENV === "development";

const entry = ["./src/frontend/index.js"];

if (isDev) {
    entry.push(
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true"
    );
}

module.exports = {
    entry,
    mode: process.env.ENV,
    output: {
        path: path.join(__dirname, 'src/public'),
        filename: isDev ? 'bundle.js' : 'bundle-[hash].js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
         {  
            enforce: "pre",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
     contentBase: './src/public',
    },
    plugins: [
        isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};