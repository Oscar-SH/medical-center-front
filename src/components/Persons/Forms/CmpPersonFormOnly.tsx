import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { RootState } from '../../../store';
import { CardContent } from '@mui/material';
import CmpPersonForm from './CmpPersonForm';
import useForm from '../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { closeGeneralModal } from '../../../store/slices';
import { PersonInterface } from '../Interfaces/PersonsInterfaces';
import { validatePersonForm } from '../Helpers/validatePersonForm';
import { ResponseInterface } from '../../../interfaces/ResInterface';
import CmpGeneralModalActions from '../../General/Views/CmpGeneralModalActions';
import { initErrorsPersonInterface, initPersonInterface } from '../Interfaces/initPersonsInterfaces';
import { useCreatePersonMutation, useFindPersonQueryQuery, useGetPersonsTableQuery, useUpdatePersonMutation } from '../../../store/apis';

interface Props { args: { id: number; }; }

const CmpPersonFormOnly = ({ args = { id: -1 } }: Props) => {
    const isEdit = args.id > 0;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [errors, setErrors] = useState(initErrorsPersonInterface);
    const { data, refetch } = useFindPersonQueryQuery({ id: args.id });
    const { values, handleInputChange } = useForm(initPersonInterface);
    const { table_persons } = useSelector((state: RootState) => state.tables);
    const { refetch: refetchTable } = useGetPersonsTableQuery(table_persons);
    const [createPerson, { isError, isLoading, isSuccess }] = useCreatePersonMutation();
    const [updatePerson, { isError: isErrorU, isLoading: isLoadingU, isSuccess: isSuccessU }] = useUpdatePersonMutation();

    useEffect(() => {
        refetch();
        if (data && data.data) {
            const indexes = Object.keys(values) as (keyof PersonInterface)[];
            indexes.forEach((index) => handleInputChange(data.data[index], index));
        }
    }, [data])

    const hadleResponse = (res: ResponseInterface) => {
        if (res.error) {
            enqueueSnackbar(`Error al ${isEdit ? 'crear' : 'editar'} persona.`, { variant: 'error' });
        } else {
            refetchTable()
            dispatch(closeGeneralModal());
            enqueueSnackbar(`Persona ${isEdit ? 'modificada' : 'creada'} correctamente.`, { variant: 'success' });
        }
    };

    const handleSubmit = () => {
        const { isOK, valuesErrors } = validatePersonForm(values);
        setErrors(valuesErrors);
        if (!isEdit && isOK) {
            createPerson(values).then((res) => { hadleResponse(res) });
        } else if (isEdit && isOK) {
            updatePerson({ ...values, id: args.id }).then((res) => { hadleResponse(res) });
        }
    };

    return (
        <>
            <CardContent>
                <CmpPersonForm
                    values={values}
                    errors={errors}
                    handleInputChange={handleInputChange}
                />
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

export default CmpPersonFormOnly;