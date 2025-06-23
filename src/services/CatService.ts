import medicalApi from '../apis/medicalBack';
import { AxiosError, AxiosResponse } from 'axios';
import { CatMunicipalitiesInterface, CatStatesInterface } from '../interfaces';

export const CatStatesRequest = () => {
    return new Promise<CatStatesInterface[]>(async (resolve, reject) => {
        medicalApi.get('/cat/states')
            .then((res: AxiosResponse) => {
                resolve(res.data.data);
            })
            .catch((err: AxiosError) => {
                console.error(err);
                reject([]);
            })
    });
};

export const CatMunicipalitiesRequest = (id_state: number) => {
    return new Promise<CatMunicipalitiesInterface[]>(async (resolve, reject) => {
        medicalApi.get('/cat/municipalities', { params: { id_state: id_state } })
            .then((res: AxiosResponse) => {
                resolve(res.data.data);
            })
            .catch((err: AxiosError) => {
                console.error(err);
                reject([]);
            })
    });
};