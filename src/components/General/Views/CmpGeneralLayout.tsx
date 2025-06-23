import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import CmpHeartLoading from './CmpHeartLoading';
import CmpGeneralModal from './CmpGeneralModal';
import CmpGeneralDrawer from './CmpGeneralDrawer';
import CmpGeneralSideBar from './CmpGeneralSideBar';
import CmpGeneralToolbar from './CmpGeneralToolbar';
import { RootStateInterface } from '../../../store';
import { PagesPropsInterface } from '../../../interfaces';

interface Props {
    children: () => JSX.Element;
    page: (rest: PagesPropsInterface) => JSX.Element;
}

const CmpGeneralLayout = ({ page: CmpComponent, ...rest }: Props) => {
    const { isLoading } = useSelector((state: RootStateInterface) => state.auth);

    if (isLoading) {
        return (<CmpHeartLoading />);
    }

    return (
        <Stack flexGrow={1} sx={{ p: 2 }}>
            <CmpGeneralModal />
            <CmpGeneralToolbar />
            <CmpGeneralSideBar />
            <Stack flexGrow={1} justifyContent={'center'}>
                <CmpComponent {...rest} />
            </Stack>
            <CmpGeneralDrawer />
        </Stack>
    );
};

export default CmpGeneralLayout;
