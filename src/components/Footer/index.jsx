
import React, { memo } from 'react';
import "./style.less"



const Footer = () => {
    return (
        <div className="footer">
            <div>系统由 React+Node+Ant Desgin驱动 </div>
            <div>JSPang.com</div>
        </div>
    )


}



export default memo(Footer)