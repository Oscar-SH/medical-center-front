import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { Alert, CardContent } from '@mui/material';
import { closeGeneralModal } from '../../../../store/slices';
import { useRestorePasswordMutation } from '../../../../store/apis';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';

interface Props {
    args: { id: number; };
}

const CmpUserFormPassword = ({ args }: Props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [restorePassword, { isError, isLoading, isSuccess }] = useRestorePasswordMutation();


    const handleSubmit = () => {
        restorePassword(args.id)
            .then((res) => {
                if (!res.error) {
                    dispatch(closeGeneralModal());
                    enqueueSnackbar(`Contrasena restaurada correctamente.`, { variant: 'success' });
                } else {
                    enqueueSnackbar(`Error restaurar contrasena.`, { variant: 'error' });
                }
            });
    };

    return (
        <>
            <CardContent>
                <Alert color={'info'} severity={'info'}>
                    ¿Está seguro de <b>RESTAURAR CONTRASEÑA</b> a este usuario?.
                </Alert>
            </CardContent>
            <CmpGeneralModalActions
                error={isError}
                loading={isLoading}
                success={isSuccess}
                btnText={'Confirmar'}
                handleSubmit={handleSubmit}
            />
        </>
    );
};

export default CmpUserFormPassword;