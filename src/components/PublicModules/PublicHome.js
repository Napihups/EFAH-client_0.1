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
class PublicHome extends Component {

    // TBC
    // static propTypes = {
    //     isAuthentication : PropTypes.number.isRequired
    // }

    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className="flex img-page w-full h-screen">
                
                <div className="container p-5 signin-box">
                    <div className="box bg-white text-grey-dark shadow-lg rounded">
                        <div className="col-md-5 text-grey-dark border-r-1 h-full bg-primary" >
                           <div className="flex w-full py-6">
                            <img src="./images/Logo_main.PNG" className="img-fluid logo-public-page" alt="Logo"/>
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
                        <div className="col-md-7 text-grey-dark">
                            <div className="flex justify-center bg- p-5 m-t-4">
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
                                <label className="custom-control custom-checkbox" for="custom-checkbox-3">
                                    <input type="checkbox" id="custom-checkbox-3" className="custom-control-input"/>
                                    <span className="custom-control-indicator"></span>
                                    remember me
                                </label>

                                <div className="btn btn-primary btn-lg w-full mt-3">Sign in</div>

                                <hr style={{paddingBottom: '30px'}}></hr>
                                <h4 className="my-5 text-grey-dark text-center" >or sign in with</h4>


                                <div className="btn btn-lg btn-google w-full my-3">
                                    <i className="fab fa-google-plus-g mr-3"></i>Google
                                </div>
                                <div className="btn btn-lg btn-facebook w-full my-3">
                                <i class="fab fa-facebook-f mr-3"></i>Facebook
                                </div>
                               

                            

                            </div>
                           
                        </div>

                    </div>
                </div>

           </div>
        );
    }
}

export default PublicHome;