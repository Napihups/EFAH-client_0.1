/** ---------------------------------------------------------------------------------------+
Name : AppComponent
Author by : Napihups
Date of revision : 19-01-2019
Desc : This Components is the main components for all modules of the Application
which include the Public and User (Private) modules
+-----------------------------------------------------------------------------------------**/

/** Imports */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom"
import { AuthValACTIONS } from '../redux/events/auth_validation';
import { connect } from 'react-redux';
import Store from '../Store';

/** Components required ----------------------------------*/
import PublicHome from './PublicModules/PublicHome';
import PageLoader from './PageLoader';
import Home from './UserModules/Home.component';
class AppComponent extends Component {

    /** Constructor INIT */
    constructor(props){
        super(props);
    }

    /**Lifecycle hooks ----------------*/
    componentWillMount(){
        Store.dispatch(AuthValACTIONS.validateAuth());
    }

    componentWillUpdate(nextProps, nextState) {
      
    }


    /**Functions ---------------------------------- */
    _renderRouterComp = () => {
        return(
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route exact path = "/auth" render={(data) => {
                            return <PublicHome route = {data}     
                            isAuthenticated = {this.props.isAuthenticated}/>
                        }} />
                        <Route path= "/signup-teacher" render={(data) => {
                            return <PublicHome route = {data} 
                            isAuthenticated = {this.props.isAuthenticated}/>
                        }}/>
                        <Route path= "/signup-student" render={(data) => {
                            return <PublicHome route = {data} 
                            isAuthenticated = {
                                this.props.isAuthenticated}/>
                        }}/>
                        <Route path= "/home" render={(data) => {
                            return <Home route = {data} 
                            isAuthenticated = {this.props.isAuthenticated}/>
                        }}/>
                        <Route render={() => {
                            return(
                                 <h1>Unknown URLS =( Sorry !!!</h1>
                            )
                        }}/>
                    </Switch>


                
                     
                 
                </React.Fragment>
            </Router>
        );
    }

    /**------------------------------------------------- */
    render(){
        return(this.props.DATA_ON_LOADING ? <PageLoader /> : this._renderRouterComp());
    }
}



const connectState = function(state) {
    let AuthStateRed = state.AuthStatesReducer;
    return {
        DATA_ON_LOADING : AuthStateRed.DATA_ON_LOADING,
        isAuthenticated : AuthStateRed.isAuthenticated,
        token : AuthStateRed.token,
        error : AuthStateRed.error
    }
}

export default connect(connectState)(AppComponent);