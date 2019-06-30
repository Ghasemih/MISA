import React, { Component } from 'react'
import "../Css/back.css"
import kg from "../../Images/misa.jpg"
import "../../Css/App.css"
import '../../Css/Card.css'

class Story extends Component {
    render() {
        return (
            <div className="misa-header" >
               <h2 align="Center">MISA</h2>
                <div className="back">
                    <div className="row">
                    <div className="image">
                        <a href="/story/writtenstories"  > 
                        <img src={kg} alt="MISA" className="img-top" />
                        </a>
                    </div>
                    <div className="image1">
                        <a href="/story/poems"  > 
                        <img src={kg} alt="MISA" className="img-top" />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Story;
        
