import React, { memo, useState, useEffect } from 'react';
import "./style.less"
import { Row, Col, List, Breadcrumb } from "antd"
import Header from "@components/Header"
import Author from "@components/Author"
import Advert from "@components/Advert"
import Footer from "@components/Footer"
import { SettingOutlined, FieldTimeOutlined } from '@ant-design/icons';
import api from "@services"


const MyList = (props) => {

    const [mylist, setMylist] = useState([])
    useEffect(() => {
        const { location } = props;
        let mylistParams;
        if (location.state && location.state.params) {//判断当前有参数
            mylistParams = location.state.params;
            sessionStorage.setItem('mylistParams', JSON.stringify(mylistParams));// 存入到sessionStorage中
        } else {
            mylistParams = JSON.parse(sessionStorage.getItem('mylistParams'));// 当state没有参数时，取sessionStorage中的参数
        }
        console.log(mylistParams.id)
        api.mylist.getListById({
            id: mylistParams.id
        }).then(res => {
            console.log(res)
            setMylist([...mylist,...res.data])

        })


    }, [])


    return (
        <div className="home">
            <header>
                Home
            </header>
            <Header></Header>
            <Row className="comm-main" type="flex" justify="center" >
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >
                    <div className="bread-box">

                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href="/">首页</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                视频教程
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={mylist}
                        renderItem={item => (
                            <List.Item>
                                <div className="list-title">{item.title}</div>
                                <div className="list-icon">
                                    <span>
                                        <SettingOutlined />
                                        {item.addTime}
                                    </span>
                                    <span>
                                        <FieldTimeOutlined />
                                        {item.typeName}
                                    </span>
                                    <span>
                                        <SettingOutlined />
                                        {item.view_count}
                                    </span>
                                </div>
                                <div className="list-context">{item.introduce}</div>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} >
                    <Author></Author>
                    <Advert></Advert>
                </Col>
            </Row>

            <Footer></Footer>
        </div>


    )

}



export default memo(MyList)

