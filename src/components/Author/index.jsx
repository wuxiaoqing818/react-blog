
import React, { memo, useState } from 'react';
import "./style.less"
import { Avatar, Divider } from "antd"
import { GithubFilled, QqCircleFilled, WechatFilled } from '@ant-design/icons';







const Author = () => {
    return (
        <div className="author">
            <div className="author-div comm-box">
                <div>
                    <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" />
                    <div className="author-introdution">
                        光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
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
