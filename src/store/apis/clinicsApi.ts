import { RootStateInterface } from '../store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseCatClinicTableInterface, ParamsCatClinicInterface, ResponseFindClinicInterface, CatClinicsInterface, UpdateCatClinicsInterface } from '../../components/Clinics/Interfaces';

export const clinicsApi = createApi({
    reducerPath: 'clinicsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_MEDICAL_CENTER_API}/clinics`,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootStateInterface;
            const user = state.auth.user;
            if (user) headers.set('x-access-jwt', `${user.jwt}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getClinicsTable: builder.query<ResponseCatClinicTableInterface, ParamsCatClinicInterface>({
            query: (data) => ({
                url: '/',
                method: 'GET',
                params: { ...data }
            }),
        }),
        findClinic: builder.query<ResponseFindClinicInterface, { id: number }>({
            query: (params) => ({
                url: `/${params.id}`,
                method: 'GET'
            }),
        }),
        createClinic: builder.mutation({
            query: (data: CatClinicsInterface) => ({
                url: '/',
                method: 'POST',
                body: data
            }),
        }),
        updateClinic: builder.mutation({
            query: (data: UpdateCatClinicsInterface) => ({
                url: '/',
                method: 'PUT',
                body: data
            }),
        }),
        deleteClinic: builder.mutation({
            query: (id: number) => ({
                url: '/',
                method: 'DELETE',
                body: { id }
            }),
        })
    })
});

export const {
    useGetClinicsTableQuery,
    useFindClinicQuery,
    useCreateClinicMutation,
    useUpdateClinicMutation,
    useDeleteClinicMutation
} = clinicsApi;