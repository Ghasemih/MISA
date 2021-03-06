import React from "react"
import '../Css/Card.css'


const Card = props =>{
    return(
        <div className="card" >
            <div className="overflow">
                <img src={props.img} alt="MISA" className="card-img-top"/>  
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title">{props.Title}</h4> 
                <p className="card-text"> {props.p}</p>
                <a href={props.ad} className="btn btn-info">Click right here</a>
            </div >
            
                
        </div>
    );
}

export default Card;