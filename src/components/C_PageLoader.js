import React from 'react';

export default class PageLoader extends React.Component {
    render(){
        return(
            <div className ="container" style ={{marginTop : '300px'}}>
                <div className="row" style = {{textAlign: "center"}}>
                    <div className="col-md-12" style= {{textAlign: "center"}}>
                        <i className="fas fa-spinner fa-pulse fa-4x" 
                        style ={{color : "rgba(34.90196078431372%,12.15686274509804%,77.25490196078432%,0.483)"}}></i>
                    </div>
                </div>
            </div>     
        );
    }
}