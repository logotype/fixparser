const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        dashboard: './src/ApplicationRenderer.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{ loader: 'babel-loader' }],
                exclude: /node_modules/
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.jpg$|\.gif$|\.png$|\.mp4$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.eot$|\.ico$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './dashboard.css',
        }),
    ],
    context: __dirname,
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 8090,
        contentBase: __dirname,
        overlay: {
            warnings: false,
            errors: true
        },
        quiet: false,
        noInfo: false
    }
};
