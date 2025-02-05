import React from 'react';
import { useDispatch } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Button, DialogActions } from '@mui/material';
import { closeGeneralModal } from '../../../store/slices';

interface Props {
    handleSubmit: () => void;
}

const CmpGeneralModalActions = ({ handleSubmit }: Props) => {
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeGeneralModal());
    };

    return (
        <DialogActions>
            <Button onClick={handleCloseModal} variant={'outlined'} startIcon={<CloseIcon />}>Cerrar</Button>
            <Button onClick={handleSubmit} variant={'outlined'} startIcon={<CheckIcon />}>Confirmar</Button>
        </DialogActions>
    )
}

export default CmpGeneralModalActions
