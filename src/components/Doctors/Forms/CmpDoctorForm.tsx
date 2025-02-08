import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import useForm from '../../../hooks/useForm';
import React, { useEffect, useState } from 'react';
import { closeGeneralModal } from '../../../store/slices';
import { CardContent, Stack, TextField } from '@mui/material';
import CmpPersonForm from '../../Persons/Forms/CmpPersonForm';
import { validateDoctorForm } from '../Helpers/validateDoctorForm';
import { CreateDoctorInterface } from '../Interfaces/DoctorsInterfaces';
import CmpGeneralModalActions from '../../General/Views/CmpGeneralModalActions';
import { initDoctorInterface, initErrorsDoctorInterface } from '../Interfaces/initDoctorInterfaces';
import { useCreateDoctorMutation, useFindDoctorQueryQuery, useGetDoctorsTableQuery, useUpdateDoctorMutation } from '../../../store/apis/doctorsApi';

interface Props {
    args: { id: number };
}

const CmpDoctorForm = ({ args }: Props) => {
    const dispatch = useDispatch();
    const isEdit = args.id && args.id > 0;
    const { enqueueSnackbar } = useSnackbar();
    const { refetch } = useGetDoctorsTableQuery({ id_doctor: -1 });
    const [errors, setErrors] = useState(initErrorsDoctorInterface);
    const { values, handleInputChange } = useForm(initDoctorInterface);
    const { data: dataDoctor } = useFindDoctorQueryQuery({ id: args.id ?? -1 });
    const [saveDoctor, { isError, isLoading, isSuccess }] = useCreateDoctorMutation();
    const [updateDoctor, { isError: isErrorU, isLoading: isLoadingU, isSuccess: isSuccessU }] = useUpdateDoctorMutation();

    useEffect(() => {
        const indexes = Object.keys(values) as (keyof CreateDoctorInterface)[];
        if (dataDoctor && dataDoctor.data)
            indexes.forEach((index) => handleInputChange(dataDoctor.data[index], index));
    }, [dataDoctor]);

    const handleSubmit = () => {
        const { isOK, valuesErrors } = validateDoctorForm(values);
        setErrors(valuesErrors);
        if (isOK) {
            saveDoctor(values)
                .then((res) => {
                    if (!res.error) {
                        refetch();
                        dispatch(closeGeneralModal());
                        enqueueSnackbar(`Doctor creado correctamente.`, { variant: 'success' });
                    } else {
                        enqueueSnackbar(`Error al crear doctor.`, { variant: 'error' });
                    }
                });
        }
    };

    const handleSubmitEdit = () => {
        const { isOK, valuesErrors } = validateDoctorForm(values);
        setErrors(valuesErrors);
        if (isOK) {
            updateDoctor({ id: args.id, ...values, id_person: values.id_person ?? -1 })
                .then((res) => {
                    if (!res.error) {
                        refetch();
                        dispatch(closeGeneralModal());
                        enqueueSnackbar(`Doctor modificado correctamente.`, { variant: 'success' });
                    } else {
                        enqueueSnackbar(`Error al modificar doctor.`, { variant: 'error' });
                    }
                });
        }
    };

    console.log(args.id);
    

    return (
        <Stack>
            <CardContent>
                <Stack spacing={2}>
                    <CmpPersonForm errors={errors} values={values} handleInputChange={handleInputChange} />
                    <TextField
                        label={'Cedula profesional'}
                        value={values.professional_license}
                        onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'professional_license')}
                        error={errors.professional_license.error}
                        helperText={errors.professional_license.error && errors.professional_license.msg}
                    />
                    <TextField
                        label={'Observaciones'}
                        value={values.observations}
                        onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'observations')}
                    />
                </Stack>
            </CardContent>
            <CmpGeneralModalActions
                btnText={'Confirmar'}
                error={isEdit ? isErrorU : isError}
                loading={isEdit ? isLoadingU : isLoading}
                success={isEdit ? isSuccessU : isSuccess}
                handleSubmit={isEdit ? handleSubmitEdit : handleSubmit}
            />
        </Stack>
    );
};

export default CmpDoctorForm;