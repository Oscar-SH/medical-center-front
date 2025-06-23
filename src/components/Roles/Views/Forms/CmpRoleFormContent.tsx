import { useEffect } from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { useGetPermissionsTableQuery } from '../../../../store/apis';
import { RoleInterface, ErrorsRoleInterface } from '../../Interfaces';
import { RowPermissionInterface } from '../../../Permissions/Interfaces';

interface Props {
    values: RoleInterface;
    errors: ErrorsRoleInterface;
    handleInputChange: (value: string | RowPermissionInterface[], name: keyof RoleInterface) => void;
}

const CmpRoleFormContent = ({ errors, handleInputChange, values }: Props) => {
    const { data: permissions, refetch: refetchPermission } = useGetPermissionsTableQuery({ page: 1, page_size: 0, text: '' });

    useEffect(() => { refetchPermission(); }, [permissions]);

    return (
        <Stack spacing={1}>
            <TextField
                fullWidth
                type={'email'}
                value={values.name}
                label={'Digite nombre del permiso.'}
                onChange={(e) => handleInputChange(e.target.value, 'name')}
                error={errors.name.error}
                helperText={errors.name.error && errors.name.msg}
            />
            <Autocomplete
                multiple
                disableCloseOnSelect
                filterSelectedOptions
                value={values.permissions}
                getOptionLabel={(option) => option.name}
                options={(permissions && permissions.data) ? permissions.data : []}
                onChange={(e, value) => handleInputChange(value ?? [], 'permissions')}
                renderInput={params =>
                    <TextField
                        {...params}
                        label={'Permisos'}
                        error={errors.ids_permission.error}
                        helperText={errors.ids_permission.error && errors.ids_permission.msg}
                    />
                }
            />
        </Stack>
    );
};

export default CmpRoleFormContent;