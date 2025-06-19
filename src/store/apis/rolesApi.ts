import { RootStateInterface } from '../store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ParamsRoleInterface, ResponseFindRoleInterface, ResponseRoleInterface, RoleInterface, UpdateRoleInterface } from '../../components/Roles/Interfaces';

export const rolesApi = createApi({
    reducerPath: 'rolesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_MEDICAL_CENTER_API}/roles`,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootStateInterface;
            const user = state.auth.user;
            if (user) headers.set('x-access-jwt', `${user.jwt}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getRolesTable: builder.query<ResponseRoleInterface, ParamsRoleInterface>({
            query: (data) => ({
                url: '/',
                method: 'GET',
                params: { ...data }
            }),
        }),
        findRole: builder.query<ResponseFindRoleInterface, { id: number }>({
            query: (params) => ({
                url: `/${params.id}`,
                method: 'GET'
            }),
        }),
        createRole: builder.mutation({
            query: (data: RoleInterface) => ({
                url: '/',
                method: 'POST',
                body: data
            }),
        }),
        updateRole: builder.mutation({
            query: (data: UpdateRoleInterface) => ({
                url: '/',
                method: 'PUT',
                body: data
            }),
        }),
        deleteRole: builder.mutation({
            query: (id: number) => ({
                url: '/',
                method: 'DELETE',
                body: { id }
            }),
        }),
        restoreRole: builder.mutation({
            query: (id: number) => ({
                url: '/',
                method: 'PATCH',
                body: { id }
            }),
        })
    })
});

export const {
    useGetRolesTableQuery,
    useFindRoleQuery,
    useCreateRoleMutation,
    useUpdateRoleMutation,
    useDeleteRoleMutation,
    useRestoreRoleMutation
} = rolesApi;