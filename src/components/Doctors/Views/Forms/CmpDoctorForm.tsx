import { Stack, TextField } from '@mui/material';
import { DoctorInterface, ErrorsDoctorInterface } from '../../Interfaces';

interface Props {
    values: DoctorInterface;
    errors: ErrorsDoctorInterface;
    handleInputChange: (value: string | number, name: keyof DoctorInterface) => void;
}

const CmpDoctorForm = ({ errors, values, handleInputChange }: Props) => {

    return (
        <Stack spacing={1}>
            <TextField
                label={'Cedula profesional'}
                value={values.professional_license}
                onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'professional_license')}
                error={errors.professional_license.error}
                helperText={errors.professional_license.error && errors.professional_license.msg}
            />
            <TextField
                multiline
                label={'Observaciones'}
                value={values.observations}
                onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'observations')}
            />
        </Stack>
    );
};

export default CmpDoctorForm;