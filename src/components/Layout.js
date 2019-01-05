import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/efah-style.css';
import { BrowserRouter as AppRouter,  Route, Link} from 'react-router-dom'
import Store from "../Store";


//Component
import LandingLayout from "./LandingLayout";
import UserLayout from "./UserLayout"
import LandingPage from './LandingPage';
// const ProtectedRoute = ({component : Component, ...rest}) => {
//     console.log(rest);
//     return(
       
//         <Route {...rest} render={
//             (props) => {
//                 console.log(props);
//                 if(Auth.isAuththenticated()){
//                     return <Component {...props}/>
//                 }else {
//                     return <Redirect to={
//                         {
//                             pathname: "/",
//                             state : {from: props.location}
//                         }
//                     } />
//                 }
               
//             }
//         }/>
//     );
// }

// const AppLayout = ({component : Component, ...rest}) => {

//     return(

//         <Route {...rest} render={
//             (props) => {
                
//             }
//         }/>
//     );
// }

class Layout extends Component {

   
    componentWillMount(){
        // Store.dispatch()
        console.log(this.state);
    }

    render(){
        return(
            <div className="container-fluid page-container" style={{margin: 0, padding: 0}}>
                <div className="row">
                    {/* <AppRouter>
                        <React.Fragment>
                            <Route path="/" 
                             <LandingPage />
                        </React.Fragment>
                    </AppRouter> */}
                    {this.doRenderPageLayout()}          
                </div>
            </div>
        );
    }


    doRenderPageLayout = () => {
        console.log(this.props);
        if(this.props.isAuthenticated === false){
            return(
                <LandingLayout />
            );
        } else {

            return(
                <UserLayout />
            );
        }
    }

}


export default connect(Store => {
    let sr = Store.AuthStore;
    return{
        isAuthenticated : sr.isAuthenticated
    }
})(Layout)

//---- <code>state format used<code>
// const userInitState = {
//     isAuthenticated : false,
//     uID : '',
//     publicID : '',
//     name : '',
//     email : '',
//     imageUrl : ''
// }