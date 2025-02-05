import React from 'react';
import { Alert, CardContent, Stack } from '@mui/material';
import CmpGeneralModalActions from '../../General/Views/CmpGeneralModalActions';

interface Props {
    args: { action: string; };
}

const CmpPersonAlertForm = ({ args }: Props) => {

    return (
        <Stack>
            <CardContent>
                <Alert
                    color={args.action === 'ELIMINAR' ? 'warning' : 'success'}
                    severity={args.action === 'ELIMINAR' ? 'warning' : 'success'}
                >
                    ¿Está seguro de <b>{args.action}</b> a esta persona?.
                </Alert>
            </CardContent>
            {/* <CmpGeneralModalActions /> */}
        </Stack>
    );
};

export default CmpPersonAlertForm;