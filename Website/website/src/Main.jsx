import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Cards from './Cards/Cards'

import Story from './BackPages/Story/Story'
import Wrong from './BackPages/Wrong'
import Event from './BackPages/Event'
import Members from './BackPages/Members/Members'
import Academic from './BackPages/Academic'
import News from './BackPages/News'
import Info from './BackPages/info'
import Typestory from './BackPages/Story/Typestory'


class Main extends Component {
    render() {
        return (
            
            <Router>
                <Switch>
                    <Route exact path = "/">
                        <Cards />
                    </Route>
                    <Route exact path = "/story"> 
                        <Story/>
                    </Route> 
                    <Route exact path="/story/writtenstories"> 
                        <Typestory />
                    </Route> 
                    <Route exact path="/story/poems"> 

                    </Route> 

                    <Route exact path = "/event"> 
                        <Event />
                    </Route>  

                    <Route exact path = "/members"> 
                        <Members/>
                    </Route>  
                    <Route exact path="/members/pictures">

                    </Route>
                    <Route exact path="/members/membersinfo">

                    </Route>

                    <Route exact path = "/academic"> 
                        <Academic/>
                    </Route>  
                    <Route exact path = "/info"> 
                        <Info/>
                    </Route>  
                    <Route exact path = "/news"> 
                        <News/>
                    </Route>  

                    <Route exact path ="/404" > 
                        <Wrong />
                    </Route>

                    <Redirect to= "/404" />
                </Switch>
            </Router>
        )
    }
}

export default Main;