import React from 'react';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import { RowDoctorInterface } from '../../Interfaces';
import { IconButton, Menu, MenuItem } from '@mui/material';
import CmpDoctorFormEdit from '../Forms/CmpDoctorFormEdit';
import { changeOpenModal } from '../../../../store/slices';

interface Props {
    row: RowDoctorInterface;
}

const CmpDoctorsMenuTable = ({ row }: Props) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); };

    const handleClose = () => { setAnchorEl(null); };

    const handleOpenEditForm = () => {
        dispatch(changeOpenModal({
            component: CmpDoctorFormEdit,
            open: true,
            title: 'EDITAR MEDICO',
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
                slotProps={{ paper: { style: { width: '20ch' } } }}
            >
                <MenuItem sx={{ fontSize: 14 }} onClick={handleOpenEditForm}><EditIcon /> &nbsp; EDITAR</MenuItem>
            </Menu>
        </>
    );
};

export default CmpDoctorsMenuTable;