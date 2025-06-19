import React from 'react';
import { useDispatch } from 'react-redux';
import CmpUserForm from '../Forms/CmpUserForm';
import { RowUserInterface } from '../../Interfaces';
import CmpUserFormAlert from '../Forms/CmpUserFormAlert';
import { changeOpenModal } from '../../../../store/slices';
import { IconButton, Menu, MenuItem } from '@mui/material';
import CmpUserFormPassword from '../Forms/CmpUserFormPassword';
import CmpUserFormPrivileges from '../Forms/CmpUserFormPrivileges';
import { Delete, Edit, LockPerson, Menu as MenuIcon, Password } from '@mui/icons-material';

interface Props {
    row: RowUserInterface;
}

const CmpUsersMenuTable = ({ row }: Props) => {
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
            open: true,
            component: CmpUserForm,
            title: 'CAMBIAR CORREO',
            args: { id_user: row.id }
        }));
    };

    const handleOpenAlertEmployeeForm = () => {
        dispatch(changeOpenModal({
            component: CmpUserFormAlert,
            open: true,
            title: 'ELIMINAR USUARIO',
            args: { id: row.id }
        }));
    };

    const handleRestorePasswordForm = () => {
        dispatch(changeOpenModal({
            component: CmpUserFormPassword,
            open: true,
            title: 'RESTAURAR CONTRASEÑA',
            args: { id: row.id }
        }));
    };

    const handlePrivilegesForm = () => {
        dispatch(changeOpenModal({
            component: CmpUserFormPrivileges,
            open: true,
            title: 'PERMISOS Y ROLES',
            args: { id: row.id },
            width: 'md'
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
                <MenuItem sx={{ fontSize: 12 }} onClick={handleOpenAlertEmployeeForm}><Delete fontSize={'small'} /> &nbsp; ELIMINAR</MenuItem>
                <MenuItem sx={{ fontSize: 12 }} onClick={handleOpenEditForm}><Edit fontSize={'small'} /> &nbsp; CAMBIAR CORREO</MenuItem>
                <MenuItem sx={{ fontSize: 12 }} onClick={handleRestorePasswordForm} ><Password fontSize={'small'} /> &nbsp; RESTAURAR CONTRASEÑA</MenuItem>
                <MenuItem sx={{ fontSize: 12 }} onClick={handlePrivilegesForm} ><LockPerson fontSize={'small'} /> &nbsp; PERMISOS Y ROLES</MenuItem>
            </Menu>
        </>
    );
};

export default CmpUsersMenuTable;