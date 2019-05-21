import React, { Component } from 'react';
import Cardrow from './Cardslist';
import misa from './Images/misa.jpg'
import img from './Images/9.jpg'
import "./App.css"



 class Cards extends Component {

    state = { 
        on : false,
        txt: "Contact",
        // pd : [ {}

        // ]
    }

    toggle = () =>{

    this.setState({
       on : !this.state.on
    })
}


  render() {
    return (
      <div className="App">
        <div  className="body-misa" >   
            <h1>MISA
            <img src={misa} className= "App-misa" alt="misa"/>
            </h1>
            <div  className="App-header"> 

              <Cardrow img1={misa} img2={img}   
              title1="Stories & Poems" title2="Events"
              p1 = "Write your own stories and poems, and read others"
              p2 = "Check out our event dates and make plans"
              />  

              <Cardrow img1={misa} img2={misa}   
              title1="Members & Sponsers" title2="Academic"
              p1 = "Misa members roles with their contact info"
              p2 = "Learn course better and find tutors around you"
              />  

              <Cardrow img1={misa} img2={misa}   
              title1="McMaster Information" title2="News & Performance"
              p1 = "Enhance your knowledge & information about McMaster University"
              p2 = "Discover news & perfomances in McMaster and Hamilton"
              />  
            </div >        
        </div>
      
            <div className="button"> 
            {this.state.on && <h2>{this.state.txt}</h2>}
            <button className="btn btn-primary" onClick={this.toggle}>Show Contact info</button> 
            </div>

      </div>
    )
  }
}

export default Cards;