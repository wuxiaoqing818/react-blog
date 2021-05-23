import React from 'react'
import './style.less'
import { Row, Col, Menu, Divider } from "antd"
import { SettingOutlined } from '@ant-design/icons';


const Header = () => (
    <div className="header">
        <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header-logo">吴晓晴</span>
                <span className="header-txt">专注前端开发，喜欢和小姐姐一起学习。</span>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <Menu mode="horizontal">
                    <Menu.Item key="home" icon={<SettingOutlined />}>
                        首页
                   </Menu.Item>
                    <Menu.Item key="video" icon={<SettingOutlined />}>

                        电影
                    </Menu.Item>
                    <Menu.Item key="life" icon={<SettingOutlined />}>

                        生活
                    </Menu.Item>
                </Menu>
            </Col>

        </Row>

    </div>

)


export default Header