export const GET_TOKEN = '[Auth] Get Auth Token in Cookies';
export const FETCH_TOKEN_SUCCESS = '[Auth] Fetch Token success';
export const FETCH_TOKEN_ERROR = '[Auth] Fetch Token error'
export const CREATE_TOKEN_IN_PROGRESS = '[Auth] Token Creation in Progress';
export const CREATE_TOKEN_SUCCESS = '[Auth] Token Creation Success';
export const CREATE_TOKEN_ERROR = '[Auth] Token Creation error';
export const SAVE_TOKEN_PROGRESS = '[Auth] Saving token to cookies';
export const SAVE_TOKEN_DONE = '[Auth] Token saved';
export const SAVE_TOKEN = '[Auth] Token saving into Cookies';


export const getToken = () => ({
    type : GET_TOKEN
})

export const fetchTokenSuccess = (token) => ({
    type : FETCH_TOKEN_SUCCESS,
    payload : token
})

export const fetchTokenError = () => ({
    type : FETCH_TOKEN_ERROR
})

export const createTokenSuccess = (token) => ({
    type : CREATE_TOKEN_SUCCESS,
    payload : token
})

export const createTokenError = (err) => ({
    type : CREATE_TOKEN_SUCCESS,
    payload : err
})

export const saveTokenToCookie = (token) => ({
    type : SAVE_TOKEN,
    payload : token
})

export const createTokenInProgress = () => ({
    type : CREATE_TOKEN_IN_PROGRESS
})

export const saveTokenInProgress = () => ({
    type : SAVE_TOKEN_PROGRESS
})

export const tokenSavedDone = () => ({
    type : SAVE_TOKEN_DONE
})