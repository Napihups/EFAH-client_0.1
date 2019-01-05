export const API_REQUEST = '[localhost:5000] API Request';

export const apiRequest = (method, url, body, onSuccess, onError) => ({
    type : API_REQUEST,
    payload : body,
    meta: {method, url, onSuccess, onError}
});