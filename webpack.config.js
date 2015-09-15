module.exports = {
    context: __dirname + '/app',
    entry: {
        javascript: './app.js',
        html: './index.html',
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/dist',
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: [/node_modules/, /dist/],
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader'],
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]',
        }],
    },
}
