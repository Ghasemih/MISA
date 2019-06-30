import React, { Component } from 'react'
import './Css/back.css'

export default class Academic extends Component {
    
    
    Engnames = [ "Erfan jamlifar (Software eng)  erfan@mcmaster.ca", "Pedram dnsan" ]
    Sienames = ["Erfan jamlifar (Software eng)  erfan@mcmaster.ca"]
   

    Engloop(){
        return <div> {this.Engnames.map(name => <li key={name}>  {name}  </li>) } </div>
    }

    Siloop(){
        return <div> {this.Sienames.map(name => <li key={name}>  {name}  </li>) } </div>
    }
    
    render() {
        return (
            
            <div className="misa-header" >
                <h2 align="Center">MISA</h2>
                <div className="back1">
                    <div className="tutor">
                        <h3><font color="white">Tutors</font></h3>
                        <hr className="hr-one"></hr>
                        
                            <h6>
                                <font color="White">

                                    <ul className="ul-none">
                                        <li><h5 ><font color="white"> Engineer Tutors</font></h5></li>
                                        {this.Engloop()}     
                                        </ul>

                                    <hr/>

                                    <ul className="ul-none">
                                        <li><h5 ><font color="white"> Science Tutors</font></h5></li>
                                        {this.Siloop()}
                                    </ul>

                                </font>
                            </h6>
                        
                    </div>
                </div>
            </div>
        )
    }
}
