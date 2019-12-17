import React, { Component } from 'react';
import './Home.css';
import TopNav from '../../Component/TopNav/TopNav';
import Carousel from '../../Component/Carousel/Carousel';
import MiddleNav from '../../Component/MiddleNav/MiddleNav'
import Hot from '../../Component/Hot/Hot'
import Recommend from '../../Component/Recommend/Recommend'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    render() {
        return (
            <div>
                <TopNav></TopNav>
                <Carousel/>
                <MiddleNav/>
                <Recommend/>
                {/* <Hot/> */}
            </div>
        );
    }
}
export default Home;