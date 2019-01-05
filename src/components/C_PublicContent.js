import React , { Component } from 'react';
import Store from '../Store';
// import GoogleAuthButton from './GoogleAuthButton';

//import components 
import TeacherSignupModal from './C_TeacherSignupModal';

export default class PublicContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            DATA_READY : true, // no nid fetch data for public page
            UI_STATE : {
                bannerTextLineOne : "EFAH make it easier to",
                bannerTextLineTwo : "deliver training with a new online solutions",
                bannerTextLineThree : "all in one platform",
                btnVideoText : "Watch video !"
            }
        }

        this.tsm = React.createRef();
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
                                        {this.state.UI_STATE.bannerTextLineOne} <br /> {this.state.UI_STATE.bannerTextLineTwo} <br /> {this.state.bannerTextLineThree}
                                </h5>
                                <hr className="keke4t" />
                                <button className="btn btn-lg btn-primary btn-pill py-2">
                                    <i className="fas fa-play mr-2"></i> {this.state.UI_STATE.btnVideoText}
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
                                        <div  className="card card-body uygh" data-toggle="modal" data-target="#studentSignupModal">
                                            <i className="fas fa-user-graduate fa-2x text-primary thf"></i>
                                            <h5 className="text-black font-weight-bold mt-2 thf">I am a student</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div onClick= {this.toggleSSModal} className='card card-body uygh' data-toggle="modal" data-target="#teacherSignupModal">
                                            <i className="fas fa-chalkboard-teacher fa-2x text-primary thf"></i>
                                            <h5 className="text-black font-weight-bold mt-2 thf">I am a Teacher</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="mt-4" style= {{textAlign : "left", fontSize: "22px"}}><p className="font-weight-light">Or have an account ?</p></div>
                            <div className="ta-left">
                                    <button className="btn btn-md btn-outline-primary btn-padding" style={{width: "300px"}}>Login now</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <TeacherSignupModal /> */}
            <TeacherSignupModal ref={this.tsm} uType = "TEACHER"/>
            </React.Fragment>
        );
    }


    toggleSSModal = () => {
        this.tsm.current.toggle();
    }
}