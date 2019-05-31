import React, { Component } from 'react';
import Cardrow from './Cardslist';
import misa from './Images/misa.jpg'
import img from './Images/9.jpg'
import "./App.css"



 class Cards extends Component {

    state = { 
        on : false,
        txt: "Contact",

        pd : [ 
          {
            id : 1,
            title: "Stories & Poems",
            p :  "Write your own stories and poems, and read others",
            image : misa,
         },

          {
            id : 2,
            title: "Events",
            p :  "Check out our event dates and make plans",
            image : img,
        },

          {
            id : 3,
            title: "Members & Sponsers",
            p :  "Misa members roles with their contact info",
            image : misa,
        },

        {
          id : 4,
          title: "Academic",
          p :  "Learn course better and find tutors around you",
          image : misa,
      },

      {
        id : 5,
        title: "McMaster Information",
        p :  "Enhance your knowledge & information about McMaster University",
        image : misa,
    },

      {
        id : 6,
        title: "News & Performance",
        p :  "Discover news & perfomances in McMaster and Hamilton",
        image : misa,
    }
         ],
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
              <Cardrow 
              img1={this.state.pd[0].image} 
              title1={this.state.pd[0].title} 
              p1 = {this.state.pd[0].p}

              img2={this.state.pd[1].image}   
              title2={this.state.pd[1].title}              
              p2 = {this.state.pd[1].p}
              /> 


              <Cardrow  
              img1={this.state.pd[2].image} 
              title1={this.state.pd[2].title} 
              p1 = {this.state.pd[2].p}


              img2={this.state.pd[3].image}   
              title2={this.state.pd[3].title}              
              p2 = {this.state.pd[3].p}
              />  

              <Cardrow  
              img1={this.state.pd[4].image} 
              title1={this.state.pd[4].title} 
              p1 = {this.state.pd[4].p}


              img2={this.state.pd[5].image}   
              title2={this.state.pd[5].title}              
              p2 = {this.state.pd[5].p}
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