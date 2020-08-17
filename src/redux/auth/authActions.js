import authTypes from './authActionsTypes';

const registerUserRequest = () => ({
    type: authTypes.REGISTER_REQUEST,
});
const registerUserSuccess = user => ({
    type: authTypes.REGISTER_SUCCESS,
    payload: { ...user },
});
const registerUserError = error => ({
    type: authTypes.REGISTER_ERROR,
    payload: error,
});

const logInRequest = () => ({
    type: authTypes.LOGIN_REQUEST,
});
const logInSuccess = auth => ({
    type: authTypes.LOGIN_SUCCESS,
    payload: {
        ...auth,
    },
});
const logInError = error => ({
    type: authTypes.LOGIN_ERROR,
    payload: error,
});

const logOutRequest = () => ({
    type: authTypes.LOGOUT_REQUEST,
});
const logOutSuccess = () => ({
    type: authTypes.LOGOUT_SUCCESS,
});
const logOutError = error => ({
    type: authTypes.LOGOUT_ERROR,
    payload: error,
});

const getCurrentUserRequest = () => ({
    type: authTypes.CURRENT_REQUEST,
});
const getCurrentUserSuccess = user => ({
    type: authTypes.CURRENT_SUCCESS,
    payload: {
        ...user,
    },
});
const getCurrentUserError = error => ({
    type: authTypes.CURRENT_ERROR,
    payload: error,
});

export default {
    registerUserRequest,
    registerUserSuccess,
    registerUserError,
    logInRequest,
    logInSuccess,
    logInError,
    logOutRequest,
    logOutSuccess,
    logOutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
};
