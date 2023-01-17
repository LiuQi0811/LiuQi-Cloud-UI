'use strict'
const path = require('path')

// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
module.exports = {
    // webpack-dev-server 相关配置
    configureWebpack: {
        resolve: {
          alias: {
            '@': resolve('src')
          }
        },
        plugins: [
          // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
          new CompressionPlugin({
            cache: false,                   // 不启用文件缓存
            test: /\.(js|css|html)?$/i,     // 压缩文件格式
            filename: '[path].gz[query]',   // 压缩后的文件名
            algorithm: 'gzip',              // 使用gzip压缩
            minRatio: 0.8                   // 压缩率小于1才会压缩
          })
        ],
      }
    
}