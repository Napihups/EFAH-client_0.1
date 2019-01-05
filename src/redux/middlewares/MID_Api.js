import { API_REQUEST } from '../actions/ACT_api';
import a from 'axios';
import { createHeader } from '../../utils/requestUtil';
// import { processUserData } from './MID_User';
import { loadedUser } from '../actions/ACT_ui';

export const api = ({dispatch}) => next => action => {


    if(action.type === API_REQUEST) {
        const { method, url, onSuccess, onError} = action.meta;

        if(method === 'GET'){
            a.get(url, {headers : createHeader()})
            .then((resp) =>{
                    console.log(onSuccess)
                    if(resp.data.success){
                        dispatch({type : onSuccess, payload : resp.data.payload})
                        dispatch(loadedUser());
                    } else {
                        dispatch({type : onError, payload : resp.data.payload});
                        dispatch(loadedUser());
                    }
               
                } 
            )
            // .then((data) => {
            //     dispatch(processUserData(onSuccess));
            // })
            .catch((err) => dispatch({type : onError, payload : err}))
        } 
        else if(method === 'POST'){
            let user = action.payload;
            a.post(url, {user} )
            .then((resp) => {
                // console.log(resp);
                let data = resp.data;
                if(data.success){
                   dispatch(onSuccess(data.payload))
                } else {
                    dispatch(onError(data.payload))
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return next(action)
}

export const APIMiddleware = [api];