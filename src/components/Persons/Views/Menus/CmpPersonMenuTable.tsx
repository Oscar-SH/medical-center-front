import React from 'react';
import { useDispatch } from 'react-redux';
import KeyIcon from '@mui/icons-material/Key';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
import { RowPersonInterface } from '../../Interfaces';
import CmpPersonFormOnly from '../Forms/CmpPersonFormOnly';
import { changeOpenModal } from '../../../../store/slices';
import { IconButton, Menu, MenuItem } from '@mui/material';
import CmpPersonAlertForm from '../Forms/CmpPersonAlertForm';
import CmpUserForm from '../../../Users/Views/Forms/CmpUserForm';

interface Props { row: RowPersonInterface; }

const CmpPersonMenuTable = ({ row }: Props) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); };

    const handleClose = () => { setAnchorEl(null); };

    const handleOpenEditForm = () => {
        dispatch(changeOpenModal({
            component: CmpPersonFormOnly,
            open: true,
            title: 'EDITAR PERSONA',
            args: { ...row }
        }));
    };

    const handleOpenAlertEmployeeForm = (action: string) => {
        dispatch(changeOpenModal({
            component: CmpPersonAlertForm,
            open: true,
            title: `${action} PERSONA`,
            args: { action, id: row.id }
        }));
    };

    const handleUserEmployeeForm = () => {
        dispatch(changeOpenModal({
            component: CmpUserForm,
            open: true,
            title: 'ASIGNAR USUARIO',
            args: { id_person: row.id }
        }));
    };

    return (
        <>
            <IconButton
                size={'small'}
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
                {!row.deleted_at ?
                    <div>
                        <MenuItem sx={{ fontSize: 14 }} onClick={handleOpenEditForm} ><EditIcon /> &nbsp; EDITAR</MenuItem>
                        <MenuItem sx={{ fontSize: 14 }} onClick={() => handleOpenAlertEmployeeForm('ELIMINAR')} ><DeleteIcon /> &nbsp; ELIMINAR</MenuItem>
                        {!row.id_doctor &&
                            <MenuItem sx={{ fontSize: 14 }} onClick={handleUserEmployeeForm} ><KeyIcon /> &nbsp; ASIGNAR USUARIO</MenuItem>
                        }
                    </div>
                    :
                    <MenuItem sx={{ fontSize: 14 }} onClick={() => handleOpenAlertEmployeeForm('RECUPERAR')}><RestoreIcon /> &nbsp; RECUPERAR</MenuItem>
                }
            </Menu>
        </>
    );
};

export default CmpPersonMenuTable;