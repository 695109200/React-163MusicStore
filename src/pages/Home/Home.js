import React, { Component } from 'react';
import './Home.css';
import TopNav from '../../Component/TopNav/TopNav';
import Carousel from '../../Component/Carousel/Carousel'
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
            </div>
        );
    }
}
export default Home;