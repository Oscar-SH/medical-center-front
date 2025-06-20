import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { Add } from '@mui/icons-material';
import useForm from '../../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { CardContent, CardActions, Button } from '@mui/material';
import CmpUserFormPrivilegesContent from './CmpUserFormPrivilegesContent';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { initAddPrivilegesInterface, initPrivilegesObject } from '../../Interfaces';
import { closeGeneralModal, RootStateInterface, useGetPrivilegesUserQuery, useGetUsersTableQuery, useSetPrivilegesUserMutation } from '../../../../store';

interface Props { args: { id: number; } }

const CmpUserFormPrivileges = ({ args }: Props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { data, refetch } = useGetPrivilegesUserQuery({ id_user: args.id });
    const { table_users } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch: refetchUser } = useGetUsersTableQuery(table_users);
    const [setPrivileges, { isError, isLoading, isSuccess }] = useSetPrivilegesUserMutation();
    const { values, handleInputChange } = useForm({ ...initAddPrivilegesInterface, id_user: args.id });

    useEffect(() => {
        refetch();
        if (data && data.data) {
            handleInputChange(args.id, 'id_user');
            handleInputChange(data.data, 'privileges');
        }
    }, [data]);

    const handleAddCard = () => {
        handleInputChange([...values.privileges, initPrivilegesObject], 'privileges');
    };

    const handleSubmit = () => {
        setPrivileges(values).then((res) => {
            if (!res.error) {
                refetchUser();
                dispatch(closeGeneralModal());
                enqueueSnackbar(`Privilegios asignados correctamente.`, { variant: 'success' });
            } else {
                enqueueSnackbar(`Error al asignar privilegios.`, { variant: 'error' });
            }
        });
    };

    return (
        <>
            <CardContent>
                <CmpUserFormPrivilegesContent handleInputChange={handleInputChange} values={values} />
            </CardContent>
            <CardActions sx={{ justifyContent: 'end' }}>
                <CmpGeneralModalActions
                    error={isError}
                    loading={isLoading}
                    success={isSuccess}
                    btnText={'Confirmar'}
                    handleSubmit={handleSubmit}
                />
                <Button startIcon={<Add />} onClick={handleAddCard} variant={'outlined'}>Agregar clinica</Button>
            </CardActions>
        </>
    );
};

export default CmpUserFormPrivileges;