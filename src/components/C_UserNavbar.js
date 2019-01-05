import React , { Component } from 'react';
import '../css/userNavbar.css'


  
  

class UserNavbar extends Component {

    constructor(props){
        super(props)
        this.state = {
            userType : this.props.user.uType === 'TEACHER' ? "fas fa-chalkboard-teacher" : "fas fa-user-graduate"
        }
        
    }

    render() {
        const user = this.props.user;
        console.log(user);
        return (
            <div className="main-header">
            <div className="row">
              <div className="col-md-6 mt-2 p-2" >
                <div className="group float-left" >
                  <div>
                    <img src= {user.imageUrl} className="img-fluid" />
                  </div>
                </div>
                <span className="float-left username">{user.name}</span>
                <span className="float-left user-type-icon"><i className={this.state.userType}></i> </span>
                 <div className="float-left uid-tag"><span className="badge badge-secondary mr-2">ID</span>{user.uId}</div>
              </div>
      
              <div className="col-md-6 mt-2 p-2" >
      
                <div className="user-control float-right">
                  {/* <button className="btn"><i className="fas fa-cog"></i></button> */}
                  {/* <button className="btn"><i className="far fa-user-circle"></i></button> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3" >
                <div className="module-title">
                  <h3>Dashboard</h3>
                </div>
              </div>
            </div>
       
          </div>
        );
    }
       
    
}

  
export default UserNavbar;