import React , { Component } from 'react';
import '../css/bootstrap.css';
import '../css/pixeladmin.css';
import '../css/widgets.min.css';
import '../css/custom.css'; 
import '../../node_modules/tailwindcss/dist/tailwind.min.css';

class MockupHomepage extends Component {

    componentDidMount(){
        // pixelAdminJs.remove();
    }


    render(){
        return(
            <div style = {{position : 'relative', minHeight: '100vh', overflow: 'hidden'}} 
            className="clearfix">
            <nav className="px-nav px-nav-left left-nav-border" id="px-nav-box-left">
              <button type="button" className="px-nav-toggle" data-toggle="px-nav">
                <span className="px-nav-toggle-arrow"></span>
                <span className="navbar-toggle-icon"></span>
                {/* <span className="px-nav-toggle-label" style={{fontSize: "11px"}}>HIDE MENU</span> */}
              </button>
            
              <ul className="px-nav-content">
                <div className="px-nav-box p-y-2 p-x-3 border-b-2 border-grey-light">
                  <div className="flex profile-box">
                    <div className = "avatar-box">
                        <img src="http://i.pravatar.cc/300?1" className="img-fluid" /> 
                    </div>
                    <div className="profile-info bg-">
                        <span className="user-name text-grey-darker text-2xl font-weight-bold flex">Hanafi Bin</span>
                        <span className="user-name text-grey-dark font-weight-light flex">#125446</span>
                

                    </div>
                  </div>
                  <div className="flex bg- py-5">
                    <div className="btn-group mx-auto">
                        <button type="button" className="btn btn-white rounded-lg">
                        <i className="fas fa-cog"></i>
                        </button>   
                        <button type="button" className="btn btn-white rounded-lg">
                        <i className="fas fa-chalkboard-teacher"></i>
                        </button>
                        <button type="button" className="btn btn-white rounded-lg">
                        <i className="fas fa-inbox"></i>
                        </button>
                        <button type="button" className="btn btn-danger rounded-lg">
                        <i className="fas fa-power-off"></i>
                        </button> 
                    </div>
                  </div>
                </div>
                <li className="px-nav-item active">
                  <a href="#"><i className="fas fa-chalkboard"></i><span className="px-nav-label m-l-2 font-weight-bold">Classes</span></a>
                </li>
                <li className="px-nav-item">
                  <a href="#"><i className="fas fa-graduation-cap"></i><span className="px-nav-label m-l-2 font-weight-bold">Report</span></a>
                </li>
               
                <div className="px-nav-box p-y-2 p-x-3 b-t-1">
                  <button type="button" className="btn btn-lg btn-primary btn-block b-a-0 rounded-full">
                  Create work <i className="ml-5 fas fa-pen-alt"></i>
                  </button>
                </div>
              </ul>
            </nav>
            <nav className="navbar px-navbar">
              <div className="navbar-header"><a className="navbar-brand" href="#">Brand</a></div>
              <button type="button" className="navbar-toggle collapsed"><i className="navbar-toggle-icon"></i></button>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
                        aria-haspopup="true" aria-expanded="true">
                            <i className="fas fa-comments"></i>
                            <span className="px-navbar-label label label-danger">3</span>
                        </a>
                        <ul className="dropdown-menu pull-right custom-nav-dropdown">

                            <div className="scrollable-dropdown-box">
                                <li className="box text-grey-dark">
                                    <div className="box-row m-0 p-0">
                                        <div className="box-cell px-1 py-2">
                                            <img src="http://i.pravatar.cc/300?3" alt className="user-avatar rounded-full pull-xs-left"/>
                                            <div className="user-msg-box bg- pull-xs-left">
                                            <span className="font-bold">Napihup 24 mins ago</span><br/>
                                            <span className="msg-snipp font-italic">2 messages ... </span>
                                            </div>
                                            <i className="fas fa-user-graduate pull-xs-right mt-5 mr-3"></i> 
                                        </div> 
                                    </div>
                                </li>
                                <li className="box text-grey-dark">
                                    <div className="box-row m-0 p-0">
                                        <div className="box-cell px-1 py-2">
                                            <img src="http://i.pravatar.cc/300?2" alt className="user-avatar rounded-full pull-xs-left"/>
                                            <div className="user-msg-box bg- pull-xs-left">
                                            <span className="font-bold">Napihup 24 mins ago</span><br/>
                                            <span className="msg-snipp font-italic">4 messages ... </span>
                                            </div>
                                            <i className="fas fa-user-graduate pull-xs-right mt-5 mr-3"></i> 
                                        </div> 
                                    </div>
                                </li> 
                                <li className="box text-grey-dark">
                                    <div className="box-row m-0 p-0">
                                        <div className="box-cell px-1 py-2">
                                            <img src="http://i.pravatar.cc/300?2" alt className="user-avatar rounded-full pull-xs-left"/>
                                            <div className="user-msg-box bg- pull-xs-left">
                                            <span className="font-bold">Napihup 24 mins ago</span><br/>
                                            <span className="msg-snipp font-italic">1 messages ... </span>
                                            </div>
                                            <i className="fas fa-user-graduate pull-xs-right mt-5 mr-3"></i> 
                                        </div> 
                                    </div>
                                </li> 
                                <li className="box text-grey-dark">
                                    <div className="box-row m-0 p-0">
                                        <div className="box-cell px-1 py-2">
                                            <img src="http://i.pravatar.cc/300?3" alt className="user-avatar rounded-full pull-xs-left"/>
                                            <div className="user-msg-box bg- pull-xs-left">
                                            <span className="font-bold">Napihup 24 mins ago</span><br/>
                                            <span className="msg-snipp font-italic">2 messages ... </span>
                                            </div>
                                            <i className="fas fa-user-graduate pull-xs-right mt-5 mr-3"></i> 
                                        </div> 
                                    </div>
                                </li>
                                <li className="box text-grey-dark">
                                    <div className="box-row m-0 p-0">
                                        <div className="box-cell px-1 py-2">
                                            <img src="http://i.pravatar.cc/300?2" alt className="user-avatar rounded-full pull-xs-left"/>
                                            <div className="user-msg-box bg- pull-xs-left">
                                            <span className="font-bold">Napihup 24 mins ago</span><br/>
                                            <span className="msg-snipp font-italic">4 messages ... </span>
                                            </div>
                                            <i className="fas fa-user-graduate pull-xs-right mt-5 mr-3"></i> 
                                        </div> 
                                    </div>
                                </li> 
                                <li className="box text-grey-dark">
                                    <div className="box-row m-0 p-0">
                                        <div className="box-cell px-1 py-2">
                                            <img src="http://i.pravatar.cc/300?2" alt className="user-avatar rounded-full pull-xs-left"/>
                                            <div className="user-msg-box bg- pull-xs-left">
                                            <span className="font-bold">Napihup 24 mins ago</span><br/>
                                            <span className="msg-snipp font-italic">1 messages ... </span>
                                            </div>
                                            <i className="fas fa-user-graduate pull-xs-right mt-5 mr-3"></i> 
                                        </div> 
                                    </div>
                                </li> 
                            </div>

                            <li className="box text-grey-dark">
                                <div className="box-row">
                                    <div class="btn btn-primary w-full">view more</div>
                                </div>
                            </li>                              
                        
                   
                            {/* <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li> */}
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-bell"></i>
                            <span className="px-navbar-label label label-danger">5</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="http://i.pravatar.cc/300?1" alt className="px-navbar-image"/>
                        </a>
                    </li>  
                </ul>
              </div>
            </nav>
        
            <div className="px-content">
                <ol className="breadcrumb page-breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Library</a></li>
                    <li className="active">Data</li>
                </ol>
                <div className = "page-header ">
                    <h3 className = "text-grey-darker"><i className="fas fa-chalkboard"></i> Classes </h3>          
                </div>
                <ul className="nav nav-tabs nav-pills py-2">
                  
                    <li>
                        <select className="custom-select form-control h-16 w-full">
                            <option defaultValue>All</option>
                            <option value="1">Favourite</option>
                            <option value="2">Watched</option>
                            <option value="3">Pinned</option>
                        </select>
                    </li>
                    <li>
                        <input type="text" spellCheck="false" className="form-control rounded h-16 w-full" placeholder="file by topics"/>
                    </li>
                    <li>
                        <div className="btn btn-lg btn-primary">Filter</div>
                    </li>
                    <li>
                        <input type="text" spellCheck="false" className="form-control rounded h-16 w-full" placeholder="Search class"/>
                    </li>
                    <li>
                        <div className="btn btn-lg btn-primary"><i className="fas fa-search-location"></i></div>
                    </li>
                    
                    <div className="btn btn-lg btn-emp rounded float-right ml-0 btn-padding">Create Class 
                    </div>
                
                </ul>

                <div className="classgroup-panel">
                    <div className="row">
                        
                        <div className="col-md-4">
                            <div className="panel box rounded">
                                <div className="box-row">
                                    <div className="box-cell p-t-2 p-x-2 text-grey-dark">
                                        <span className="text-2xl font-weight-bold">
                                            Bluevbird AIA-ENG
                                        </span>                                      
                                        <i className="fas fa-thumbtack pull-xs-right mx-2 icon-control"></i>
                                        <i className="far fa-heart pull-xs-right mx-2 icon-control"></i>
                                        <i className="far fa-flag pull-xs-right mx-2 icon-control"></i>
                                    </div>
                                </div> 
                                <div className="box-row">
                                    <div className="box-cell p-x-2">
                                        <span className=" font-bold text-primary">25 students</span>
                                    </div>
                                </div>
                                <div className="box-row bg-">
                                    <div className="box-cell p-y-1 p-x-2 bg-">
                                        <a href="#" className="label label-grey label-tag mx-2 pull-xs-left">IT</a>
                                        <a href="#" className="label label-grey label-tag pull-xs-left">Java</a>
                                        <span className="flex-1 label label-warning pull-xs-right">20 new items !</span>
                                    </div>
                                </div>
                                <div className="box-row bg-">
                                    <div className="box-cell p-a-1">
                                        <div className="btn-group pull-xs-right">
                                            <div className="btn btn-outline">
                                                <i className="fas fa-pencil-alt"></i>
                                            </div>
                                            <div className="btn btn-outline">
                                            <i className="fas fa-user-plus"></i>
                                            </div>
                                            <div className="btn btn-primary">Go <i className="fas fa-arrow-right ml-2"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div> 
                        <div className="col-md-4">
                            <div className="panel box rounded">
                                <div className="box-row">
                                    <div className="box-cell p-t-2 p-x-2 text-grey-dark">
                                        <span className="text-2xl font-weight-bold">
                                            Lavendar Boyz
                                        </span>                                      
                                        <i className="fas fa-thumbtack pull-xs-right mx-2 icon-control"></i>
                                        <i className="far fa-heart pull-xs-right mx-2 icon-control"></i>
                                        <i className="far fa-flag pull-xs-right mx-2 icon-control"></i>
                                    </div>
                                </div>
                                <div className="box-row">
                                    <div className="box-cell p-x-2">
                                        <span className=" font-bold text-primary">21 students</span>
                                    </div>
                                </div>
                                <div className="box-row bg-">
                                    <div className="box-cell p-y-1 p-x-2 bg-">
                                        <a href="#" className="label label-grey label-tag mx-2 pull-xs-left">IT</a>
                                        <a href="#" className="label label-grey label-tag pull-xs-left">Java</a>
                                        <span className="flex-1 label label-danger pull-xs-right">30 new items !</span>
                                    </div>
                                </div>
                                <div className="box-row bg-">
                                    <div className="box-cell p-a-1">
                                        <div className="btn-group pull-xs-right">
                                            <div className="btn btn-outline">
                                                <i className="fas fa-pencil-alt"></i>
                                            </div>
                                            <div className="btn btn-outline">
                                            <i className="fas fa-user-plus"></i>
                                            </div>
                                            <div className="btn btn-primary">Go <i className="fas fa-arrow-right ml-2"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                       
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default MockupHomepage;