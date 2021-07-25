/*
 * @Author: 吴晓晴
 * @Date: 2021-06-03 22:53:32
 * @LastEditTime: 2021-07-25 17:22:12
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\wxq-blog\src\config\config.js
 */
/*
 * @Author: 吴晓晴
 * @Date: 2021-06-03 22:48:56
 * @LastEditTime: 2021-06-03 22:48:57
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\admin\src\config\config.js
 */
/*
 * @Author: 吴晓晴
 * @Date: 2021-05-23 13:52:20
 * @LastEditTime: 2021-06-02 22:20:29
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\wxq-blog\src\config\config.js
 */
let baseUrl;
let configUrl = "http://127.0.0.1:7001"
let devUrl = '/api'
if (process.env.NODE_ENV == 'development') {
    baseUrl = devUrl;
} else if (process.env.NODE_ENV == 'debug') {
    baseUrl = '';
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'http://www.aqingi.cn:7001';
}
let config = {
    baseUrl,
    configUrl
};
export default config;