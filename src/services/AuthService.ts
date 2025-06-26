import medicalApi from '../apis/medicalBack';
import { AxiosError, AxiosResponse } from 'axios';
import { InfoUserInterface } from '../components/Users/Interfaces';

export const userInfoRequest = () => {
    return new Promise<{ data: InfoUserInterface }>(async (resolve, reject) => {
        medicalApi.get('/state')
            .then((res: AxiosResponse) => {
                resolve(res.data);
            })
            .catch((err: AxiosError) => {
                reject(err);
            });
    });
};

export const loadPermissionsRequest = (id: number, id_clinic: number) => {
    return new Promise<{ data: { permissions: string[]; roles: string[]; } }>(async (resolve, reject) => {
        medicalApi.get('/permissions/byuser', { params: { id: id, id_clinic: id_clinic } })
            .then((res: AxiosResponse) => {
                resolve(res.data);
            })
            .catch((err: AxiosError) => {
                reject(err);
            });
    });
};