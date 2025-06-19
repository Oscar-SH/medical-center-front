import { Alert, CardContent, Stack } from '@mui/material';

interface Props {
    args: { action: string; };
}

const CmpEmployeeAlertForm = ({ args }: Props) => {

    return (
        <Stack>
            <CardContent>
                <Alert
                    color={args.action === 'ELIMINAR' ? 'warning' : 'success'}
                    severity={args.action === 'ELIMINAR' ? 'warning' : 'success'}
                >
                    ¿Está seguro de <b>{args.action}</b> a este medico?.
                </Alert>
            </CardContent>
            {/* <CmpGeneralModalActions /> */}
        </Stack>
    );
};

export default CmpEmployeeAlertForm;