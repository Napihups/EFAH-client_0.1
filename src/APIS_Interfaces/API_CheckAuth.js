// import { getCookieToken } from '../utils/cookieUtils';

// export default function checkAuth() {
//     return function(dispatch) {
//         //check if token available in cookies
//        let token = getCookieToken();
//        console.log(token);
//        if(token === undefined) {
//            dispatch({
//                type : "CHECK_AUTH_FAILED", 
//                payload : undefined
//            })
//        } else {
//            dispatch({
//                type : "CHECK_AUTH_SUCCESS",
//                payload : token
//            })
//        }
//     }
// }