import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateDoctorInterface, ResponseDoctorsInterface, ResponseFindDoctorInterface, UpdateDoctorInterface } from '../../components/Doctors/Interfaces/DoctorsInterfaces';

export const doctorsApi = createApi({
    reducerPath: 'doctorsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_MEDICAL_CENTER_API}`,
        prepareHeaders: (headers, { getState }: any) => {
            // const { id_usuario } = getState().auth.user;
            // if (id_usuario) {
            //     headers.set('x-access-id-user', `${id_usuario}`);
            //     return headers;
            // }
        }
    }),
    endpoints: (builder) => ({
        getDoctorsTable: builder.query<ResponseDoctorsInterface, {}>({
            query: (data) => ({
                url: `doctors`,
                method: 'GET',
                params: { ...data }
            }),
        }),
        findDoctorQuery: builder.query<ResponseFindDoctorInterface, { id: number }>({
            query: (params) => ({
                url: `doctors/${params.id}`,
                method: 'GET'
            }),
        }),
        createDoctor: builder.mutation({
            query: (data: CreateDoctorInterface) => ({
                url: `doctors`,
                method: 'POST',
                body: data
            }),
        }),
        updateDoctor: builder.mutation({
            query: (data: UpdateDoctorInterface) => ({
                url: `doctors`,
                method: 'PUT',
                body: data
            }),
        }),
        deleteDoctor: builder.mutation({
            query: (id: number) => ({
                url: `doctors`,
                method: 'DELETE',
                body: { id: id }
            }),
        }),
        restoreDoctor: builder.mutation({
            query: (id: number) => ({
                url: `doctors`,
                method: 'PATCH',
                body: { id: id }
            }),
        }),
    })
});

export const {
    useGetDoctorsTableQuery,
    useFindDoctorQueryQuery,
    useCreateDoctorMutation,
    useUpdateDoctorMutation,
    useDeleteDoctorMutation,
    useRestoreDoctorMutation
} = doctorsApi;