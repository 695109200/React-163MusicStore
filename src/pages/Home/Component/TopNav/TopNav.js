import React, { Component } from 'react';
import './TopNav.css'

class TopNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            a:0
        }
    }
    R(){
        this.setState({
            a:this.state.a+1
        })
    }
    render() {
        return (
                <div className="topNav">
                    <div className="topNavBox">
                       <div className="topNavBoxIcon" onClick={this.R.bind(this)}></div>
                    <div className="avatarBox">
                        <img src="http://p3.music.126.net/gyoekwwpfuRpRvJwasP4jw==/109951163669765335.jpg?param=36y36" className="avatar"></img>
                        <div className="bottonIcon"></div>
                        <div className="hiddenLi">
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