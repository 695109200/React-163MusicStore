import React, { Component } from 'react';
import './MiddleNav.css'
class MiddleNav extends Component {
    render() {
        return (
            <div className="MiddleNavBox">
                <div className="MiddleBox">
                    <div className="MiddleInBox">
                        <img src="http://p3.music.126.net/UKhDHWnEMmoOo27PQmDPbA==/19117208672446378.jpg" className="MiddleIcon"></img>
                        <span className="MiddleTxt">热爆商品</span>
                    </div>
                </div>
                <div className="MiddleBox">
                    <div className="MiddleInBox">
                        <img src="http://p4.music.126.net/tKMAm5OvR-2lAj7dnEOhsg==/18623527952924939.jpg" className="MiddleIcon"></img>
                        <span className="MiddleTxt">IP周边</span>
                    </div>
                </div>
                <div className="MiddleBox">
                    <div className="MiddleInBox">
                        <img src="http://p3.music.126.net/PzH4QQKE5R97J9f2V-SvqQ==/18585045045959929.jpg" className="MiddleIcon"></img>
                        <span className="MiddleTxt">数码影音</span>
                    </div>
                </div>
                <div className="MiddleBox">
                    <div className="MiddleInBox">
                        <img src="https://s2.music.126.net/store/web/img/jifen.png?9e14a1defdc67dfada0b46af9821fd2a" className="MiddleIcon"></img>
                        <span className="MiddleTxt1 ">积分商城</span>
                        <span className="MiddleTxt2">0</span>
                        <span className="MiddleTxt3">积分</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default MiddleNav;