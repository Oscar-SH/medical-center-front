import React from 'react';
import { RootState } from '../../store';
import { handleSideBar } from '../../store/slices';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeft, Inbox, Mail } from '@mui/icons-material';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';

const CmpGeneralSideBar = () => {
    const dispatch = useDispatch();
    const { sideBar } = useSelector((state: RootState) => state.ui);

    const handleCloseSidebar = () => { dispatch(handleSideBar(false)); };

    return (
        <Drawer open={sideBar} onClose={handleCloseSidebar}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                <IconButton size={'large'} onClick={handleCloseSidebar}> <ChevronLeft /></IconButton>
            </Stack>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Inbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default CmpGeneralSideBar;