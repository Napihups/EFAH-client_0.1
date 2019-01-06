import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './Store';
// import layoutcss from '../src/css/layout.css';
import AppComponent from './components/AppComponent';
// Mockup purpose 
// import MockupHomepage from './components/MockupHomePage';
import PublicHome from './components/PublicModules/PublicHome';

ReactDOM.render(
    <Provider store = {Store}>
        <AppComponent />
    </Provider>,
    document.getElementById('root')
)

//only for testing 
// ReactDOM.render(
//     <PublicHome />, document.getElementById('root')
// )


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();









