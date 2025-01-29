import React from 'react';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
import CmpDoctorForm from '../Forms/CmpDoctorForm';
import { changeOpenModal } from '../../../store/slices';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { RowDoctorInterface } from '../Interfaces/DoctorsInterfaces';
import CmpDoctorAlertForm from '../Forms/CmpDoctorAlertForm';

interface Props {
    row: RowDoctorInterface;
}

const CmpDoctorsMenuTable = ({ row }: Props) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenEditForm = () => {
        dispatch(changeOpenModal({
            component: CmpDoctorForm,
            open: true,
            title: 'EDITAR MEDICO',
            args: { ...row }
        }));
    };

    const handleOpenAlertEmployeeForm = (action: string) => {
        dispatch(changeOpenModal({
            component: CmpDoctorAlertForm,
            open: true,
            title: `${action} MEDICO`,
            args: {
                action
            }
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
                slotProps={{ paper: { style: { width: '20ch' } } }}
            >
                <MenuItem onClick={handleOpenEditForm}><EditIcon /> &nbsp; EDITAR</MenuItem>
                <MenuItem onClick={() => handleOpenAlertEmployeeForm('ELIMINAR')}><DeleteIcon /> &nbsp; ELIMINAR</MenuItem>
                <MenuItem onClick={() => handleOpenAlertEmployeeForm('RECUPERAR')}><RestoreIcon /> &nbsp; RECUPERAR</MenuItem>
            </Menu>
        </>
    );
};

export default CmpDoctorsMenuTable;