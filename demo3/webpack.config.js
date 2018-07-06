module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].[hash:10].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 1%', 'last 2 versions', 'not dead']
                            }
                        }]
                    ]
                }
            },
            exclude: '/node_modules/'
        }]
    }
}