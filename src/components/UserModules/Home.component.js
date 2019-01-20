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
import { LogoutACTIONS } from '../../redux/events/logout';
import { UserACTIONS } from '../../redux/events/user.events';

/** styling required */
import '../../css/bootstrap.css'; // version 3
import '../../css/pixeladmin.css';
import '../../css/widgets.min.css';
import '../../css/app-style.css';
import './css/UserHome.css';
import '../../../node_modules/tailwindcss/dist/tailwind.min.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';


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

        /** fetch user on first time load/ on refresh*/
        this._prepareComponentData();
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


    _handleSignout = () => {
        Store.dispatch(LogoutACTIONS.signoutUser())
    }

    _prepareComponentData = () => {
        Store.dispatch(UserACTIONS.fetchUser());
    }
    

    render(){

        return(
            <div style = {{position : 'relative', minHeight: '100vh', overflow: 'hidden'}} 
            className="clearfix">

                <LeftSideNav />
                <MainNavbar />
            </div>
        );
    }

}


/**
 * Comp Name : MainNavbar
 * Type : Class
 * Date of revision : 20-01-2019
 * Desc : Component for the Main navbar of the Home page
 ---------------------------------------------------------------------*/
class MainNavbar extends Component {

     /** Constructor INIT */
    constructor(props){
        super(props);
    }

     /**Lifecycle hooks ----------------*/
    componentWillMount() {

    }

    componentWillReceiveProps(){

    }

    componentWillUpdate() {

    }





     /**Functions ---------------------------------- */
     _displayListNotification = (list) => {
        let notifList = [];
        var i;
        for (i = 0; i < 3; i++) {
            notifList.push(<NotifItem />)
        }
        return notifList;
     }

     render() {
         return(
             <React.Fragment>
                 <nav className ="navbar px-navbar">
                    <div className="navbar-header"><a className="navbar-brand" href="#">Brand</a></div>
                    <button type="button" className="navbar-toggle collapsed"><i className="navbar-toggle-icon"></i></button>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav pull-xs-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
                                aria-haspopup="true" aria-expanded="true">
                                    <i className="fas fa-comments"></i>
                                    <span className="px-navbar-label label label-danger">3</span>
                                </a>
                                <ul className="dropdown-menu pull-right custom-nav-dropdown">

                                    <div className="scrollable-dropdown-box">
                                        {this._displayListNotification([])}
                                    </div>

                                    <li className="box text-grey-dark">
                                        <div className="box-row">
                                            <div className="btn btn-primary w-full">view more</div>
                                        </div>
                                    </li>                              
                                
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-bell"></i>
                                    <span className="px-navbar-label label label-danger">5</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="http://i.pravatar.cc/300?1" alt="" className="px-navbar-image"/>
                                </a>
                            </li>  
                        </ul>
                    </div>
                 </nav>
             </React.Fragment>
         );
     }

}

const NotifItem = (...props) => {

    return (
        <React.Fragment>
             <li className="box text-grey-dark">
                <div className="box-row m-0 p-0">
                        <div className="box-cell px-1 py-2">
                            <img src="http://i.pravatar.cc/300?2" alt="" className="user-avatar rounded-full pull-xs-left"/>
                            <div className="user-msg-box bg- pull-xs-left">
                            <span className="font-bold">Napihup 24 mins ago</span><br/>
                            <span className="msg-snipp font-italic">4 messages ... </span>
                            </div>
                            <i className="fas fa-user-graduate pull-xs-right mt-5 mr-3"></i> 
                        </div> 
                    </div>
                </li> 
        </React.Fragment>
    );

}



/**
 * Comp Name : LeftSideNav
 * Type : Class
 * Date of revision : 20-01-2019
 * Desc : Component for the left NAVIGATION side bar of the Home page
 ---------------------------------------------------------------------*/
class LeftSideNav extends Component {

    /** Constructor INIT */
    constructor(props){
        super(props);
    }

    /**Lifecycle hooks ----------------*/



     /**Functions ---------------------------------- */



     render(){
         return(
             <React.Fragment>
                 <nav className="px-nav px-nav-left left-nav-border" id="px-nav-box-left">
                    <LeftSideBarToggleButton />
                    <ul className="px-nav-content">
                    <div className="px-nav-box p-y-2 p-x-3 border-b-2 border-grey-light">
                        <ProfileInfoBox avatarUrl = {''} />
                        <ProfileControlPanel />         
                    </div>
                    <li className="px-nav-item active">
                    <a href="#"><i className="fas fa-chalkboard"></i><span className="px-nav-label m-l-2 font-weight-bold">Classes</span></a>
                    </li>
                    <li className="px-nav-item">
                    <a href="#"><i className="fas fa-graduation-cap"></i><span className="px-nav-label m-l-2 font-weight-bold">Report</span></a>
                    </li>
                    <div className="px-nav-box p-y-2 p-x-3 b-t-1">
                        <button type="button" className="btn btn-lg btn-primary btn-block b-a-0 rounded-full">
                        Create work <i className="ml-5 fas fa-pen-alt"></i>
                        </button>
                    </div>
                    </ul>
                 </nav>
             </React.Fragment>
         );
     }

}


const LeftSideBarToggleButton = () => {
    return (
        <React.Fragment>
             <button type="button" className="px-nav-toggle" data-toggle="px-nav">
                <span className="px-nav-toggle-arrow"></span>
                <span className="navbar-toggle-icon"></span>
                {/* <span className="px-nav-toggle-label" style={{fontSize: "11px"}}>HIDE MENU</span> */}
            </button>
        </React.Fragment>
    );
}


const ProfileInfoBox = (avatarUrl) => {
    return (
        <React.Fragment>
             <div className="flex profile-box">
                <div className = "avatar-box">
                    <img src="http://i.pravatar.cc/300?1" className="img-fluid" /> 
                </div>
                <div className="profile-info bg-">
                    <span className="user-name text-grey-darker text-2xl font-weight-bold flex">Hanafi Bin</span>
                    <span className="user-name text-grey-dark font-weight-light flex">#125446</span>
                </div>
            </div>
        </React.Fragment>
    );
}


const ProfileControlPanel = () => {
    return (
        <React.Fragment>
             <div className="flex bg- py-5">
                <div className="btn-group mx-auto">
                    <button type="button" className="btn btn-white rounded-lg">
                    <i className="fas fa-cog"></i>
                    </button>   
                    <button type="button" className="btn btn-white rounded-lg">
                    <i className="fas fa-chalkboard-teacher"></i>
                    </button>
                    <button type="button" className="btn btn-white rounded-lg">
                    <i className="fas fa-inbox"></i>
                    </button>
                    <button type="button" className="btn btn-danger rounded-lg">
                    <i className="fas fa-power-off"></i>
                    </button> 
                </div>
            </div>
        </React.Fragment>
    );
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