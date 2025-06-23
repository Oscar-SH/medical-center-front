import { useEffect } from 'react';
import { Container } from '@mui/material';
import { PagesPropsInterface } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, loadCatStates, RootStateInterface } from '../store';

const ConfigPage = ({ children: CmpComponent, ...rest }: PagesPropsInterface) => {
    const dispatch = useDispatch<AppDispatch>();
    const {cat_states} = useSelector((state: RootStateInterface) => state.cats);

    useEffect(() => {
        if (cat_states.length <= 0) dispatch(loadCatStates());
    }, [cat_states]);

    return (
        <Container maxWidth={'md'} sx={{ flexGrow: 1 }}>
            <CmpComponent {...rest} />
        </Container>
    );
}

export default ConfigPage;