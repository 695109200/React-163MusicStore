import React, { Component } from 'react';
import './Home.css';
import TopNav from '../../Component/TopNav/TopNav';
import Carousel from '../../Component/Carousel/Carousel';
import MiddleNav from '../../Component/MiddleNav/MiddleNav'

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
            </div>
        );
    }
}
export default Home;