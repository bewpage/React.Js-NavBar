var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: "./js/app.jsx"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        port: 3001
    },
    output: {
        filename: "./js/out.js",
        path: path.resolve(__dirname, 'js')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};