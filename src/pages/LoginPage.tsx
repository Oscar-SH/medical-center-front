import React from 'react';
import { PagesPropsInterface } from '../interfaces/pages/PagesInterface';

const LoginPage = ({ children: CmpComponent, ...rest }: PagesPropsInterface) => {
    return (
        <CmpComponent {...rest} />
    );
}

export default LoginPage;