const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js' //entryのファイル名が入る
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only", //コメントが冗長なので、エラーだけをlogに出力
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'yeah template',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'yeah ×2 template',
            hash: true,
            filename: 'contact.html',
            template: './src/contact.html'
        }),
        new ExtractTextPlugin({
            filename: "app.css",
            disable: false,
            allChunks: true
        })
    ]
};