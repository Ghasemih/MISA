import React, { Component } from 'react'
import img1 from '../Images/misa.jpg'
import './Css/back.css'

export default class Event extends Component {

    statement="sdhjhv jsdhjh jsdhjs jsdhjfh jdshfj dsjh fjfgkffj kfjgkjdf kdjgfkgj fkdgfkj dfkjgkdf kdfjdfkjgfd kdfjgkjf kdfjln dsjdhj djhsjdh jdhsjdh dsjhds dsjhdsj dsjhdsj djshdj  sjdhjsdh dsjhdjs dsjhdklkg lkxvci lkczufd lbkx[ vjsduh ashdjsdhjdh sjdajhdd bfdfb fdjf Noruz is one of the most stonishing celebration around the world. so whenever iranian people wants to celebate they go out witht their family and buy new clothes as a cultural custom, in order to show that they are ready for the upcoming year. shfhfsj ddhkhfds jhdjahsdjs hfjkdshfjs jshdjkhask jksadjhsja jahsdjhas jhdsahdjasdh dkjasjdhjkas jsdha"
    
    render() {
        return (
            <div className="misa-header" >
               <h2 align="Center">MISA</h2>
                <div className="back1">
                    <div>
                        <h5 className="eventarticle"> <font color="White">{this.statement}</font> </h5>    
                        <img src={img1} alt="Event"className="eventimg"/> 
                    </div>
                    
                </div>
            </div>
        )
    }
}
