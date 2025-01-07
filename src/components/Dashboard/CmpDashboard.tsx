import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const CmpDashboard = () => {
    return (
        <Card>
            <CardHeader
                title={'Dashboard'}
                subheader={
                    <Typography color={'text.secondary'} variant={'body2'} > Description.</Typography>
                }
            />
            <CardContent>
                <Typography variant={'h1'} > Contenido.</Typography>
            </CardContent>
        </Card>
    );
};

export default CmpDashboard;