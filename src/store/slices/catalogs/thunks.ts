import { Dispatch } from "@reduxjs/toolkit";
import { setCatMunicipalitiesSlice, setCatStatesSlice } from "./catSlice";
import { CatMunicipalitiesRequest, CatStatesRequest } from "../../../services/CatService";

export const loadCatStates = () => {
    return async (dispatch: Dispatch) => {
        try {
            const states = await CatStatesRequest();
            dispatch(setCatStatesSlice(states));
        }
        catch (err) {
            console.error(err);
            dispatch(setCatStatesSlice([]));
        }
    };
};


export const loadCatMunicipalities = (id_state: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const municipalities = await CatMunicipalitiesRequest(id_state);
            dispatch(setCatMunicipalitiesSlice(municipalities));
        }
        catch (err) {
            console.error(err);
            dispatch(setCatMunicipalitiesSlice([]));
        }
    };
};