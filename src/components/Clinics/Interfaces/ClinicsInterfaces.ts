import { TablesPropsInterface } from "../../../interfaces";
import { GeneralPropsErrorInterface } from "../../General/Interfaces";

export interface ParamsCatClinicInterface extends TablesPropsInterface { }

export interface CatClinicsInterface {
    name: string;
    fullname: string;
    postal_code: number;
    rfc: string;
    address: string;
    id_municipality: number;
    id_state: number;
}

export interface ErrorsClinicInterface {
    name: GeneralPropsErrorInterface;
    fullname: GeneralPropsErrorInterface;
    postal_code: GeneralPropsErrorInterface;
    rfc: GeneralPropsErrorInterface;
    address: GeneralPropsErrorInterface;
    id_municipality: GeneralPropsErrorInterface;
    id_state: GeneralPropsErrorInterface;
}

export interface UpdateCatClinicsInterface extends CatClinicsInterface { id: number; }

export interface RowCatClinicInterface extends CatClinicsInterface {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    municipality: string;
}

export interface ResponseCatClinicTableInterface {
    count: number;
    data: RowCatClinicInterface[];
}

export interface ResponseFindClinicInterface { data: RowCatClinicInterface; }