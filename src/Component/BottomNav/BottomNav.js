import React, { Component } from 'react';
import './BottomNav.css'
class BottomNav extends Component {
    render() {
        return (
            <div className="BottomNavBox">
                <div className="BottoMainBox">
                    <div className="copy">
                        <p className="copyTxt1">
                            <a>关于网易</a>
                            <span className="line">|</span>
                            <a>客户服务</a>
                            <span className="line">|</span>

                            <a>服务条款</a>
                            <span className="line">|</span>

                            <a>网站导航</a>
                            <span className="line">|</span>
                            <a>意见反馈</a>
                        </p>
                        <p className="copyTxt2">
                            <span>网易公司版权所有©1997-2019</span>
                            <a>杭州乐读科技有限公司运营：浙网文[2015] 0415-135号</a>
                        </p>
                    </div>
                    <div className="enter">
                        <ul>
                            <li><a className="enterIcon"></a></li>
                            <li><a className="enterIcon2"></a></li>
                            <li><a className="enterIcon3"></a></li>
                            <li><a className="enterIcon4"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default BottomNav;