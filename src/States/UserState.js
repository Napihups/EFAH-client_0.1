// const userInitState = {
//     DATA_READY : false,
//     FETCH_STATUS : '',
//     DATA : {
//         _id : '',
//         uType : '',
//         publicUID : "",
//         publicName : '',
//         avatarUrl: "",
//         name : "",
//         email : ""
//     }
// }

// export function UserState(state = userInitState, action) {
    
//     //Logging
//     console.log('[LOG] : ' + "UserState Reducer is Invoked");
//     console.log('[LOG] : ' + "action -> ", action);
//     // Logger.debug("AuthState Reducer is Invoked");
//     switch(action.type){
//         case "FETCH_USER_SUCCESS" : {
//             return Object.assign({}, state, {
//                 DATA_READY : true,
//                 FETCH_STATUS : 'SUCCESS',
//                 DATA : {
//                     _id : action.payload._id,
//                     uType : action.payload.uType,
//                     publicUID : action.payload.publicUID,
//                     publicName : action.payload.publicName,
//                     avatarUrl : action.payload.imageUrl,
//                     name : action.payload.name,
//                     email : action.payload.email
//                 }
//             })
//         }

//         case "FETCH_USER_NOT_FOUND" : {
//             return Object.assign({}, state, {
//                 DATA_READY : true,
//                 FETCH_STATUS : 'USER_NOT_FOUND',
//             })
//         }

//         case "FETCH_USER_ERROR" : {
//             return Object.assign({}, state, {
//                 DATA_READY : true,
//                 FETCH_STATUS : 'FETCHING_ERROR',
//             })
//         }
//     }

//     return state;
// }

// // export function POST_InitUser()