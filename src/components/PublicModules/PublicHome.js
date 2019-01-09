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
Properties : {
    isAuthentication,
    match
}
+-----------------------------------------------------------------------------------------**/
export default class PublicHome extends Component {



    constructor(props){
        super(props);
    }


    /** Functions  ---------------------------------------------------*/
    _renderDisplay = () => {
        return(
            <div className="flex img-page w-full h-screen">
                {this._handleFormCards()}
            </div>
        );
    }


    _handleFormCards = () => {
        switch(this.props.match.path){
            case '/auth' : return <MainSigninForm />
            case '/signup-student': return <h1>Sign up for student</h1>
            case '/signup-teacher': return <h1>Sign up for teacher</h1>
        }
    }

    render(){  
        console.log(this.props.match);   
        return(this.props.isAuthenticated ? <Redirect to = "/user/" /> : this._renderDisplay());
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

    /** Functions associated --------------------------------------- */
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
            <div className={`box bg-white text-grey-darker shadow-lg rounded-lg ${ compProps.cardClass }`}>
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
Function Props : [
    handleTeacherSignupPage -> to handle rendering the page when user click on 'i am a teacher' button
    handleStudentSignupPage -> to handle rendering the page when user click on 'i am a Student' button
]
+-----------------------------------------------------------------------------------------**/
const IntroSideCard = ({...props}) => {

    let compProps = {
        handleTeacherSignupPage : props.handleTeacherSignupPage,
        handleStudentSignupPage : props.handleStudentSignupPage
    }

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

    let compProps  = {
        handleRmbMe : props.handleRmbMe
    }

    return(
        <div className="col-md-7 text-grey-dark">
            <div className="flex justify-left p-5 m-t-4" style={{marginLeft:"30px"}}>
                <h3>Sign in with</h3>
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
                
                <label htmlFor="switcher-primary" 
                className="switcher switcher-sm switcher-primary">
                    <input type="checkbox" id="switcher-primary" onChange = {(e) => compProps.handleRmbMe(e)}/>
                    <div className="switcher-indicator">
                        <div className="switcher-yes">YES</div>
                        <div className="switcher-no">NO</div>
                    </div>
                    <span className="ml-0 font-bold">Remember me </span>
                </label>
                <div className="btn btn-emp btn-lg w-full signin-btn">Sign in</div>

                <hr className="form-divider rounded-full"></hr>
                <h4 className="my-5 text-center" >or sign in with</h4>
                <div className="flex p-5 justify-center">
                    <div className="auth-btn bg-google float-left mx-2">
                        <i className="fab fa-google-plus-g"></i>
                    </div>
                    <div className="auth-btn bg-facebook float-left mx-2">
                        <i className="fab fa-facebook-f mr-3"></i>
                    </div>
                </div>

            </div>
        </div>
    );
}