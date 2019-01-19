/**
 * Event : API request
 * Author by : Napihup
 ----------------------------------------------------------------*/

 /** required imports */
import { createHeader } from '../../utils/requestUtil';
import HTTP from 'axios';

export const API_REQUEST = '[API request] requesting'

 /**
  * [Actions]
  */
const apiRequest = (method, url, body, onSuccess, onError) => ({
    type : API_REQUEST,
    payload : body,
    meta: {method, url, onSuccess, onError}
});



 /**
  * [MIDDLEWARES]
  */
const api = ({dispatch}) => next => action => {

    if(action.type === API_REQUEST) {
        const { method, url, onSuccess, onError} = action.meta;

        if(method === 'GET'){
            HTTP.get(url, {headers : createHeader()})
            .then((resp) =>{
                let data = resp.data;
                    if(data.success){
                        dispatch(onSuccess(data.payload));
                    } else {
                        dispatch(onError(data.payload));  
                    }
                } 
            )
            .catch((err) =>  dispatch(onError(err)))
        } 
        else if(method === 'POST'){

            let data = action.payload;
            HTTP.post(url, {data} , {headers : createHeader()} )
            .then((resp) => {
               
                let data = resp.data;
                if(data.success){
                   dispatch(onSuccess(data.payload))
                } else {
                    dispatch(onError(data.payload))
                }
            })
            .catch((err) => {
                dispatch(onError(err))
            })
        }
    }
    return next(action)
}

/** exports modules */
export const APIMW = [api];

export const ApiACTIONS = {
    apiRequest : apiRequest
}