import React, { Component } from 'react';
import { connect } from 'react-redux';
import Store from '../Store';
import GoogleAuthButton from './GoogleAuthButton';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


//import actions api
import { redirectToGoogleFormAuth } from '../actions/authActions';

export default class LandingContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            bannerTextLineOne : "EFAH make it easier to",
            bannerTextLineTwo : "deliver training with a new online solutions",
            bannerTextLineThree : "all in one platform",
            btnVideoText : "Watch video !"
        }

        this.ssm = React.createRef();
    }

    toggleSSModal = () => {
        this.ssm.current.toggle();
    }

    render(){
        return(
            <React.Fragment>
            <div className="content body-content-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tythr">
                                <img src ="./images/boy.png" className="img-fluid" style = {{opacity : 1, width: "30%", height : "30%"}}/>
                                <img src ="./images/book.png" className="" style={{opacity: 1, width : "200px", height: "200px"}}/>
                                <h5 className="font-weight-semi-light">
                                        {this.state.bannerTextLineOne} <br /> {this.state.bannerTextLineTwo} <br /> {this.state.bannerTextLineThree}
                                </h5>
                                <hr className="keke4t" />
                                <button className="btn btn-lg btn-primary btn-pill py-2">
                                    <i className="fas fa-play mr-2"></i> {this.state.btnVideoText}
                                </button>
                            </div>
                        </div>
                        <div className ="col-md-6">
                            <div className="tythr">
                                <div style ={{textAlign : "left"}}>
                                    <h4 className="font-weight-light">Getting start ...</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div onClick={this.toggleSSModal} className="card card-body uygh" data-toggle="modal" data-target="#studentSignupModal">
                                            <i className="fas fa-user-graduate fa-2x text-primary thf"></i>
                                            <h5 className="text-black font-weight-bold mt-2 thf">I am a student</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='card card-body uygh' data-toggle="modal" data-target="#teacherSignupModal">
                                            <i className="fas fa-chalkboard-teacher fa-2x text-primary thf"></i>
                                            <h5 className="text-black font-weight-bold mt-2 thf">I am a Teacher</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4" style= {{textAlign : "left", fontSize: "22px"}}><p className="font-weight-light">Or have an account ?</p></div>
                            <div className="ta-left">
                                    <button className="btn btn-md btn-outline-primary btn-padding" style={{width: "300px"}}>Login now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <TeacherSignupModal /> */}
            <StudentSignupModal ref={this.ssm} uType = "STUDENT"/>
            </React.Fragment>
        );
    }
}

class StudentSignupModal extends Component {

    constructor(props){
        super(props);

        this.state = {
            modal : false,
            mSize : 'md'
        };

        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({
            modal : !this.state.modal
        })
    }



    render(){
        
        return(
            
            <React.Fragment>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                    Create a Teacher account
                    <i className="fas fa-chalkboard-teacher ml-4 text-primary"></i></ModalHeader>
                    <ModalBody className="text-center">
                          <GoogleAuthButton uType={this.props.uType} data-dismiss="modal" aria-label="Close"/>
                            <p className="font-weight-bold mb-1">Or</p>
                       <button className="btn btn-lg btn-info mb-0 mt-0" style={{width : '270px'}}><i className="fab fa-facebook-f mr-2"></i> Sign in with facebook</button>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter> 
                </Modal>

            </React.Fragment>

        );
    }
}


// class TeacherSignupModal extends Component {


//     componentWillMount() {

//     }

//     render(){
//         return (
//             <div className="modal fade" id="teacherSignupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document" style={{width : "600px"}}>
//                 <div className="modal-content">
//                     <div className="modal-header">
//                     <h5 className="modal-title font-weight-bold" id="exampleModalLabel">
//                         Create a Teacher account  
//                         <i className="fas fa-chalkboard-teacher ml-4 text-primary"></i> 
//                     </h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                     </div>
//                     <div className="modal-body">
//                         <form>
//                             <div className="form-group">      
//                                 <label>Username</label>
//                                 <input focus="true" className="form-control"/>
//                             </div>
//                             <div className="form-group">      
//                                 <label>Email</label>
//                                 <input type="email" className="form-control"/>
//                             </div> 
//                             <div className="form-group">      
//                                 <label>Password</label>
//                                 <input type="Password" className="form-control"/>
//                             </div>
//                             <div className="form-group">      
//                                 <label>Confirm Password</label>
//                                 <input type="Password" className="form-control"/>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="modal-footer">
//                     <button type="button" className="btn btn-secondary" data-dismiss="modal">cancel</button>
//                     <button type="button" className="btn btn-primary">Sign up</button>
//                     </div>
//                 </div>
//                 </div>
//             </div>

//         );
//     }
// }

// class StudentSignupModal extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             uType : "STUDENT"
//         }

//         this.modal = React.createRef();
//     }

//     componentDidMount(){
//         console.log(this.modal);
//     }
//     render(){
//         return (
//             <div ref={this.modal} className="modal fade display-none" id="studentSignupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document" style={{width : "600px"}}>
//                 <div className="modal-content">
//                     <div className="modal-header">
//                     <h5 className="modal-title font-weight-bold" id="exampleModalLabel">
//                         Create a Student account  
//                         <i className="fas fa-user-graduate ml-4 text-primary"></i>
//                     </h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                     </div>
//                     <div className="modal-body" style= {{textAlign : "center"}}>

//                         {/* <GoogleAuthButton uType={this.state.uType} data-dismiss="modal" aria-label="Close"/> */}
//                         <button className="btn btn-sm btn-primary" onClick={this.closeModal()}>TEST CLOSE</button>
                        
//                         <p className="font-weight-bold mb-1">Or</p>
//                         <button className="btn btn-lg btn-info mb-0 mt-0" style={{width : '270px'}}><i className="fab fa-facebook-f mr-2"></i> Sign in with facebook</button>

//                         {/* <form>
//                             <div className="form-group">      
//                                 <label>Username</label>
//                                 <input focus="true" className="form-control"/>
//                             </div>
//                             <div className="form-group">      
//                                 <label>Email</label>
//                                 <input type="email" className="form-control"/>
//                             </div>
//                             <div className="form-group">      
//                                 <label>Password</label>
//                                 <input type="Password" className="form-control"/>
//                             </div>
//                             <div className="form-group">      
//                                 <label>Confirm Password</label>
//                                 <input type="Password" className="form-control"/>
//                             </div>
//                         </form> */}
//                     </div>
//                     <div className="modal-footer">
//                     <button ref={this.btnClose} id ="closeStudentModal" type="button" className="btn btn-secondary" data-dismiss="modal">cancel</button>
//                     {/* <button type="button" className="btn btn-primary">Sign up</button> */}
//                     </div>
//                 </div>
//                 </div>
//             </div>

//         );
//     }

//     // UTIL FUNCTIONS 
//     closeModal(){
        
//     }
   
// }





// export default connect(Store => {
//     return {
//         napi : "hello"
//     }
// })(LandingContent)

