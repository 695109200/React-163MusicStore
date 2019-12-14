import React, { Component } from 'react';
import './TopNav.css'
class TopNav extends Component {
    render() {
        return (
            <div>
                <div className="topNav">
                    <div className="topNavBox">
                        <a href="javascript:;"><div className="topNavBoxIcon"></div></a>

                    <div className="avatarBox">
                        <img src="http://p3.music.126.net/gyoekwwpfuRpRvJwasP4jw==/109951163669765335.jpg?param=36y36" className="avatar"></img>
                        <div className="bottonIcon"></div>
                        <div className="hiddenLi">
                            <ul>
                                <li><img src="https://s2.music.126.net/store/web/img/myorder.png?ce189fbe4dd6b7e49e2947dc437272ac" className="li1"></img>我的订单</li>
                                <li><img src="https://s2.music.126.net/store/web/img/myorder.png?ce189fbe4dd6b7e49e2947dc437272ac" className="li1"></img>我的优惠卷</li>
                                <li><img src="https://s2.music.126.net/store/web/img/myorder.png?ce189fbe4dd6b7e49e2947dc437272ac" className="li1"></img>我的收货地址</li>
                                <li><img src="https://s2.music.126.net/store/web/img/myorder.png?ce189fbe4dd6b7e49e2947dc437272ac" className="li1"></img>网易云音乐首页</li>
                                <li>退出</li>
                            </ul>
                        </div>
                    </div>


                        <div className="shopCartIcon">
                            <div className="shopCarL">
                                0
                            </div>
                        </div>
                        <div className="topNavSearchBox">
                            <from>
                                <div className='SearchBox'>
                                    <input className="search">
                                    </input>
                                </div>
                            </from>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default TopNav;