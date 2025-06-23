import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { loadCatMunicipalities } from '../../../../store/slices';
import { AppDispatch, RootStateInterface } from '../../../../store';
import { CatClinicsInterface, ErrorsClinicInterface } from '../../Interfaces';

interface Props {
    values: CatClinicsInterface;
    errors: ErrorsClinicInterface;
    handleInputChange: (value: string | number, name: keyof CatClinicsInterface) => void;
}

const CmpClinicFormContent = ({ errors, handleInputChange, values }: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const { cat_municipalities, cat_states } = useSelector((state: RootStateInterface) => state.cats);

    useEffect(() => {
        dispatch(loadCatMunicipalities(values.id_state));
    }, [values.id_state]);

    return (
        <Stack spacing={1}>
            <TextField
                fullWidth
                label={'Nombre.'}
                value={values.name}
                onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'name')}
                error={errors.name.error}
                helperText={errors.name.error && errors.name.msg}
            />
            <TextField
                fullWidth
                value={values.fullname}
                label={'Nombre completo.'}
                onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'fullname')}
                error={errors.fullname.error}
                helperText={errors.fullname.error && errors.fullname.msg}
            />
            <TextField
                fullWidth
                type={'number'}
                label={'Codigo postal.'}
                value={values.postal_code}
                slotProps={{ htmlInput: { maxLength: 5, min: 0 } }}
                onChange={(e) => handleInputChange(parseInt(e.target.value ?? 0), 'postal_code')}
                error={errors.postal_code.error}
                helperText={errors.postal_code.error && errors.postal_code.msg}
            />
            <TextField
                fullWidth
                label={'RFC.'}
                value={values.rfc}
                slotProps={{ htmlInput: { maxLength: 13 } }}
                onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'rfc')}
                error={errors.rfc.error}
                helperText={errors.rfc.error && errors.rfc.msg}
            />
            <TextField
                fullWidth
                label={'Direccion.'}
                value={values.address}
                onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'address')}
                error={errors.address.error}
                helperText={errors.address.error && errors.address.msg}
            />
            <Autocomplete
                options={cat_states}
                getOptionLabel={(option) => option.name}
                value={cat_states.find((state) => state.id === values.id_state) ?? null}
                onChange={(_e, value) => handleInputChange(value ? value.id : -1, 'id_state')}
                renderInput={(props) =>
                    <TextField
                        {...props}
                        label={'Estado'}
                        error={errors.id_state.error}
                        helperText={errors.id_state.error && errors.id_state.msg}
                    />
                }
            />
            {values.id_state > 0 &&
                <Autocomplete
                    options={cat_municipalities}
                    getOptionLabel={(option) => option.name}
                    onChange={(_e, value) => handleInputChange(value ? value.id : -1, 'id_municipality')}
                    value={cat_municipalities.find((municipality) => municipality.id === values.id_municipality) ?? null}
                    renderInput={(props) =>
                        <TextField
                            {...props}
                            label={'Municipio'}
                            error={errors.id_municipality.error}
                            helperText={errors.id_municipality.error && errors.id_municipality.msg}
                        />
                    }
                />
            }
        </Stack>
    );
};

export default CmpClinicFormContent;