import React, { Component } from 'react';
import { connect } from "react-redux";
import Store from "../Store";


class LandingPage extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1>Home</h1>
        );
    }
}

export default LandingPage;