import { useSnackbar } from 'notistack';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, CardContent, Stack } from '@mui/material';
import { closeGeneralModal } from '../../../../store/slices';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { useDeleteUserMutation, useGetUsersTableQuery } from '../../../../store/apis';

interface Props {
    args: { id: number; };
}

const CmpUserFormAlert = ({ args }: Props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { table_users } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch } = useGetUsersTableQuery(table_users);
    const [deleteUser, { isError, isLoading, isSuccess }] = useDeleteUserMutation();

    const handleSubmit = () => {
        deleteUser(args.id)
            .then((res) => {
                if (res.error) {
                    enqueueSnackbar('Error al eliminar usuario.', { variant: 'error' });
                } else {
                    refetch();
                    dispatch(closeGeneralModal());
                    enqueueSnackbar('Usuario eliminado correctamente.', { variant: 'success' });
                }
            });
    };

    return (
        <Stack>
            <CardContent>
                <Alert color={'warning'} severity={'warning'}>
                    ¿Está seguro de <b>ELIMINAR</b> a este usuario?.
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

export default CmpUserFormAlert;