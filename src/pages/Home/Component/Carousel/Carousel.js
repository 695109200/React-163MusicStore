import React, { Component } from 'react';
import './Carousel.css'
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:1
        };
    }
    componentWillMount () {
        this.timer = setInterval(() => {
            this.setState({ active:this.state.active+1})
            if(this.state.active > 5){
                this.setState({ active:1})
                }
        }, 2500)
        }
        next(){
            if(this.state.active==5){
            this.setState({ active:1})
            return
            }
            this.setState({ active:this.state.active+1})
        }
        out(){
            if(this.state.active==1){
                this.setState({ active:5})
                return
                }
                this.setState({ active:this.state.active-1}) 
        }
        chanche(e){
            this.setState({ active:e}) 
        }
    render() {
        return (
            <div className="CarouselBox">
                <ul>
                    <li className={this.state.active===1?"CarLiActive":'CarLi'}><a><img src="http://p3.music.126.net/9a2ud9YMsGOvE29I4CINcQ==/109951164546861473.jpg"></img></a></li>
                    <li className={this.state.active===2?"CarLiActive":'CarLi'}><a><img src="http://p3.music.126.net/mAJr3flwrYlV7j05zSA2Bw==/109951164544122628.jpg"></img></a></li>
                    <li className={this.state.active===3?"CarLiActive":'CarLi'}><a><img src="http://p4.music.126.net/KLfoWOvgViQGhwSAT-OZjw==/109951164545913252.jpg"></img></a></li>
                    <li className={this.state.active===4?"CarLiActive":'CarLi'}><a><img src="http://p4.music.126.net/hLNFhdqpyMlnZTjV46x4YA==/109951164545900254.jpg"></img></a></li>
                    <li className={this.state.active===5?"CarLiActive":'CarLi'}><a><img src="http://p4.music.126.net/NKTYjTyGPM8cV6w59bfzYg==/109951164542321999.jpg"></img></a></li>
                </ul>
                <div className="btnL" onClick={this.out.bind(this)}></div>
                <div className="btnR" onClick={this.next.bind(this)}></div>

                <div className="dots">
                    <div className="selfBox">
                    <i href="javascript:;" className={this.state.active===1?"self1":'self'} id="1" onClick={this.chanche.bind(this,1)}></i>
                    <i href="javascript:;" className={this.state.active===2?"self1":'self'} id="2" onClick={this.chanche.bind(this,2)}></i>
                    <i href="javascript:;" className={this.state.active===3?"self1":'self'} id="3" onClick={this.chanche.bind(this,3)}></i>
                    <i href="javascript:;" className={this.state.active===4?"self1":'self'} id="4" onClick={this.chanche.bind(this,4)}></i>
                    <i href="javascript:;" className={this.state.active===5?"self1":'self'} id="5" onClick={this.chanche.bind(this,5)}></i>
                    </div>
                </div>
            </div>
        );
    }
}
export default Carousel;