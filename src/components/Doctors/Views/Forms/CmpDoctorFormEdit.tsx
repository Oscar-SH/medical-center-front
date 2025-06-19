import { useSnackbar } from 'notistack';
import CmpDoctorForm from './CmpDoctorForm';
import  { useEffect, useState } from 'react';
import useForm from '../../../../hooks/useForm';
import { DialogContent, Stack } from '@mui/material';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { closeGeneralModal } from '../../../../store/slices';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { initErrorsDoctorInterface, initDoctorInterface, CreateDoctorInterface } from '../../Interfaces';
import { useFindDoctorQueryQuery, useUpdateDoctorMutation, useGetDoctorsTableQuery } from '../../../../store/apis';

interface Props { args: { id: number; }; }

const CmpDoctorFormEdit = ({ args }: Props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [errors, setErrors] = useState(initErrorsDoctorInterface);
    const { data, refetch } = useFindDoctorQueryQuery({ id: args.id });
    const { handleInputChange, values } = useForm(initDoctorInterface);
    const [updateDoctor, { isError, isLoading, isSuccess }] = useUpdateDoctorMutation();
    const { table_doctors } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch: refetchDoctors } = useGetDoctorsTableQuery(table_doctors);

    useEffect(() => {
        refetch();
        if (data) {
            const indexes = Object.keys(values) as (keyof CreateDoctorInterface)[];
            indexes.forEach((index) => {
                handleInputChange(data.data[index], index);
            });
        }
    }, [data]);

    const handleSubmit = () => {
        if (!values.professional_license) {
            setErrors({ ...errors, professional_license: { ...errors.professional_license, error: true } });
        } else {
            setErrors({ ...errors, professional_license: { ...errors.professional_license, error: false } });
            updateDoctor({ ...values, id: args.id })
                .then((res) => {
                    if (res.error) {
                        enqueueSnackbar('ERROR AL EDITAR MEDICO.', { variant: 'error' });
                    } else {
                        refetchDoctors();
                        dispatch(closeGeneralModal());
                        enqueueSnackbar('MEDICO EDITADO CORRECTAMENTE.', { variant: 'success' });
                    }
                });
        }
    };

    return (
        <Stack spacing={1}>
            <DialogContent>
                <CmpDoctorForm errors={errors} handleInputChange={handleInputChange} values={values} />
            </DialogContent>
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

export default CmpDoctorFormEdit;