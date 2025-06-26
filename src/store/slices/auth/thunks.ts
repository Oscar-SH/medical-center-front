import { Dispatch } from '@reduxjs/toolkit';
import { loadPermissionsRequest, userInfoRequest } from '../../../services/AuthService';
import { changeLoadingAction, logout, setPermissionsUser, setUserInfo } from './authSlice';

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

export const loadPermissions = (id: number, id_clinic: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const resp = await loadPermissionsRequest(id, id_clinic);
            dispatch(setPermissionsUser(resp.data));
        }
        catch (err) {
            console.error(err);
            dispatch(setPermissionsUser({ permissions: [], roles: [] }));
        }
    };
};