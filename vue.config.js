const CompressionWebpackPlugin = require("compression-webpack-plugin")
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    devServer: {
        port: 4000
    },
    publicPath: '/',
    productionSourceMap: !isProduction,  //  打包时设为false
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'Jvmm Web Manager'
            return args
        })
    },
    configureWebpack: config => {
        if (isProduction) {
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: /\.(js|html|json|css)$/,
                threshold: 10240,
                minRatio: 0.8,
                deleteOriginalAssets: true
            }))
        }

        config.module.rules.push({
            test: /\.s(c|a)ss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    // Requires sass-loader@^7.0.0
                    options: {
                        implementation: require('sass'),
                        fiber: require('fibers'),
                        indentedSyntax: true // optional
                    }
                },
            ],
        })
    }
}