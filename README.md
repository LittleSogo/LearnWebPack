# 学习 webpack 的一些例子

## 阅读书籍

```txt
暂无
```

## demo 说明

```txt
demo1：简单介绍webpack的一些使用
demo2：实际打包一个js文件
demo3：利用babel打包es6，es7的代码,配置babel
demo4：配置typescript，打包下载类型文件，然后编译时提醒报错
demo5：提取公用代码,减少代码冗余，将共同引用的代码，抽取出来，利用CommonsChunkPlugin,webpack.optimize.CommonsChunkPlugin（3.*）已经被删除，需要用config.optimization.splitChunks（4.*）代替,不再是插件的形式，webpack4.0版本与webpack3.x版本做了一些变更
demo6：
```

## webpack 相关用法

```shell
webpack -h  查看所有命令行
webpack -v  查看版本信息
webpack --config <config>  指定运行的config文件
webpack <entry> <output> 命令行打包
webpack-cli --entry "./app.js" --output "./bundle.js" --mode "development"
webpack --mode "development"
webpack "./app.js" --mode "none"  默认打包到dist目录下的main.js
npm -g install webpack-cli  安装webpack-cli
webpack-cli -h
webpack-cli init demo2  初始化一个webpack项目，交互式的
webpack-cli migrate <config>  迁移项目文件用，将一版本的配置文件转化为二版本的，但是需要手动调整文件依赖
```

## 开发工具

VSCode
