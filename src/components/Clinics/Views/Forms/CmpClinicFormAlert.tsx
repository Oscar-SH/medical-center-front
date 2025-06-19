import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, CardContent, Stack } from '@mui/material';
import { closeGeneralModal, RootStateInterface } from '../../../../store';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { useDeleteClinicMutation, useGetClinicsTableQuery } from '../../../../store/apis';

interface Props {
    args: { id: number; };
}

const CmpClinicFormAlert = ({ args }: Props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { table_clinincs } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch } = useGetClinicsTableQuery(table_clinincs);
    const [deleteClinic, { isError, isLoading, isSuccess }] = useDeleteClinicMutation();

    const handleSubmit = () => {
        deleteClinic(args.id)
            .then((res) => {
                if (res.error) {
                    enqueueSnackbar('Error al eliminar clinica.', { variant: 'error' });
                } else {
                    refetch();
                    dispatch(closeGeneralModal());
                    enqueueSnackbar('Clinica eliminado correctamente.', { variant: 'success' });
                }
            });
    };

    return (
        <Stack>
            <CardContent>
                <Alert color={'warning'} severity={'warning'}>
                    ¿Está seguro de <b>ELIMINAR</b> a esta clinica?.
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

export default CmpClinicFormAlert;