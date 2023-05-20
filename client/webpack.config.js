const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        compress: true,
        port: 3001,
    },
}