import path from 'path';

import webpack from 'webpack';
import yargs from 'yargs';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

const commonConfig = {
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    externals: [],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': JSON.stringify(nodeEnv) }
        })
    ],
    devtool: optimizeMinimize ? 'source-map' : false
};

const nodeConfig = Object.assign({}, commonConfig, {
    entry: {
        'FIXParser': './src/FIXParser.js'
    },
    output: {
        path: path.join(__dirname),
        filename: 'fixparser.js',
        library: 'FIXParser',
        libraryTarget: 'umd'
    },
    target: 'node'
});

const serverConfig = Object.assign({}, commonConfig, {
    entry: {
        'FIXParser': './src/FIXServer.js'
    },
    output: {
        path: path.join(__dirname),
        filename: 'server.js',
        library: 'FIXParser',
        libraryTarget: 'umd'
    },
    target: 'node'
});

const browserConfig = Object.assign({}, commonConfig, {
    entry: {
        'FIXParser': './src/FIXParserBrowser.js'
    },
    output: {
        path: path.join(__dirname),
        filename: 'browser.js',
        library: 'FIXParser',
        libraryTarget: 'umd'
    },
    target: 'web'
});

export default [ nodeConfig, serverConfig, browserConfig ];
