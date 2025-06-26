import { LoginUserInterface } from '../../components/Auth/Interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InfoUserInterface } from '../../components/Users/Interfaces';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_MEDICAL_CENTER_API}/` }),
    endpoints: (builder) => ({
        login: builder.mutation<{ data: InfoUserInterface }, LoginUserInterface>({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data
            }),
        }),
    })
});

export const {
    useLoginMutation
} = authApi;