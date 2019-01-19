/** Imports */
import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import Store from '../../Store';
import { signinUser } from '../../redux/events/login';

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
                {this._handleFormToDisplay()}
            </div>
        );
    }
    _handleFormToDisplay = () => {
        switch(this.props.match.path){        
            case '/auth' : return <SigninForm />
            case '/signup-student': return <SignupForm accType = 'STUDENT'/>
            case '/signup-teacher': return <SignupForm accType = 'TEACHER'/>
        }
    }

    render(){     
        return(this.props.isAuthenticated ? <Redirect to = "/user/" /> : this._renderDisplay());
    }
}


/** ---------------------------------------------------------------------------------------+
Name : SigninForm
Type : Class component
Author by : Napihups
Date of revision : 05-01-2019
Desc : This Components forms of the main signin. 
+-----------------------------------------------------------------------------------------**/
class SigninForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            rememberMeChecked : false,
            formClass : 'signin-card',
            usernameInput : '',
            passwordInput : ''
        }
    }

    /** Functions --------------------------------------- */
    _handleRmbMe = (e) => {
        this.setState({
            rememberMeChecked : e.target.checked ? true : false
        })
    }

    _handleInputChange (event) {
        this.setState({ [event.target.name]: event.target.value })
        this._validateSigninForm();
    }

    _handleLogin = (e) => {
        e.preventDefault();
        let credentials = {
            username : this.state.usernameInput,
            password : this.state.passwordInput
        }

        Store.dispatch(signinUser(credentials));

    }

    _validateSigninForm = () => {
        console.log("form is validating ");
    }

    render(){
        return(
            <React.Fragment>
                 <div className="container p-5 signin-container">
                    <div className={`box bg-white text-grey-darker shadow-lg rounded-lg ${ this.state.formClass }`}>
                        <IntroSideCard />
                        {this.displaySignInForm()}
                    </div>
                </div>
            </React.Fragment>
                
        );
    }


    /** UI Display methods */
    displaySignInForm = () => {
        return(
            <div className="col-md-7 text-grey-dark">
                <div className="flex justify-left p-5 m-t-4" style={{marginLeft:"30px"}}>
                    <h3>Sign in with</h3>
                </div> 
                <div className ="signin-form">      
                    <div className="input-group input-group-lg input-dark my-4">
                        <span className="input-group-addon"><i className="fas fa-user"></i></span>
                        <input type="text" name="usernameInput" className="form-control" placeholder="Username or Email" 
                        onChange={(e) => {this._handleInputChange(e)}}/>
                    </div>
                    <div className="input-group input-group-lg input-dark my-4">
                        <span className="input-group-addon"><i className="fas fa-lock"></i></span>
                        <input type="password" name="passwordInput" className="form-control" placeholder="Password" 
                        onChange={(e) => {this._handleInputChange(e)}}/>
                    </div>
                    
                    <label htmlFor="switcher-primary" 
                    className="switcher switcher-sm switcher-primary">
                        <input type="checkbox" id="switcher-primary" onChange = {(e) => this._handleRmbMe(e)}/>
                        <div className="switcher-indicator">
                            <div className="switcher-yes">YES</div>
                            <div className="switcher-no">NO</div>
                        </div>
                        <span className="ml-0 font-bold">Remember me </span>
                    </label>
                    <div className="btn btn-emp btn-lg w-full signin-btn" onClick={this._handleLogin}>Sign in</div>

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
                <Link to="/signup-teacher">
                    <div className="flex rounded p-6 create-acc-btn border-b-4 border-grey-dark" style={{marginTop: '20px'}}>
                        <i className="fas fa-chalkboard-teacher fa-2x flex-2"></i>
                        <p className="font-bold text-2xl ml-4 flex-1 ml-5">I'm a Teacher</p>
                    </div>
                </Link>
                <Link to="/signup-student">
                    <div className="flex rounded p-6 create-acc-btn border-b-4 border-grey-dark" style={{marginTop: '20px'}}>
                        <i className="fas fa-user-graduate fa-2x flex-2"></i>
                        <p className="font-bold text-2xl ml-4 flex-1 ml-5">I'm a Student</p> 
                    </div>
                </Link>
            </div>
        </div>

    );

}





