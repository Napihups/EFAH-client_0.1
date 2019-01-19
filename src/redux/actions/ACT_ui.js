export const SHOW_SPINNER = '[UI] Show spinner';
export const HIDE_SPINNER = '[UI] Hide spinner';
export const DATA_IN_FETCHING = '[UI] Data Fetch in Progress'
export const DATA_LOADED = '[UI] Data is loaded'

//AUTH 
export const IN_FETCHING_AUTH = '[UI] Auth - Data in fetching'
export const LOADED_AUTH = '[UI] Auth - Data loaded'

export const IN_FETCHING_USER = '[UI] User - Data in fetching'
export const LOADED_USER = '[UI] User - Data loaded'
export const VALIDATINGAUTHINPROGRESS = '[UI] Auth - Validating user Auth in progress'
export const VALIDATINGAUTHINSUCCESS = '[UI] Auth - Validation user auth Success'
export const VALIDATINGAUTHINFAILURE = '[UI] Auth - Validation user auth Failed'
export const VALIDATINGAUTHDONE = '[UI] Auth - Validation user Done'


export const inFetchingAuth = ()=> ({
    type : IN_FETCHING_AUTH
})

export const loadedAuth = ()=> ({
    type : LOADED_AUTH
})

export const inFetchingUser = ()=> ({
    type : IN_FETCHING_USER
})

export const loadedUser = () => ({
    type : LOADED_USER
})

export const showSpinner = () => ({
    type : SHOW_SPINNER,
})

export const hideSpinner = () => ({
    type : HIDE_SPINNER
})

export const dataInFetching = () => ({
    type : DATA_IN_FETCHING
})

export const dataLoaded = () => ({
    type : DATA_LOADED
})

export const validationAuthInProgress = () => ({
    type : VALIDATINGAUTHINPROGRESS
})

export const validationAuthSuccess = () => ({
    type : VALIDATINGAUTHINSUCCESS
})

export const validationAuthFailed = () => ({
    type : VALIDATINGAUTHINFAILURE
})

export const validationAuthDone = () => ({
    type : VALIDATINGAUTHDONE 
})