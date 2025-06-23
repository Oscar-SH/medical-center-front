import { TablesPropsInterface } from "../../../interfaces";
import { GeneralPropsErrorInterface } from "../../General/Interfaces";
import { RowPermissionInterface } from "../../Permissions/Interfaces";


export interface RoleInterface { 
    name: string;
    permissions: RowPermissionInterface[];
}

export interface UpdateRoleInterface extends RoleInterface { id: number; }

export interface ErrorsRoleInterface {
    name: GeneralPropsErrorInterface;
    ids_permission: GeneralPropsErrorInterface;
}

export interface RowRoleInterface extends RoleInterface {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

export interface ParamsRoleInterface extends TablesPropsInterface { }

export interface ResponseRoleInterface {
    count: number;
    data: RowRoleInterface[];
}

export interface ResponseFindRoleInterface { data: RowRoleInterface; }