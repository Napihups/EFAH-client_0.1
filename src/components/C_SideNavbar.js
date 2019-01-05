import React , { Component } from 'react';
import '../css/SideNavbar.css';

class SideNavbar extends Component {

    render(){
        return (
            <div className="sidenav">
                <div className="logo">
                    <img src= "/images/aaa.PNG" className="img-fluid aaa"/>
                </div>
                <ul className="items">
                <li className="active">
                    <div className="item">
                    <i class="material-icons">
                    account_circle
                    </i>
                    <span className="item-text">Profile</span>
                    </div>
                </li>
                <li className="active">
                    <div className="item">
                    <i className="material-icons">
                    graphic_eq
                    </i>
                    <span className="item-text">Dashboard</span>
                    </div>
                </li>
                <li className="">
                    <div className="item">

                    <i className="material-icons">
                        people_outline
                        </i>
                    <span className="item-text">Class Group</span>
                    </div>
                </li>
                <li className="">
                    <div className="item">

                    <i className="material-icons">
                        dashboard
                        </i>
                    <span className="item-text">Report</span>
                    </div>
                </li>
                <li className="">
                    <div className="item">

                    <i className="material-icons">
                        description
                        </i>
                    <span className="item-text">Exam/Test</span>
                    </div>
                </li>
                </ul>
            </div>
        );
    }
}

export default SideNavbar;