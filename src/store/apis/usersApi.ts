import { RootStateInterface } from '../store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseUserInterface, ParamsUserInterface, ResponseFindUserInterface, CreateUserInterface, UpdateUserInterface } from '../../components/Users/Interfaces';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_MEDICAL_CENTER_API}/users`,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootStateInterface;
            const user = state.auth.user;
            if (user) headers.set('x-access-jwt', `${user.jwt}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getUsersTable: builder.query<ResponseUserInterface, ParamsUserInterface>({
            query: (data) => ({
                url: '/',
                method: 'GET',
                params: { ...data }
            }),
        }),
        getPrivilegesUser: builder.query<any, { id_user: number }>({
            query: (data) => ({
                url: '/privileges',
                method: 'GET',
                params: { ...data }
            }),
        }),
        findUser: builder.query<ResponseFindUserInterface, { id: number }>({
            query: (params) => ({
                url: `/${params.id}`,
                method: 'GET'
            }),
        }),
        createUser: builder.mutation({
            query: (data: CreateUserInterface) => ({
                url: '/',
                method: 'POST',
                body: data
            }),
        }),
        updateUser: builder.mutation({
            query: (data: UpdateUserInterface) => ({
                url: '/',
                method: 'PUT',
                body: data
            }),
        }),
        deleteUser: builder.mutation({
            query: (id: number) => ({
                url: '/',
                method: 'DELETE',
                body: { id }
            }),
        }),
        restorePassword: builder.mutation({
            query: (id: number) => ({
                url: '/',
                method: 'PATCH',
                body: { id }
            }),
        })
    })
});

export const {
    useGetUsersTableQuery,
    useGetPrivilegesUserQuery,
    useFindUserQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useRestorePasswordMutation
} = usersApi;