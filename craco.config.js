/*
 * @Author: 吴晓晴
 * @Date: 2021-05-19 22:21:05
 * @LastEditTime: 2021-05-19 23:27:19
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\wxq-blog\craco.config.js
 */
// const path = require("path");

// const resolve = dir => path.resolve(__dirname, dir);

// module.exports = {
//   webpack: {
//     alias: {
//       "@": resolve("src"),
//       "@components": resolve("src/components"),
//       "@assets": resolve("src/assets"),
//       "@common": resolve("src/common"),
//       "@pages": resolve("src/pages"),
//       "@router": resolve("src/router"),
//       "@services": resolve("src/services"),
//       "@store": resolve("src/store")
//     }
//   }
// }

//less
const CracoLessPlugin = require('craco-less');

// 别名
const path = require("path")
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {

  plugins: [
    //less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },





  ],
  //别名
  webpack: {
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@assets': resolve('src/assets'),
      '@pages': resolve('src/pages'),

    }
  }

};
