import React from 'react';
import { Container } from '@mui/material';
import { PagesPropsInterface } from '../interfaces/pages/PagesInterface';

const DashboardPage = ({ children: CmpComponent, ...rest }: PagesPropsInterface) => {
    return (
        <Container maxWidth={'md'} sx={{ mt:2 }}>
            <CmpComponent {...rest} />
        </Container>
    );
}

export default DashboardPage;