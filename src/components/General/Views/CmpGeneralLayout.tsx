import React from 'react';
import { Stack } from '@mui/material';
import CmpGeneralModal from './CmpGeneralModal';
import CmpGeneralSideBar from './CmpGeneralSideBar';
import CmpGeneralToolbar from './CmpGeneralToolbar';
import { PagesPropsInterface } from '../../../interfaces/pages/PagesInterface';

interface Props {
    children: () => JSX.Element;
    page: (rest: PagesPropsInterface) => JSX.Element;
}

const CmpGeneralLayout = ({ page: CmpComponent, ...rest }: Props) => {
    
    return (
        <Stack flexGrow={1} sx={{ p: 2 }}>
            <CmpGeneralModal/>
            <CmpGeneralToolbar />
            <CmpGeneralSideBar />
            <Stack flexGrow={1} justifyContent={'center'}>
                <CmpComponent {...rest} />
            </Stack>
        </Stack>
    );
};

export default CmpGeneralLayout;
