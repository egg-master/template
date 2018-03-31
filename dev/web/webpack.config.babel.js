import path from 'path'
import webpack from 'webpack'

module.exports = [{
    entry: {
        app: './src/app.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            enforce: 'post',
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        }]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    devServer: {
        contentBase: '.'
    },
    devtool: 'source-map'
}]