// import a from 'axios';

// import { saveCookie } from '../utils/cookieUtils';
// import { createHeader } from '../utils/requestUtil';

// export function getUserInfo() {
//     // let token = cookieString.split(';')[1];
//     return function(dispatch) {
//         a.get('http://localhost:5000/user/', {headers : createHeader()})
//         .then(resp => {
//             if(resp.data.success) {
//                 dispatch({
//                     type : "FETCH_USER_SUCCESS",
//                     payload : resp.data.payload
//                 })
//             }
//             else {
//                 dispatch({
//                     type : "FETCH_USER_NOT_FOUND",
//                     payload : "User not found in Database"
//                 })
//             }
//         })
//         .catch(err => {
//             dispatch({
//                 type : "FETCH_USER_ERROR",
//                 payload : err
//             })
//         })
//     }
// }

// // <code>This will return JWT token if succeed //
// export function loginGoogleUser(user) {
//     return function(dispatch) {
//         a.post('http://localhost:5000/auth/google', {user})
//         .then(resp => {
//             let data = resp.data;
//             console.log(data);
//             if(data.success){
//                 //saved to cookies
//                 saveCookie(data.payload);
//                 dispatch({
//                     type: "LOGIN_SUCCESS",
//                     payload : data.payload
//                 })
//                 dispatch(getUserInfo());
//             } else {
//                 dispatch({
//                     type: "LOGIN_FAILED",
//                     payload : data.payload
//                 })
//             }
//         })
//         .catch(err => {
//             dispatch({
//                 type: "LOGIN_ERROR",
//                 payload: err
//             })
//         })
//     }
// }

