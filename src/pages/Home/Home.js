import React, { Component } from 'react';
import './Home.css';
import TopNav from './Component/TopNav/TopNav';
import Carousel from './Component/Carousel/Carousel';
import MiddleNav from './Component/MiddleNav/MiddleNav'
import Hot from './Component/Hot/Hot'
import Recommend from './Component/Recommend/Recommend'
import BottomNav from './Component/BottomNav/BottomNav'
import RightNav from './Component/RightNav/RightNav'

class Home extends Component {
    
    render() {
        return (
            <div>
                <TopNav></TopNav>
                <Carousel/>
                <MiddleNav/>
                <Recommend/>
                <Hot/>
                <RightNav/>
                <BottomNav/>
            </div>
        );
    }
}
export default Home;