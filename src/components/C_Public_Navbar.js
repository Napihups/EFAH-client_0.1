import React , { Component } from 'react';

export default class PublicNavbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            DATA_READY : true, // no need to fecth anything on public
            UI_STATE : {
                logoUrl : '/images/efah1.PNG'
            }
        }
    }

    render(){
        return(
            <React.Fragment>
            <main className="" style={{width : "100%"}}>
               <div className="main-navbar sticky-top bg-white c-navbar">
                   <nav className="navbar navbar-expand-lg navbar-light bg-white nav-content-wrap">
                       <a href="https://designrevision.com/docs/shards/cards.html" className="logo" >
                           <img src= {this.state.UI_STATE.logoUrl} className="img-fluid" alt="Cannot access Images"/>
                       </a>

                       <button className="navbar-toggler" type="button" data-toggle="collapse" 
                       data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                       aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                       </button>

                       <div className="collapse navbar-collapse" id="navbarSupportContent">
                           <ul className="navbar-nav ml-auto font-weight-bold uyhgt">
                                <li className="nav-item">
                                   <a  href="" className="nav-link">Pricing</a>
                               </li>
                               <li className="nav-item">
                                   <a  href="" className="nav-link">Contribution</a>
                               </li>
                               <li className="nav-item">
                                   <a href="" className="nav-link">Learn more</a>
                               </li>
                               {/* <li className="nav-item">
                                   <a href="#" className="nav-link">Sign up</a>
                               </li> */}
                               {/* <li className="nav-item">
                                   <button  onClick={this.props.toggleLogin} className="btn btn-primary btn-pill btn-padding font-weight-bold">
                                           Login
                                   </button>
                               </li> */}
                           </ul>
                       </div>
                       
                   </nav>
               </div>
           </main>
       </React.Fragment>
        );
    }
}