import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, CardContent, Stack } from '@mui/material';
import { closeGeneralModal, RootStateInterface } from '../../../../store';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { useDeletePermissionMutation, useGetPermissionsTableQuery } from '../../../../store/apis';

interface Props {
    args: { id: number; };
}

const CmpPermissionFormAlert = ({ args }: Props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { table_permissions } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch } = useGetPermissionsTableQuery(table_permissions);
    const [deletePermission, { isError, isLoading, isSuccess }] = useDeletePermissionMutation();

    const handleSubmit = () => {
        deletePermission(args.id)
            .then((res) => {
                if (res.error) {
                    enqueueSnackbar('Error al eliminar permiso.', { variant: 'error' });
                } else {
                    refetch();
                    dispatch(closeGeneralModal());
                    enqueueSnackbar('Permiso eliminado correctamente.', { variant: 'success' });
                }
        });
    };

    return (
        <Stack>
            <CardContent>
                <Alert color={'warning'} severity={'warning'}>
                    ¿Está seguro de <b>ELIMINAR</b> a este permiso?.
                </Alert>
            </CardContent>
            <CmpGeneralModalActions
                error={isError}
                loading={isLoading}
                success={isSuccess}
                btnText={'Confirmar'}
                handleSubmit={handleSubmit}
            />
        </Stack>
    );
};

export default CmpPermissionFormAlert;