import { useSnackbar } from 'notistack';
import { CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import useForm from '../../../../hooks/useForm';
import CmpRoleFormContent from './CmpRoleFormContent';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { ResponseInterface } from '../../../../interfaces';
import { closeGeneralModal } from '../../../../store/slices';
import { validateFormRoleHelper } from '../../Helpers/validateRole';
import { initRoleInterface, initErrorsFormRoleInterface } from '../../Interfaces';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { useFindRoleQuery, useGetRolesTableQuery, useCreateRoleMutation, useUpdateRoleMutation } from '../../../../store/apis';

interface Props { args: { id: number; }; }

const CmpRoleForm = ({ args = { id: -1 } }: Props) => {
    const isEdit = args.id > 0;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { data, refetch } = useFindRoleQuery({ id: args.id ?? -1 });
    const { values, handleInputChange } = useForm(initRoleInterface);
    const [errors, setErrors] = useState(initErrorsFormRoleInterface);
    const { table_roles } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch: refetchRoles } = useGetRolesTableQuery(table_roles);
    const [createRole, { isError, isLoading, isSuccess }] = useCreateRoleMutation();
    const [editRole, { isError: isErrorU, isLoading: isLoadingU, isSuccess: isSuccessU }] = useUpdateRoleMutation();

    useEffect(() => {
        refetch();
        if (data && data.data) {
            handleInputChange(data.data.name, 'name');
            handleInputChange(data.data.permissions, 'permissions');
        }
    }, [data]);

    const handleResponse = (res: ResponseInterface) => {
        if (!res.error) {
            refetchRoles();
            dispatch(closeGeneralModal());
            enqueueSnackbar(`Rol ${isEdit ? 'editado' : 'creado'} correctamente.`, { variant: 'success' });
        } else {
            enqueueSnackbar(`Error al ${isEdit ? 'editar' : 'crear'} rol.`, { variant: 'error' });
        }
    };

    const handleSubmit = () => {
        const { isOK, valuesErrors } = validateFormRoleHelper(values);
        setErrors(valuesErrors);
        if (isOK && !isEdit) {
            createRole(values).then((res) => { handleResponse(res) });
        } else if (isOK && isEdit) {
            editRole({ ...values, id: args.id }).then((res) => { handleResponse(res) });
        }
    };

    return (
        <>
            <CardContent>
                <CmpRoleFormContent errors={errors} handleInputChange={handleInputChange} values={values} />
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

export default CmpRoleForm;