/** ---------------------------------------------------------------------------------------+
Name : SignupForm
Type : Class component
Author by : Napihups
Date of revision : 09-01-2019
Desc : This Components forms of the signup, for Student. 
Properties : {
    accType : String 
}
+-----------------------------------------------------------------------------------------**/
class SignupForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            formClass : 'signup-form',
            fullNameInputProp : {
                iconClass : 'fas fa-exclamation-circle',
                inputType: 'text',
                placeHolder : 'Full name'
            },
            emailInputProp : {
                iconClass : 'fas fa-at',
                inputType: 'email',
                placeHolder : 'Email'
            },
            mobileInputProp : {
                iconClass : 'fas fa-mobile-alt',
                inputType: 'text',
                placeHolder : 'Mobile no'
            },
            userNameInputProp : {
                iconClass : 'far fa-user',
                inputType: 'text',
                placeHolder : 'Username'
            },
            passwordInputProp : {
                iconClass : 'fas fa-unlock-alt',
                inputType: 'password',
                placeHolder : 'Password'
            }
        }
        this.inputFullNameRef = React.createRef();
    }

    /** Lifecycle hooks ---------------------------------- */
    componentDidMount(){
        this.inputFullNameRef.current.focus();
        
    }


     /** Functions --------------------------------------- */
     _displayFormInput =(props, ref) => {

        const { iconClass, inputType, placeHolder } = props;
        return(
            <div className="page-signup-form-group form-group form-group-lg input-dark">
                <div className="input-icon text-grey-light mr-3"> <i className={iconClass}></i></div>
                <input ref={ref} className="form-control page-signup-form-control" type={inputType} placeholder={placeHolder}/>
            </div>
        )
     }

    render(){
        return(
            <React.Fragment>
            <div className="container bg-">
                <div className="signup-box bg-primary rounded-lg shadow-lg">
                    <div className="flex flex-col bg- sign-up-form-header justify-center">
                    <div className="text-white text-center px-2 py-2 m-1">
                    Create a {this.props.accType === 'STUDENT' ? 'Student' : 'Teacher'} account
                    </div>
                    <div className="text-white px-2 py-2 m-1">
                       <div className="icon-header bg- text-center mx-auto">
                       <i className={this.props.accType === 'STUDENT' ? "fas fa-user-graduate" :"fas fa-chalkboard-teacher"}></i>
                       </div>
                    </div>
                        

                    </div>
                    <div className="panel panel-body shadow-lg rounded-lg justify-center">

                        {this._displayFormInput(this.state.fullNameInputProp, this.inputFullNameRef)}
                        {this._displayFormInput(this.state.emailInputProp)}
                        {this._displayFormInput(this.state.mobileInputProp)}
                        {this._displayFormInput(this.state.userNameInputProp)}
                        {this._displayFormInput(this.state.passwordInputProp)}

                        <div className="flex m-4">
                            <label className="custom-control custom-checkbox text-grey-darker" for="custom-checkbox-4">
                            <input type="checkbox" id="custom-checkbox-4" className="custom-control-input"/>
                            <span className="custom-control-indicator"></span>
                            I agree with the <span className="text-primary font-bold">Terms & Conditions</span>
                            </label>
                        </div>
                
                    </div>

                    <div className="flex">
                        <div className="flex-1 p-2">
                            <div className="btn btn-emp btn-lg btn-padding-1">Register</div>               
                        </div>
                        <div className="flex-1 p-2 text-right"> 
                            <Link to="/auth">
                                <div className="btn btn-link text-white btn-lg"> 
                                <i className="fas fa-chevron-left"></i> back 
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>  
            </React.Fragment>
        );
    }

}