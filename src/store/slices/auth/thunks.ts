import { Dispatch } from '@reduxjs/toolkit';
import { userInfoRequest } from '../../../services/AuthService';
import { changeLoadingAction, logout, setUserInfo } from './authSlice';

export const startCheckState = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(changeLoadingAction(true));
            const resp = await userInfoRequest();
            if (resp.data) {
                dispatch(setUserInfo(resp.data));
            } else {
                dispatch(logout());
            }
            dispatch(changeLoadingAction(false));
        }
        catch (err) {
            console.error(err);
            dispatch(changeLoadingAction(false));
        }
    };
};