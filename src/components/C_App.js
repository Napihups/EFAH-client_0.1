import React , { Component } from 'react';
import Store from '../Store';
// import '../css/efah-style.css';
import CheckAuth from '../APIS_Interfaces/API_CheckAuth';
import { getToken } from '../redux/actions/ACT_auth';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter   } from "react-router-dom"


//import components
// import UserHome from './C_UserHome';
import PublicHome from './C_PublicHome';
import UnknownRoute from './C_UnknownRoute';
import UserRoute from './C_UserRoute';
import UserModules from './C_UserModules';
import PageLoader from './PageLoader';


class App extends Component {


    constructor(props){
        super(props);
    }

    componentWillMount(){
        //prepare data before rendering
        Store.dispatch(getToken());
    }

    componentDidMount(){
       // todo code
    }

    render(){
    console.log('App is rendered')
      if(!this.props.DATA_READY) {
        return (
            <PageLoader />
        );
      } else {
        return(
            <Router>
                <React.Fragment>
                  <Route exact path= "/" render = {(match) => { 
                      return <PublicHome match = {match} isAuthenticated = {this.props.isAuthenticated}/>
                  }}/>
                  <Route path= '/user' render = {(match) => {
                      return <UserModules {...match} isAuthenticated = {this.props.isAuthenticated} />
                  }}/>
                
                </React.Fragment>
            </Router>
  
        
        ); 
      }
    }

   
}



const connectState = function(state) {
    // console.log(state);
    let authReducer = state.authReducer;
    return {
        DATA_READY : state.uiAuth.DATA_READY,
        isAuthenticated : authReducer.isAuthenticated,
        token : authReducer.token
    }
}
export default connect(connectState)(App);