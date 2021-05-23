/*
 * @Author: 吴晓晴
 * @Date: 2021-05-23 13:53:19
 * @LastEditTime: 2021-05-23 14:13:40
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\wxq-blog\src\services\home.js
 */
import {post,get} from "../config/axios"


//请求方式
const getDetailedInfo = data=> get('/default/getArticleById/'+data.id,{});


export default{
    getDetailedInfo
}