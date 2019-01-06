/** Imports */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter   } from "react-router-dom"
import { getToken } from '../redux/actions/ACT_auth';
import { connect } from 'react-redux';
import Store from '../Store';

/** Components required ----------------------------------*/
import PublicHome from './PublicModules/PublicHome';
import PageLoader from './PageLoader';

/** ---------------------------------------------------------------------------------------+
Name : AppComponent
Author by : Napihups
Date of revision : 05-01-2019
Desc : This Components is the main components for all modules of the Application
which include the Public and User (Private) modules
+-----------------------------------------------------------------------------------------**/
class AppComponent extends Component {

    /** Constructor INIT */
    constructor(props){
        super(props);
    }


    /**Lifecycle hooks ----------------*/
    componentWillMount(){
        Store.dispatch(getToken());
    }


    /**Functions ---------------------------------- */
    _renderRouterComp = () => {
        return(
            <Router>
                <React.Fragment>
                    <Route exact path = "/auth" render={(match) => {
                        return <PublicHome match = {match} 
                        isAuthenticated = {this.props.isAuthenticated}/>
                    }} />


                    <Route exact path="/" render={() => {
                        return <Redirect to ="/auth"/>
                    }}/>
                     
                 
                </React.Fragment>
            </Router>
        );
    }



    /**------------------------------------------------- */
    render(){
        return(this.props.DATA_READY ? this._renderRouterComp(): <PageLoader />);
    }
}


/** connection data to this component */
const connectState = function(state) {
    let authReducer = state.authReducer;
    return {
        DATA_READY : state.uiAuth.DATA_READY,
        isAuthenticated : authReducer.isAuthenticated,
        token : authReducer.token
    }
}
export default connect(connectState)(AppComponent);