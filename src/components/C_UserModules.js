import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter   } from "react-router-dom"

//import components 
import Dashboard from './C_Dashboard';
import SideNavbar from './C_SideNavbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';
import { relative } from 'path';



const UserModules = ({...rest}) => {

        console.log(rest.match.path)
        if(rest.isAuthenticated) {
            return (
                <React.Fragment>
                    <div style= {{position: relative, height: '100vh',width: '100%'}}>
                        <SideNavbar />
                        <main>
                            <Route exact path={`${rest.match.path}/`} render={() => <Redirect to = {`${rest.match.path}/dashboard`}/>} />
                            <Route path={`${rest.match.path}/rendering`} component = {Rendering}/>
                            <Route path={`${rest.match.path}/dashboard`} component = {Dashboard}/>
                        </main>
                    </div>
                   
                </React.Fragment>
            );
        }
        return (
            <Redirect  to = "/" />
        );

}

const Dashboards = () => {
    return <h1>Hello Dashboard</h1>
}

const Rendering = () => <h1>Rendering</h1>

export default UserModules;