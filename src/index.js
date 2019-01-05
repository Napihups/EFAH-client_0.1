import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './Store';
// import layoutcss from '../src/css/layout.css';
import App from './components/C_App';
// Mockup purpose 
import MockupHomepage from './components/MockupHomePage';

// ReactDOM.render(
//     <Provider store = {Store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )

ReactDOM.render(
    <MockupHomepage />, document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();









