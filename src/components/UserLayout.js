import React, { Component } from 'react';
import Store from '../Store';
import { connect } from "react-redux";

//import actions
import  getUserAccountInfo  from '../actions/userAccountAction';

class UserLayout extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        Store.dispatch(getUserAccountInfo());
    }

    render() {
        return (
            <div className="card card-body">
                {/* <h4>{this.props.userData.name}</h4>
                <h4>{this.props.userData.uID}</h4>
                <div style={{width : "100px", height : "100px", borderRadius : "50px"}}>
                <img src= {this.props.userData.imageUrl} className="img-fluid" alt="Cannot access Images"/>
                </div> */}
               
            </div>
        );
    }
}

export default connect(Store => {
    let UserStore = Store.UserStore;
    return{
        uID : UserStore.uID,
        publicID : UserStore.publicID,
        name : UserStore.name,
        email : UserStore.email,
        imageUrl : UserStore.imageUrl
    }
})(UserLayout);
