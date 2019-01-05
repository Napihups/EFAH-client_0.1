import React , { Component } from 'react';
import '../css/dashboard.css';
import Store from '../Store';
import { Redirect } from 'react-router-dom';
import PageLoader from '../components/C_PageLoader'
import { getUser } from '../redux/actions/ACT_user';
import { connect } from 'react-redux';

//import components 
import C_UserNavbar from './C_UserNavbar';


class UserDashboard extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        Store.dispatch(getUser());
        // console.log(this.props);
        
    }

    render(){
        if(!this.props.DATA_READY) {
            return (
                <PageLoader />
            );
          } else {
            return(
                <React.Fragment>
                    <C_UserNavbar user={this.props.user}/>
                    {/* <C_DashboardContent /> */}
                </React.Fragment>
            
            ); 
          }
    }

   
}


const connectState = function(state) {
    let userReducer = state.userReducer;
    return {
        DATA_READY : state.uiUser.DATA_READY,
        user : userReducer.user,
    }
}

export default connect(connectState)(UserDashboard);