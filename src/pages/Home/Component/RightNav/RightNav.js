import React, { Component } from 'react';
import './RightNav.css'
class RightNav extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);	
      }
      handleScroll(){
        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop < 400){
            this.setState({
                RightNavActive:true
            })
        }else{
            this.setState({
                RightNavActive:false
            })
        }
      }
      backTop(){
          console.log('a')
          document.documentElement.scrollTop = 0
      }
    render() {
        return (
            <div className={ this.state.RightNavActive?"RightNavBox1":"RightNavBox"} ref="a">
                <div className="RightNavLi">
                <span>
                查看
                    <br />
                    营业执照
                </span>
                </div>
                <div className="RightNavLi">
                 <span>
                 100%
                </span>
                <br />正品</div>
                <div className="RightNavLi">
                <span>
                七天无理
                    </span>
                    <br/>    
               由退货</div>
                <div className="RightNavLi">
                    <div className="CarIcon"></div>
                    <span className="CarLenIcon">0</span>
                    购物车</div>
                <div className="RightNavLi">
                    <div className="KFIcon"></div>
                    客服</div>
                <div className="RightNavLi" onClick={this.backTop.bind(this)}></div>
            </div>
        );
    }
}

export default RightNav;