import { useSnackbar } from 'notistack';
import { CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import useForm from '../../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import CmpClinicFormContent from './CmpClinicFormContent';
import { ResponseInterface } from '../../../../interfaces';
import { closeGeneralModal } from '../../../../store/slices';
import { AppDispatch, RootStateInterface } from '../../../../store';
import { validateFormClinicHelper } from '../../Helpers/validatePermission';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { CatClinicsInterface, initClinicInterface, initErrorsFormClinicInterface } from '../../Interfaces';
import { useFindClinicQuery, useGetClinicsTableQuery, useCreateClinicMutation, useUpdateClinicMutation } from '../../../../store/apis';

interface Props {
    args: { id: number; };
}

const CmpClinicForm = ({ args = { id: -1 } }: Props) => {
    const isEdit = args.id > 0;
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch<AppDispatch>();
    const { values, handleInputChange } = useForm(initClinicInterface);
    const { data, refetch } = useFindClinicQuery({ id: args.id ?? -1 });
    const [errors, setErrors] = useState(initErrorsFormClinicInterface);
    const { table_clinincs } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch: refetchClinic } = useGetClinicsTableQuery(table_clinincs);
    const [createClinic, { isError, isLoading, isSuccess }] = useCreateClinicMutation();
    const [editClinic, { isError: isErrorU, isLoading: isLoadingU, isSuccess: isSuccessU }] = useUpdateClinicMutation();

    useEffect(() => {
        refetch();
        if (data && data.data) {
            const indexes = Object.keys(values) as (keyof CatClinicsInterface)[];
            indexes.forEach((index) => handleInputChange(data.data[index], index));
        };
    }, [data]);

    const handleResponse = (res: ResponseInterface) => {
        if (!res.error) {
            refetchClinic();
            dispatch(closeGeneralModal());
            enqueueSnackbar(`Clinica ${isEdit ? 'editada' : 'creada'} correctamente.`, { variant: 'success' });
        } else {
            enqueueSnackbar(`Error al ${isEdit ? 'editar' : 'crear'} clinica.`, { variant: 'error' });
        }
    };

    const handleSubmit = () => {
        const { isOK, valuesErrors } = validateFormClinicHelper(values);
        setErrors(valuesErrors);
        if (isOK && !isEdit) {
            createClinic(values).then((res) => { handleResponse(res) });
        } else if (isOK && isEdit) {
            editClinic({ ...values, id: args.id }).then((res) => { handleResponse(res) });
        }
    };

    return (
        <>
            <CardContent>
                <CmpClinicFormContent errors={errors} handleInputChange={handleInputChange} values={values} />
            </CardContent>
            <CmpGeneralModalActions
                btnText={'Confirmar'}
                handleSubmit={handleSubmit}
                error={isEdit ? isErrorU : isError}
                loading={isEdit ? isLoadingU : isLoading}
                success={isEdit ? isSuccessU : isSuccess}
            />
        </>
    );
};

export default CmpClinicForm;