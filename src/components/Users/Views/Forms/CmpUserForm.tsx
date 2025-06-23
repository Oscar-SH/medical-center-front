import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useForm from '../../../../hooks/useForm';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { ResponseInterface } from '../../../../interfaces';
import { closeGeneralModal } from '../../../../store/slices';
import { CardContent, Stack, TextField } from '@mui/material';
import { validateFormUserHelper } from '../../Helpers/validateUser';
import CmpDoctorForm from '../../../Doctors/Views/Forms/CmpDoctorForm';
import { initErrorsFormUserInterface, initUserInterface } from '../../Interfaces';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { useFindUserQuery, useGetUsersTableQuery, useCreateUserMutation, useUpdateUserMutation } from '../../../../store/apis';

interface Props {
    args: { id_person: number; id_user: number; };
}

const CmpUserForm = ({ args = { id_person: -1, id_user: -1 } }: Props) => {
    const dispatch = useDispatch();
    const isEdit = args.id_user > 0;
    const { enqueueSnackbar } = useSnackbar();
    const { data, refetch } = useFindUserQuery({ id: args.id_user });
    const [errors, setErrors] = useState(initErrorsFormUserInterface);
    const { table_users } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch: refetchUser } = useGetUsersTableQuery(table_users);
    const [createUser, { isError, isLoading, isSuccess }] = useCreateUserMutation();
    const { values, handleInputChange } = useForm({ ...initUserInterface, id_person: args.id_person });
    const [editUser, { isError: isErrorU, isLoading: isLoadingU, isSuccess: isSuccessU }] = useUpdateUserMutation();

    useEffect(() => {
        refetch();
        if (data && data.data) {
            handleInputChange(data.data.email, 'email');
        }
    }, [data]);

    const handleResponse = (res: ResponseInterface) => {
        if (!res.error) {
            refetchUser();
            dispatch(closeGeneralModal());
            enqueueSnackbar(`Doctor ${isEdit ? 'editado' : 'eliminado'} correctamente.`, { variant: 'success' });
        } else {
            enqueueSnackbar(`Error al ${isEdit ? 'editar' : 'eliminar'} doctor.`, { variant: 'error' });
        }
    };

    const handleSubmit = () => {
        const { isOK, valuesErrors } = validateFormUserHelper(values);
        setErrors(valuesErrors);
        if (!isEdit) {
            if (isOK) {
                createUser(values).then((res) => { handleResponse(res) });
            }
        } else {
            if (values.email.length > 0) {
                editUser({ ...values, id: args.id_user }).then((res) => { handleResponse(res) });
            } else {
                setErrors({ ...errors, email: { ...errors.email, error: true } });
            }
        }
    };

    return (
        <>
            <CardContent>
                <Stack spacing={1}>
                    <TextField
                        fullWidth
                        type={'email'}
                        value={values.email}
                        label={'Digite su e-mail.'}
                        onChange={(e) => handleInputChange(e.target.value, 'email')}
                        error={errors.email.error}
                        helperText={errors.email.error && errors.email.msg}
                    />
                    {!isEdit &&
                        <CmpDoctorForm errors={errors} values={values} handleInputChange={handleInputChange} />
                    }
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

export default CmpUserForm;