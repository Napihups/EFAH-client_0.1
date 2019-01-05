export const GET_USER = '[Auth] Get User';
export const FETCH_USER_SUCCESS = '[Auth] Fetch User success';
export const FETCH_USER_ERROR = '[Auth] Fetch User error'


export const getUser = () => ({
    type : GET_USER
});

export const fetchUserSuccess = () => ({
    type : FETCH_USER_SUCCESS
})

export const fetchUserError = () => ({
    type : FETCH_USER_ERROR
})