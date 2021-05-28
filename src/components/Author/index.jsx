
import React, { memo, useState } from 'react';
import "./style.less"
import { Avatar, Divider } from "antd"
import { GithubFilled, QqCircleFilled, WechatFilled } from '@ant-design/icons';







const Author = () => {
    return (
        <div className="author">
            <div className="author-div comm-box">
                <div>
                    <Avatar size={100} src={require("../../assets/img/avatar.jpg").default} />
                    <div className="author-introdution">
                        只会吹牛逼的菜鸡前端日哥
                        <Divider>社交账号</Divider>
                        <Avatar size={28} icon={<GithubFilled style={{ color: 'green' }} />} className="account" />
                        <Avatar size={28} icon={<QqCircleFilled style={{ color: 'green' }} />} className="account" />
                        <Avatar size={28} icon={<WechatFilled style={{ color: 'green' }} />} className="account" />

                    </div>
                </div>
            </div>
        </div>
    )


}



export default memo(Author)
