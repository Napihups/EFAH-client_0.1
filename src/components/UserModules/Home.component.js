/** ---------------------------------------------------------------------------------------+
Name : Home
Author by : Napihups
Date of revision : 20-01-2019
Desc : This Components for Home page ..
Auth : Required
+-----------------------------------------------------------------------------------------**/


/** Required imports  */
import React, { Component } from 'react';
import Store from '../../Store';
import { pushRoute } from '../../redux/events/routes_event';

class Home extends Component {
    

    /** Constructor INIT */
    constructor(props){
        super(props);
    }

    /**Lifecycle hooks ----------------*/
    componentWillMount(){
        /** Upon Page Refreshed */
        console.log("Home : componentWillMount")
        var history = this.props.route.history;
        if(!this.props.isAuthenticated) {
            Store.dispatch(pushRoute(history, '/auth'))
        } 
    }
    componentWillReceiveProps(props) {
        console.log("Home : componentWillReceiveProps")
    }

    componentWillUpdate(nextProps) {
         /** Runtime Component Update */
         console.log("Home : componentWillUpdate")
         var history = nextProps.route.history;
         if(!nextProps.isAuthenticated) {
             Store.dispatch(pushRoute(history, '/auth'))
         } 
    }



    /**Functions ---------------------------------- */
    _displayHome = () => {
        // return(this.props.DATA_ON_LOADING ? <PageLoader /> : this._renderRouterComp());
    }


    _handleSignout =() => {
        // Store.dispatch(signoutUser())
    }
    

    render(){
        return(
            <div className="container mt-5">
                <div className="flex bg-grey-light p-5">
                    <h1>Hello World</h1>
                    <div onClick = {this._handleSignout} 
                    className=" flex-2 btn btn-primary ml-3">Sign out</div>
                </div>
            </div>
        );
    }

}

// const connectState = function(state) {
//     let userHomeReducer = state.userHomeReducer;
//     return {
//         DATA_ON_LOADING : userHomeReducer.DATA_ON_LOADING,
//         username : userHomeReducer.username,
//         avatarUrl : userHomeReducer.avatarUrl,
//         userId : userHomeReducer.userId
       
//     }
// }
// export default connect(connectState)(Home);
export default Home;