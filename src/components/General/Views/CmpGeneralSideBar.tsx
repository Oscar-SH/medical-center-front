import React from 'react';
import { RootState } from '../../../store';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';
import { handleSideBar } from '../../../store/slices';
import { useDispatch, useSelector } from 'react-redux';
import { navBarItems } from '../../../helpers/navBarHelper';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

const CmpGeneralSideBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sideBar } = useSelector((state: RootState) => state.ui);

    const handleCloseSidebar = () => { dispatch(handleSideBar(false)); };

    const handleSwitchRoute = (route: string) => { navigate(route) };

    return (
        <Drawer open={sideBar} onClose={handleCloseSidebar}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ p: 2 }}>
                <Typography variant={'h6'}> Medical Center </Typography>
                <IconButton size={'large'} onClick={handleCloseSidebar}> <ChevronLeft /></IconButton>
            </Stack>
            <Divider />
            <List>
                {navBarItems.map((item, index) => (
                    <ListItem key={`navitem-${index}`} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={() => handleSwitchRoute(item.route)}>
                            <ListItemIcon> <item.icon /> </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default CmpGeneralSideBar;