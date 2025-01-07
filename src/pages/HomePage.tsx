import React from 'react';
import { PagesPropsInterface } from '../interfaces/pages/PagesInterface';

const HomePage = ({ children: CmpComponent, ...rest }: PagesPropsInterface) => {
    return (
        <CmpComponent {...rest} />
    );
}

export default HomePage;