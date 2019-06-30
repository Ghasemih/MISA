import React, { Component } from 'react'
import '../Css/back.css'

export default class Typestory extends Component {

    state ={
        name: "",
        email: "",
        story: "",
    }


    next = e => {
        this.setState({
        [e.target.name] : e.target.value
        });
    }
    
    submit = e =>{
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return ( 
            <div>
            <div className="misa-header" > <h2 align="Center">MISA</h2> </div>
                <div className="back">
                    <div>
                        <form className="input" >

                            <input name="name" 
                            placeholder="Name"  
                            className="box" value={this.state.name}  
                            onChange={e => this.next(e)} required/>
                            <br/>

                            <input name="email" 
                            placeholder="Example@mcmaster.ca" 
                            className="box" value={this.state.email} 
                            onChange={e=> this.next(e)} required/>
                            <br/>

                            <textarea name="story" 
                            placeholder="Write your story (maximum 500 charechters)" 
                            className="typestory" cols="5" 
                            maxLength="500" value={this.state.story} 
                            onChange={e=> this.next(e)}  required/>
                            <br />

                            <input name="submit" type="submit" value="Submit" onClick={e => this.submit(e)}/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
