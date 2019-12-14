import React, { Component } from 'react';
import './TopNav.css'
class TopNav extends Component {
    render() {
        return (
                <div className="topNav">
                    <div className="topNavBox">
                        <a href="javascript:;"><div className="topNavBoxIcon"></div></a>

                    <div className="avatarBox">
                        <img src="http://p3.music.126.net/gyoekwwpfuRpRvJwasP4jw==/109951163669765335.jpg?param=36y36" className="avatar"></img>
                        <div className="bottonIcon"></div>


                        <div className="hiddenLi">
                            {/* <ul>
                                <li><div className="li1"></div>我的订单</li>
                                <li><div  className="li1"></div>我的优惠卷</li>
                                <li><div  className="li1"></div>我的收货地址</li>
                                <li><div  className="li1"></div>网易云音乐首页</li>
                                <li><div  className="li1"></div>退出</li>
                            </ul> */}

                            <div className="li1"><div className="liIcon liI"></div>我的订单</div>
                            <div className="li1"><div className="liIcon2 liI"></div>我的优惠卷</div>
                            <div className="li1"><div className="liIcon3 liI"></div>我的收货地址</div>
                            <div className="li1"><div className="liIcon4 liI"></div>网易云音乐首页</div>
                            <div className="li2"><div className="liIcon5 liI2"></div>退出</div>
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
        );
    }
}
export default TopNav;