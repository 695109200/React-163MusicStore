import React, { Component } from 'react';
import './Home.css';
import TopNav from '../../Component/TopNav/TopNav';
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
            </div>
        );
    }
}
export default Home;