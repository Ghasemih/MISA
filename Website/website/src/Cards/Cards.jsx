import React, { Component } from 'react'
import Cardrow from './Cardslist'
import misa from '../Images/misa.jpg'
import img from '../Images/9.jpg'
import "../Css/App.css"




class Cards extends Component {

    state = { 
        on : false,
        txt: "All the rights of this website are reserved by Hamid Ghasemi,   contact: ghasemih@mcmaster.ca",

        pd : [ 
          {
            id : 1,
            title: "Stories & Poems",
            p :  "Write your own stories and poems, and read others",
            image : misa,
            add : "/story",
         },

          {
            id : 2,
            title: "Events",
            p :  "Check out our event dates and make plans",
            image : img,
            add : "/event",
        },

          {
            id : 3,
            title: "Members & Sponsers",
            p :  "Misa members roles with their contact info",
            image : misa,
            add : "/members",
        },

        {
          id : 4,
          title: "Academic",
          p :  "Learn course better and find tutors around you",
          image : misa,
          add : "/academic",
      },

      {
        id : 5,
        title: "McMaster Information",
        p :  "Enhance your knowledge & information about McMaster University",
        image : misa,
        add : "/info",
    },

      {
        id : 6,
        title: "News & Performance",
        p :  "Discover news & perfomances in McMaster and Hamilton",
        image : misa,
        add : "/news",
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
              add1 ={this.state.pd[0].add}

              img2={this.state.pd[1].image}   
              title2={this.state.pd[1].title}              
              p2 = {this.state.pd[1].p}
              add2 ={this.state.pd[1].add}
              /> 


              <Cardrow  
              img1={this.state.pd[2].image} 
              title1={this.state.pd[2].title} 
              p1 = {this.state.pd[2].p}
              add1 ={this.state.pd[2].add}


              img2={this.state.pd[3].image}   
              title2={this.state.pd[3].title}              
              p2 = {this.state.pd[3].p}
              add2 ={this.state.pd[3].add}
              />  

              <Cardrow  
              img1={this.state.pd[4].image} 
              title1={this.state.pd[4].title} 
              p1 = {this.state.pd[4].p}
              add1 ={this.state.pd[4].add}


              img2={this.state.pd[5].image}   
              title2={this.state.pd[5].title}              
              p2 = {this.state.pd[5].p}
              add2 ={this.state.pd[5].add}
              />  
            </div >      
            
        </div>
      
            <div className="button"> 
            {this.state.on && 
            <p>
              <font color="aqua"> {this.state.txt} </font>
            </p>}
            <button className="btn btn-primary" onClick={this.toggle}>Show Contact info</button> 
            </div>

      </div>
    )
  }
}

export default Cards;