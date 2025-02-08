import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ParamsPersonInterface, PersonInterface, ResponseFindPersonInterface, ResponsePersonInterface, UpdatePersonInterface } from '../../components/Persons/Interfaces/PersonsInterfaces';

export const personsApi = createApi({
    reducerPath: 'personsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_MEDICAL_CENTER_API}/persons`,
        prepareHeaders: (headers, { getState }: any) => {
            // const { id_usuario } = getState().auth.user;
            // if (id_usuario) {
            //     headers.set('x-access-id-user', `${id_usuario}`);
            //     return headers;
            // }
        }
    }),
    endpoints: (builder) => ({
        getPersonsTable: builder.query<ResponsePersonInterface, ParamsPersonInterface>({
            query: (data) => ({
                url: '/',
                method: 'GET',
                params: { ...data }
            }),
        }),
        findPersonQuery: builder.query<ResponseFindPersonInterface, { id: number }>({
            query: (params) => ({
                url: `/${params.id}`,
                method: 'GET'
            }),
        }),
        createPerson: builder.mutation({
            query: (data: PersonInterface) => ({
                url: '/',
                method: 'POST',
                body: data
            }),
        }),
        updatePerson: builder.mutation({
            query: (data: UpdatePersonInterface) => ({
                url: '/',
                method: 'PUT',
                body: data
            }),
        }),
        deletePerson: builder.mutation({
            query: (id: number) => ({
                url: '/',
                method: 'DELETE',
                body: { id }
            }),
        }),
        restorePerson: builder.mutation({
            query: (id: number) => ({
                url: '/',
                method: 'PATCH',
                body: { id }
            }),
        })
    })
});

export const {
    useGetPersonsTableQuery,
    useFindPersonQueryQuery,
    useCreatePersonMutation,
    useUpdatePersonMutation,
    useDeletePersonMutation,
    useRestorePersonMutation
} = personsApi;