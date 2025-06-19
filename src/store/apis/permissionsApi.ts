import { RootStateInterface } from '../store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ParamsPermissionInterface, PermissionInterface, ResponseFindPermissionInterface, ResponsePermissionInterface, UpdatePermissionInterface } from '../../components/Permissions/Interfaces';

export const permissionsApi = createApi({
    reducerPath: 'permissionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_MEDICAL_CENTER_API}/permissions`,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootStateInterface;
            const user = state.auth.user;
            if (user) headers.set('x-access-jwt', `${user.jwt}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getPermissionsTable: builder.query<ResponsePermissionInterface, ParamsPermissionInterface>({
            query: (data) => ({
                url: '/',
                method: 'GET',
                params: { ...data }
            }),
        }),
        findPermission: builder.query<ResponseFindPermissionInterface, { id: number }>({
            query: (params) => ({
                url: `/${params.id}`,
                method: 'GET'
            }),
        }),
        createPermission: builder.mutation({
            query: (data: PermissionInterface) => ({
                url: '/',
                method: 'POST',
                body: data
            }),
        }),
        updatePermission: builder.mutation({
            query: (data: UpdatePermissionInterface) => ({
                url: '/',
                method: 'PUT',
                body: data
            }),
        }),
        deletePermission: builder.mutation({
            query: (id: number) => ({
                url: '/',
                method: 'DELETE',
                body: { id }
            }),
        })
    })
});

export const {
    useGetPermissionsTableQuery,
    useFindPermissionQuery,
    useCreatePermissionMutation,
    useUpdatePermissionMutation,
    useDeletePermissionMutation
} = permissionsApi;