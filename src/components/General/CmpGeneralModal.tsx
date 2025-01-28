import React from 'react'
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { Dialog, DialogTitle } from '@mui/material';

const CmpGeneralModal = () => {
    const { args, component: Cmp, open, title, width } = useSelector((state: RootState) => state.ui.openModal);

    return (
        <Dialog fullWidth open={open} maxWidth={width && `${width}`}>
            <DialogTitle>{title}</DialogTitle>
            {Cmp &&
                <Cmp args={args} />
            }
        </Dialog>
    );
};

export default CmpGeneralModal;