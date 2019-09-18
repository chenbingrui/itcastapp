const path = require('path')
    //在内存中,根据指定的模板页面,生成一份内存中的首页,同时把打包好的bundle.js注入到index.html中
var htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'), //入口文件
    output: { //输出文件
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件地址
            filename: 'index.html' //设置生成的内存页面名称

        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [ //配置所有第三方模块
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //处理css文件
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //处理less
            { test: /\.(jpg|png|jpeg|gif|bmp)/, use: 'url-loader?limit=603&name=[name].[ext]' }, //如果只有一个loader,直接字符串
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, //处理字体文件
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' } //处理vue文件loader
        ]
    },
    resolve: {
        alias: { //设置 或者修改导入 vue时候的包的路径
            // 'vue$': 'vue/dist/vue.js'
        }
    }
}