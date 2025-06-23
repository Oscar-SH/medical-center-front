import { RootStateInterface } from '../store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseDoctorsInterface, ResponseFindDoctorInterface, UpdateDoctorInterface } from '../../components/Doctors/Interfaces';

export const doctorsApi = createApi({
    reducerPath: 'doctorsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_MEDICAL_CENTER_API}/doctors`,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootStateInterface;
            const user = state.auth.user;
            if (user) headers.set('x-access-jwt', `${user.jwt}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getDoctorsTable: builder.query<ResponseDoctorsInterface, {}>({
            query: (data) => ({
                url: `/`,
                method: 'GET',
                params: { ...data }
            }),
        }),
        findDoctorQuery: builder.query<ResponseFindDoctorInterface, { id: number }>({
            query: (params) => ({
                url: `/${params.id}`,
                method: 'GET'
            }),
        }),
        updateDoctor: builder.mutation({
            query: (data: UpdateDoctorInterface) => ({
                url: `/`,
                method: 'PUT',
                body: data
            }),
        })
    })
});

export const {
    useGetDoctorsTableQuery,
    useFindDoctorQueryQuery,
    useUpdateDoctorMutation
} = doctorsApi;