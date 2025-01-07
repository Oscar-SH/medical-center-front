import React from 'react';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, logout } from '../../store/slices';
import { Brightness4, Brightness7, Settings, Logout } from '@mui/icons-material';
import { MenuItem, IconButton, Box, Divider, ListItemIcon, MenuList, Popover, Typography } from '@mui/material';

interface Props {
    anchorEl: null | HTMLElement;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

const CmpGeneralUserOptions = ({ anchorEl, setAnchorEl }: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const savedTheme = localStorage.getItem('theme');
    const { darkMode } = useSelector((state: RootState) => state.ui);

    const handleClose = () => { setAnchorEl(null); };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); };

    const logoutSession = () => {
        dispatch(logout());
        navigate('/login');
    };

    const handleChangeTheme = () => { dispatch(changeTheme(savedTheme !== 'dark')); };
    return (
        <>
            <IconButton onClick={handleClick}>
                <Settings />
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                slotProps={{ paper: { sx: { width: '240px' } } }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <Box sx={{ p: '16px 20px ' }}>
                    <Typography variant={'subtitle1'}>User Lastname</Typography>
                    <Typography color={'text.secondary'} variant={'body2'}> user@user </Typography>
                </Box>
                <Divider />
                <MenuList disablePadding sx={{ p: '8px', '& .MuiMenuItem-root': { borderRadius: 1 } }}>
                    <MenuItem onClick={handleChangeTheme}>
                        <ListItemIcon> {darkMode ? <Brightness7 /> : <Brightness4 />} </ListItemIcon>
                        {darkMode ? 'Tema Claro' : 'Tema Obscuro'}
                    </MenuItem>
                    <MenuItem onClick={logoutSession}>
                        <ListItemIcon> <Logout /> </ListItemIcon>
                        Cerrar Sesión
                    </MenuItem>
                </MenuList>
            </Popover>
        </>
    );
};

export default CmpGeneralUserOptions;