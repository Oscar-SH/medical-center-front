import React from 'react';
import { useDispatch } from 'react-redux';
import CmpRoleForm from '../Forms/CmpRoleForm';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { RowRoleInterface } from '../../Interfaces';
import { changeOpenModal } from '../../../../store/slices';
import { IconButton, Menu, MenuItem } from '@mui/material';
import CmpPermissionAlertForm from '../Forms/CmpUserAlertForm';

interface Props {
    row: RowRoleInterface;
}

const CmpRolesMenuTable = ({ row }: Props) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditFormPermission = () => {
        dispatch(changeOpenModal({
            component: CmpRoleForm,
            open: true,
            title: 'EDITAR ROL',
            args: { id: row.id }
        }));
    };

    const handleDeleteFormPermission = () => {
        dispatch(changeOpenModal({
            component: CmpPermissionAlertForm,
            open: true,
            title: 'ELIMINAR ROL',
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
                <MenuItem sx={{ fontSize: 14 }} onClick={handleEditFormPermission}><EditIcon /> &nbsp; EDITAR</MenuItem>
                <MenuItem sx={{ fontSize: 14 }} onClick={handleDeleteFormPermission}><DeleteIcon /> &nbsp; ELIMINAR</MenuItem>
            </Menu>
        </>
    );
};

export default CmpRolesMenuTable;