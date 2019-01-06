import React from 'react';

export default class PageLoader extends React.Component {
    render(){
        return(
            <div className ="container" style ={{marginTop : '300px'}}>
                <div className="row" style = {{textAlign: "center"}}>
                    <div className="col-md-12" style= {{textAlign: "center"}}>
                        <i className="fas fa-spinner fa-pulse fa-4x" 
                        style ={{color : "rgba(0, 137, 123, 0.692)"}}></i>
                    </div>
                </div>
            </div>     
        );
    }
}