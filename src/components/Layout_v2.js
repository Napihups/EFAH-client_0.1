import React, { Component } from 'react';
import '../css/efah-style.css';
import { BrowserRouter as AppRouter,  Route, Link, Redirect} from 'react-router-dom'
import { getItemByKey } from '../modules/dbUtils';
import LandingLayout from './LandingLayout'


class LandingPage extends Component {
    render(){
        return(
            <h1>Hello Home</h1>
        );
    }
}

class Dashboard extends Component {
    render(){
        return(
            <h1>Hello Dashboard</h1>
        );
    }
}

class HomePage extends Component {

    render(){
        return(
            <h1>Welcome to Home Page, Login</h1>
        );
    }
}

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching : false,
            comp_data : {
                isAuthenticated : false
            }
        }
    }

    componentWillMount(){
        // Load state before rendering
       this.updateLoggedStatus(this);
      
    }
    render(){
        console.log(this.state);
        return(
            <div className="container-fluid page-container" style={{margin: 0, padding: 0}}>
                <div className="row">
                    {/* <AppRouter>
                        <React.Fragment>
                        <Route exact path="/" render={() => (
                        this.state.isAuthenticated ? (
                            <Redirect to="/dashboard"/>
                        ) : (
                            <LandingPage/>
                        )
                        )}/>

                        <Route exact path = "/dashboard" component = {Dashboard} />

                              
                        </React.Fragment>
                    </AppRouter> */}
                   {this.renderPageLayout()}
                </div>
            </div>
        );
    }


    renderPageLayout() {
        if(this.state.isFetching) {
            //render page 
            return (
                <React.Fragment>
                    <Route path="/*" exact render={() => {
                        if(this.state.comp_data.isAuthenticated){
                            return (
                                <Redirect to ="/dashboard" />
                            );
                        } else {
                            return(
                                <Redirect to ="/home" />
                            );
                        }
                    }}/>

                    <Route exact path="/home" component = {HomePage} />

                    <Route exact path="/dashboard" render={() => {
                        if(this.state.comp_data.isAuthenticated){
                            return (<Dashboard />);
                        } else {
                            return (<Redirect to = "/dfeaf" />);
                        }
                    }} />
                </React.Fragment>
            )

        } else {
            return (
                <div className="container" style={{
                    marginTop : "300px",
                    textAlign : "center"
                }}>
                    <i className="fas fa-spinner fa-pulse fa-5x text-primary"></i>
                </div>
            );
        }
    }

    updateLoggedStatus(a){
        setTimeout(function() {
            a.setState({
                isFetching : !a.state.isFetching
            })
        }, 2000);
        setTimeout(function() {
            a.setState({
                comp_data : {
                    isAuthenticated : true
                }
            })
        }, 5000);
    }

}

export default Layout