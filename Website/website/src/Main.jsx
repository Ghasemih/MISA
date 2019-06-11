import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Cards from './Cards/Cards';
import Page from './BackPages/Page';
import Wrong from './BackPages/Wrong'


class Main extends Component {
    render() {
        return (
            
            <Router>
                <Switch>
                    <Route exact path = "/">
                        <Cards />
                    </Route>
                    <Route exact path = "/story"> 
                        <Page/>
                    </Route>  


                    <Route exact path ="/404"> 
                        <Wrong />
                    </Route>
                    <Redirect to= "/404" />
                </Switch>
            </Router>
        )
    }
}

export default Main;