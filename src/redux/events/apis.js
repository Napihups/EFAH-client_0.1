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
           
            let params = action.payload === null ? {} : action.payload;
            HTTP.get(url, {
                headers : createHeader(),
                params : params
            })
            .then((resp) =>{
                let data = resp.data;
                    if(data.success){
                        dispatch(onSuccess(data.payload));
                    } else {
                        dispatch(onError(data.payload));  
                    }
                } 
            )
            .catch((err) => {
                console.log(err);
                dispatch(onError(err))
            } )
        } 
        else if(method === 'POST'){

            let rPayload = action.payload;
            let headers = createHeader();
            console.log(url);
            HTTP.post(url, {rPayload} , {headers : headers} )
            .then((resp) => {
               
                let data = resp.data;
                if(data.success){
                   dispatch(onSuccess(data.payload))
                } else {
                    dispatch(onError(data.payload))
                }
            })
            .catch((err) => {
                console.error(err);
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