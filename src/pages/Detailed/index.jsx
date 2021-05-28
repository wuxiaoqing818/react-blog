
import React, { memo, useState, useEffect, useRef } from 'react';
import "./style.less"
import {
    useParams
} from "react-router-dom";
import { Row, Col, Breadcrumb, Affix } from "antd"
import { SettingOutlined, FieldTimeOutlined } from '@ant-design/icons';
import Header from "@components/Header"
import Author from "@components/Author"
import Advert from "@components/Advert"
import Footer from "@components/Footer"
import ReactMarkdown from "react-markdown"
import MarkNav from "markdown-navbar"
import "markdown-navbar/dist/navbar.css"
import api from "@services"

import marked from "marked"
import hljs from "highlight.js"
import "highlight.js/styles/monokai-sublime.css"

import Tocify from '@components/tocify'







const Detailed = (props) => {

    
    // const [detailedInfo, setDetailedInfo] = useState({})
    const [detailedInfo, setDetailedInfo] = useState({});
    const [html, setHtml] = useState('')
    const [markedDownStr, setMarkDownStr] = useState('')


    const tocify = new Tocify()
    const renderer = new marked.Renderer()
    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    })



    useEffect(() => {
        console.log(props)
        const { location } = props;
        let detailedParams;
        if (location.state && location.state.detailedParams) {//判断当前有参数
            detailedParams = location.state.detailedParams;
            sessionStorage.setItem('detailedParams', JSON.stringify(detailedParams));// 存入到sessionStorage中
        } else {
            detailedParams = JSON.parse(sessionStorage.getItem('detailedParams'));// 当state没有参数时，取sessionStorage中的参数
        }
        console.log(detailedParams.id)
        api.detailed.getDetailedInfo({ id: detailedParams.id }).then(res => {
            console.log(res)
            setDetailedInfo(res.data[0])
            // setHtml(marked(res.data[0].article_content))
            setHtml(res.data[0].article_content)
            setMarkDownStr(res.data[0].article_content)
        })
    }, [html])
    return (
        <div className="detailed">
            <Header></Header>
            <Row className="comm-main" type="flex" justify="center" >
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >
                    <div>
                        <div className="bread-box">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <a href="/">首页</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    视频列表
                            </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    xxx
                            </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className="detailed-title">
                                React实战技术教程
                            </div>
                            <div className="list-icon center">
                                <span>
                                    <SettingOutlined />2021-06-28
                                </span>
                                <span>
                                    <SettingOutlined />视频教程
                                </span>
                                <span>
                                    <SettingOutlined />5498人
                                </span>

                            </div>
                            <div className="detailed-content"
                                // dangerouslySetInnerHTML={{ __html: html }}


                            >
                                <ReactMarkdown
                                    children={html}
                                    escapeHtml={false}
                                />



                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} >
                    <Author></Author>
                    <Advert></Advert>
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            {/* <MarkNav
                                className="article-menu"
                                source={markedDownStr}
                                ordered={true}
                            /> */}

                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    )
}

export default memo(Detailed)
