// const initialState = {
//     isAuthenticated: false,
//     token: undefined
// }


// export default function AuthState(state = initialState, action) {
    
//     //Logging
//     console.log('[LOG] : ' + "AuthState Reducer is Invoked");
//     console.log('[LOG] : ' + "action -> ", action);
//     // Logger.debug("AuthState Reducer is Invoked");

//     switch(action.type){
//         case "CHECK_AUTH_SUCCESS" : {
//             return Object.assign({}, state, {
//                 isAuthenticated: true,
//                 token : action.payload
//             })
//         }

//         case "CHECK_AUTH_FAILED" : {
//             return Object.assign({}, state, {
//                 isAuthenticated: false,
//                 token : undefined
//             })
//         }

//         case "CHECK_AUTH_ERROR" : {
//             return Object.assign({}, state, {
//                 isAuthenticated: false,
//                 token: undefined
//             })
//         }

//         case "LOGIN_SUCCESS" : {
//             return Object.assign({}, state, {
//                 isAuthenticated: true,
//                 token : action.payload
//             })
//         }
//     }

//     return state;
// }