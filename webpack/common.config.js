const path = require('path');
//const autoprefixer = require('autoprefixer');
//const postcssImport = require('postcss-import');
const { merge } = require('webpack-merge')

const dev  = require('./dev.config');
const prod = require('./prod.config');

require('@babel/polyfill').default;

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../dist'),
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: [
        PATHS.app,
    ],

    output: {
        path: PATHS.build,
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json', '.scss'],
        modules: [PATHS.app, 'node_modules'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    },

}

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(dev, common);
}

if (TARGET === 'build' || !TARGET) {
    module.exports = merge(prod, common);
}

