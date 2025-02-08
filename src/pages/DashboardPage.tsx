import React from 'react';
import { Container } from '@mui/material';
import { PagesPropsInterface } from '../interfaces/PagesInterface';

const DashboardPage = ({ children: CmpComponent, ...rest }: PagesPropsInterface) => {
    return (
        <Container maxWidth={'md'} sx={{ flexGrow: 1 }}>
            <CmpComponent {...rest} />
        </Container>
    );
}

export default DashboardPage;