import { publicRequest } from "../requestMethod";
import { cartClear } from "./cartRedux";
import { loginFailure, loginStart, loginSuccess, logoutSuccess, updateInfoSuccess, updatePasswordSuccess } from "./userRedux"


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const result = await publicRequest.post('/api/auth/login', user);
        dispatch(loginSuccess(result.data));
        //after success login, redirect to home page
        window.location.href = '/';
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutSuccess());
    dispatch(cartClear());
    window.location.href = '/login';
}


export const deleteAllFromCart = async (dispatch) => {
    dispatch(cartClear());
    window.location.href = '/account';
}