import React from 'react';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { RowCatClinicInterface } from '../../Interfaces';
import CmpClinicForm from '../Forms/CmpClinicForm';
import { changeOpenModal } from '../../../../store/slices';
import { IconButton, Menu, MenuItem } from '@mui/material';
import CmpClinicFormAlert from '../Forms/CmpClinicFormAlert';

interface Props {
    row: RowCatClinicInterface;
}

const CmpClinicMenuTable = ({ row }: Props) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditFormClinic = () => {
        dispatch(changeOpenModal({
            component: CmpClinicForm,
            open: true,
            title: 'EDITAR CLINICA',
            args: { id: row.id }
        }));
    };

    const handleDeleteFormClinic = () => {
        dispatch(changeOpenModal({
            component: CmpClinicFormAlert,
            open: true,
            title: 'ELIMINAR CLINICA',
            args: { id: row.id }
        }));
    };

    return (
        <>
            <IconButton
                aria-haspopup
                onClick={handleClick}
                aria-label={'options'}
                aria-expanded={open ? 'true' : undefined}
                aria-controls={open ? 'long-menu' : undefined}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'long-button' }}
            >
                <MenuItem sx={{ fontSize: 14 }} onClick={handleEditFormClinic}><EditIcon /> &nbsp; EDITAR</MenuItem>
                <MenuItem sx={{ fontSize: 14 }} onClick={handleDeleteFormClinic}><DeleteIcon /> &nbsp; ELIMINAR</MenuItem>
            </Menu>
        </>
    );
};

export default CmpClinicMenuTable;