import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter } from "react-router-dom"

//import Components
import PublicNavbar from './C_Public_Navbar';
import PublicContent from './C_PublicContent';


class PublicHome extends Component {


    render(){
        console.log('Public home is rendered ' + this.props.isAuthenticated)
        return (
           this.props.isAuthenticated === true ? <Redirect to = "/user/" />
            : <PublicLayout />
            
        );
    }
}


class PublicLayout extends Component {
    render(){
        return(
            <React.Fragment>
               <PublicNavbar />
               <PublicContent />
            </React.Fragment>
        );
    }
}

export default PublicHome;





