import medicalApi from '../apis/medicalBack';
import { AxiosError, AxiosResponse } from 'axios';
import { RowUserInterface } from '../components/Users/Interfaces';

export const userInfoRequest = () => {
    return new Promise<{ data: RowUserInterface }>(async (resolve, reject) => {
        medicalApi.get('/state')
            .then((res: AxiosResponse) => {
                resolve(res.data);
            })
            .catch((err: AxiosError) => {
                reject(err);
            });
    });
};