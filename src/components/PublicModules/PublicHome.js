/** Imports */
import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types";

/** styling required */
import '../../css/bootstrap.css'; // version 3
import '../../css/pixeladmin.css';
import '../../css/widgets.min.css';
import '../../css/app-style.css';
import '../../../node_modules/tailwindcss/dist/tailwind.min.css';
import './css/PublicHome.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';



/** ---------------------------------------------------------------------------------------+
Name : PublicHome
Author by : Napihups
Date of revision : 05-01-2019
Desc : This Components is to organised all other components layout to form
the Home page when user is not logged in 
+-----------------------------------------------------------------------------------------**/
export default class PublicHome extends Component {

    // TBC
    // static propTypes = {
    //     isAuthentication : PropTypes.number.isRequired
    // }

    constructor(props){
        super(props);
    }


    /** Functions  ---------------------------------------------------*/


    render(){
        return(

           <div className="flex img-page w-full h-screen">
                <MainSigninForm />
           </div>
        );
    }
}


/** ---------------------------------------------------------------------------------------+
Name : MainSigninForm
Type : Class component
Author by : Napihups
Date of revision : 05-01-2019
Desc : This Components forms of the main signin. 
+-----------------------------------------------------------------------------------------**/
class MainSigninForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            rememberMeChecked : false
        }
    }

    /** Functions --------------------------------------- */
    _handleRmbMe = (e) => {
        this.setState({
            rememberMeChecked : e.target.checked ? true : false
        })
    }


    render(){
        return(
           <React.Fragment>
               <FormCard cardClass = 'signin-card' handleRmbMe = {this._handleRmbMe} />
           </React.Fragment>
                
        );
    }

}


/** ---------------------------------------------------------------------------------------+
Name : FormCard
Type : Functional component
Author by : Napihups
Date of revision : 05-01-2019
Desc : This Components is the card elements
+-----------------------------------------------------------------------------------------**/
const FormCard = ({...props}) => {

    /**Default properties for this functional component */
    let compProps = {
        cardClass : props.cardClass,
        handleRmbMe: props.handleRmbMe
    }

    return (    
        <div className="container p-5 signin-container">
            <div className={`box bg-white text-grey-darker shadow-lg rounded ${ compProps.cardClass }`}>
                <IntroSideCard />
                <FormSideCard handleRmbMe = {compProps.handleRmbMe}/>
            </div>
        </div>

    );

}

/** ---------------------------------------------------------------------------------------+
Name : IntroSideCard
Type : Functional component
Author by : Napihups
Date of revision : 05-01-2019
Desc : This Components is the left side of the cards which displaying introduction and some btns
+-----------------------------------------------------------------------------------------**/
const IntroSideCard = () => {

    return (
        <div className="col-md-5 border-r-1" >
            <div className="flex w-full py-6">
            <img src="./images/Logo_main_2.PNG" className="img-fluid logo-public-page" alt="Logo"/>
            </div>

            <div className="flex w-full mt-5 text-center" style={{marginTop: '30px'}}>
                <span className="text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </span>
            </div>           
            <div style={{marginTop: '50px', padding: "0 15px"}}>
                <div className="flex rounded p-6 create-acc-btn border-b-4 border-grey-dark" style={{marginTop: '20px'}}>
                    <i className="fas fa-chalkboard-teacher fa-2x flex-2"></i>
                    <p className="font-bold text-2xl ml-4 flex-1 ml-5">I'm a Trainer</p>
                </div>

                <div className="flex rounded p-6 create-acc-btn border-b-4 border-grey-dark" style={{marginTop: '20px'}}>
                    <i className="fas fa-user-graduate fa-2x flex-2"></i>
                    <p className="font-bold text-2xl ml-4 flex-1 ml-5">I'm a Student</p>
                </div>
            </div>
        </div>

    );

}


/** ---------------------------------------------------------------------------------------+
Name : FormSideCard
Type : Functional component
Author by : Napihups
Date of revision : 05-01-2019
Desc : This Components is the form display container for the signin user 
+-----------------------------------------------------------------------------------------**/
const FormSideCard = ({...props}) => {


    /**Default properties for this functional component */
    let compProps  = {
        handleRmbMe : props.handleRmbMe
    }

    return(
        <div className="col-md-7">
            <div className="flex justify-center text-white p-5 m-t-4" style={{marginRight:"80px"}}>
                <h3>Sign In to your Account</h3>
            </div>
            <div className ="signin-form">
                <div className="input-group input-group-lg input-dark my-4">
                    <span className="input-group-addon"><i className="fas fa-user"></i></span>
                    <input type="text" className="form-control" placeholder="Username or Email"/>
                </div>
                <div className="input-group input-group-lg input-dark my-4">
                    <span className="input-group-addon"><i className="fas fa-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                
                <label htmlFor="switcher-efah" 
                className="switcher switcher-sm switcher-secondary text-primary font-bold">
                    <input type="checkbox" id="switcher-efah" onChange = {(e) => compProps.handleRmbMe(e)}/>
                    <div className="switcher-indicator">
                        <div className="switcher-yes">YES</div>
                        <div className="switcher-no">NO</div>
                    </div>
                    <span className="ml-6">Remember me </span>
                </label>
                <div className="btn btn-emp btn-lg w-full mt-3">Sign in</div>

                <hr style={{paddingBottom: '30px'}}></hr>
                <h4 className="my-5 text-grey-dark text-center" >or sign in with</h4>


                <div className="btn btn-lg btn-google w-full my-3">
                    <i className="fab fa-google-plus-g mr-3"></i>Google
                </div>
                <div className="btn btn-lg btn-facebook w-full my-3">
                <i className="fab fa-facebook-f mr-3"></i>Facebook
                </div>
            </div>
        </div>
    );
}