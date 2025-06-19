import { TablesPropsInterface } from "../../../interfaces";
import { GeneralPropsErrorInterface } from "../../General/Interfaces";

export interface PermissionInterface { name: string; }

export interface UpdatePermissionInterface extends PermissionInterface { id: number; }

export interface ErrorsPermissionInterface {
    name: GeneralPropsErrorInterface;
}

export interface RowPermissionInterface extends PermissionInterface {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

export interface ParamsPermissionInterface extends TablesPropsInterface { }

export interface ResponsePermissionInterface {
    count: number;
    data: RowPermissionInterface[];
}

export interface ResponseFindPermissionInterface { data: RowPermissionInterface; }