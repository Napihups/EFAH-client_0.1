export const SIGN_IN_GOOGLE = '[Event] User Signing in with google'
export const SIGN_OUT = '[Event] User Signing out'
export const ROUTE_ON_LOGIN_SUCCESS = '[Event] Routing user on login success'
export const LOGIN_SUCCESS = '[Event] User Login sucessfully';
export const USER_AUTH_FAILED = '[Event] User authentication Failed';


export const signInGoogle = (...obj) => ({
    type : SIGN_IN_GOOGLE,
    payload : obj
})

export const signOut = () => ({
    type : SIGN_OUT
})

export const loginSuccess =() => ({
    type : LOGIN_SUCCESS
})


export const routeOnLoginSuccess = (history) => ({
    type : ROUTE_ON_LOGIN_SUCCESS,
    payload : history
})


export const userAuthFailed = () => ({
    type : USER_AUTH_FAILED
})