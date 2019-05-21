import React from 'react'
import Card from './CardUI'

const Cardrow = props =>{
    return (
    
      <div className="container-fluid d-flex justify-content-center">
          <div className="row">

              <div className="col-md-6"><Card 
              img={props.img1} 
              Title={props.title1}
              p={props.p1}
              /></div>

              <div className="col-md-6"><Card 
              img={props.img2} 
              Title={props.title2}
              p={props.p2}
              /></div>

          </div>
      </div> 
    );
  }


export default Cardrow;