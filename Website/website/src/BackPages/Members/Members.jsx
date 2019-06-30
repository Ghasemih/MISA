import React, { Component } from 'react'
import kg from "../../Images/misa.jpg"


export default class Members extends Component {
    render() {
        return (
            <div className="misa-header" >
               <h2 align="Center">MISA</h2>
                <div className="back">
                <div className="row">
                    <div className="image">
                        <a href="/members/membersinfo"  > 
                        <img src={kg} alt="MISA" className="img-top" />
                        </a>
                    </div>
                    <div className="image1">
                        <a href="/members/pictures"  > 
                        <img src={kg} alt="MISA" className="img-top" />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
