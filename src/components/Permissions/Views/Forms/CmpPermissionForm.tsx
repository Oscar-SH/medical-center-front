import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useForm from '../../../../hooks/useForm';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { ResponseInterface } from '../../../../interfaces';
import { closeGeneralModal } from '../../../../store/slices';
import { CardContent, Stack, TextField } from '@mui/material';
import { validateFormPermissionHelper } from '../../Helpers/validatePermission';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { initPermissionInterface, initErrorsFormPermissionInterface } from '../../Interfaces';
import { useFindPermissionQuery, useCreatePermissionMutation, useUpdatePermissionMutation, useGetPermissionsTableQuery } from '../../../../store/apis';

interface Props {
    args: { id: number; };
}

const CmpPermissionForm = ({ args = { id: -1 } }: Props) => {
    const dispatch = useDispatch();
    const isEdit = args.id > 0;
    const { enqueueSnackbar } = useSnackbar();
    const { values, handleInputChange } = useForm(initPermissionInterface);
    const { data, refetch } = useFindPermissionQuery({ id: args.id ?? -1 });
    const [errors, setErrors] = useState(initErrorsFormPermissionInterface);
    const { table_permissions } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch: refetchPermission } = useGetPermissionsTableQuery(table_permissions);
    const [createPermission, { isError, isLoading, isSuccess }] = useCreatePermissionMutation();
    const [editPermission, { isError: isErrorU, isLoading: isLoadingU, isSuccess: isSuccessU }] = useUpdatePermissionMutation();

    useEffect(() => {
        refetch();
        if (data && data.data) handleInputChange(data.data.name, 'name');
    }, [data]);

    const handleResponse = (res: ResponseInterface) => {
        if (!res.error) {
            refetchPermission();
            dispatch(closeGeneralModal());
            enqueueSnackbar(`Permiso ${isEdit ? 'editado' : 'creado'} correctamente.`, { variant: 'success' });
        } else {
            enqueueSnackbar(`Error al ${isEdit ? 'editar' : 'crear'} permiso.`, { variant: 'error' });
        }
    };

    const handleSubmit = () => {
        const { isOK, valuesErrors } = validateFormPermissionHelper(values);
        setErrors(valuesErrors);
        if (isOK && !isEdit) {
            createPermission(values).then((res) => { handleResponse(res) });
        } else if (isOK && isEdit) {
            editPermission({ ...values, id: args.id }).then((res) => { handleResponse(res) });
        }
    };

    return (
        <>
            <CardContent>
                <Stack spacing={1}>
                    <TextField
                        fullWidth
                        value={values.name}
                        label={'Digite nombre del permiso.'}
                        onChange={(e) => handleInputChange(e.target.value, 'name')}
                        error={errors.name.error}
                        helperText={errors.name.error && errors.name.msg}
                    />
                </Stack>
            </CardContent>
            <CmpGeneralModalActions
                error={isEdit ? isErrorU : isError}
                loading={isEdit ? isLoadingU : isLoading}
                success={isEdit ? isSuccessU : isSuccess}
                btnText={'Confirmar'}
                handleSubmit={handleSubmit}
            />
        </>
    );
};

export default CmpPermissionForm;