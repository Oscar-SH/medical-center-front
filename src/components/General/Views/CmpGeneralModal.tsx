import { RootStateInterface } from '../../../store';
import { Dialog, DialogTitle } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeGeneralModal } from '../../../store/slices';

const CmpGeneralModal = () => {
    const dispatch = useDispatch();
    const { args, component: Cmp, open, title, width } = useSelector((state: RootStateInterface) => state.ui.openModal);

    const handleCloseModal = () => {
        dispatch(closeGeneralModal());
    };

    return (
        <Dialog fullWidth open={open} maxWidth={width && `${width}`} onClose={handleCloseModal}>
            <DialogTitle>{title}</DialogTitle>
            {Cmp &&
                <Cmp args={args} />
            }
        </Dialog>
    );
};

export default CmpGeneralModal;