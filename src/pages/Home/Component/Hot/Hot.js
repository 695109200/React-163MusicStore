import React, { Component } from 'react';
import './Hot.css'
import axios from 'axios'
import '../Recommend/Recommend.css'
class Hot extends Component {
    constructor(props){
        super(props)
        this.state= {
            hotData:[]
        }
    }

    componentDidMount() {
        axios.get('allProduct/gets?limit=60').then((response)=>{
            this.setState({
                hotData :response.data.data
            })
        })
    }
    render() {
        return (
            <div className="HotBox">
                <span className="HotTitle">热门商品</span>
                {(this.state.hotData.allProduct || []).map((item, index) => {
                    return (
                        <div className="RecommendLiBox hotLi" key={index}>
                           { item.minPrice!=  item.originalCost && <div className="oldPayBox">
                                <p className="newPay">¥{item.minPrice}</p>
                                <p className="oldPay">¥{item.originalCost}</p>
                            </div>
                           }
                            <img src={item.coverUrl} className="RecommendBoxImg"></img>
                            <div className="RecommendBoxTtitle">{item.tags[0] && <span className="tag">{item.tags[0]}</span>}{item.name}</div>
                            <p className="RecommendPay">¥{item.maxPrice}</p>
                        </div>
                    )
                })}
                <div className="RecommendLiBox hotLi"></div>
                {/* <div className="aff"></div> */}
            </div>
        );
    }
}

export default Hot;