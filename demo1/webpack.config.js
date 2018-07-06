module.exports = {
    entry: {
        index: ['index.js', 'app.js'],
        vendor: 'vendor.js'
    }
}

// 指定多个入口
module.exports = {
    entry: {
        index: ['index.js', 'vendor.js']
    }
}

// 指定output,name就是对应的entry的name
module.exports = {
    entry: {
        index: ['index.js', 'vendor.js']
    },
    output: {
        filename: '[name].min.[hash:5].js'
    }
}

// 指定loader,解析编译不同的文件，用于识别文件
// 编译相关：babel-loader，ts-loader
// 样式相关：css-loader，style-loader，less-loader，postcss-loader
// 文件相关：file-loader，url-loader
module.exports = {
    module: {
        rules: {
            test: /\.css$/,
            use: 'css-loader'
        }
    }
}

// 插件,参与整个打包过程，配置编译时变量，打包优化，压缩
// 常用插件：
// 优化相关：CommonsChunkPlungin(提取不同代码块),UglifyJsWebpackPlugin(丑化js代码)
// 功能相关：ExtractTextWebpackPlungin,HtmlWebpackPlungin(帮助生成html),HotModuleReplacementPlungin,CopyWebpackPlungin(负责拷贝静态文件或者打包好的模块)

const webpack = require('webpack');
module.exports = {
    plungins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}