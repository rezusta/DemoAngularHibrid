const webpack = require('webpack');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
    entry: {
        'polyfills': './public/polyfills.ts',
        'vendor': './public/vendor.ts',
        'ng1' : './public/index.ts',
        'app' : './public/main.ts'
    },

    output: {
        path: helpers.root('dist/dev'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                          esModule: false
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            minChunks: Infinity
        }),
        new webpack.SourceMapDevToolPlugin({
            "filename": "[file].map[query]",
            "moduleFilenameTemplate": "[resource-path]",
            "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
            "sourceRoot": "webpack:///"
        }),
        new HtmlWebpackPlugin({
            template: 'config/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'),
            {}
        )
    ]
}