import React , { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import components 
import GoogleAuthButton from './C_GoogleBtn';

export default class TeacherSignupModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            DATA_READY : true,
            UI_STATE : {
                modal : false,
                mSize : 'md'
            }
        }
    }


    render(){
        return(
            <React.Fragment>
                <Modal isOpen={this.state.UI_STATE.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                    Create a Teacher Account 
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


    toggle = () => {
        this.setState({
            UI_STATE : {
                modal : !this.state.UI_STATE.modal
            }
        })
    }
}