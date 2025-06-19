import { Link } from 'react-router-dom';
import { RootStateInterface } from '../../../store';
import { ChevronLeft } from '@mui/icons-material';
import { handleSideBar } from '../../../store/slices';
import { useDispatch, useSelector } from 'react-redux';
import { navBarItems } from '../../../helpers/navBarHelper';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

const CmpGeneralSideBar = () => {
    const dispatch = useDispatch();
    const { sideBar } = useSelector((state: RootStateInterface) => state.ui);

    const handleCloseSidebar = () => { dispatch(handleSideBar(false)); };

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
                        <ListItemButton component={Link} to={item.route} onClick={handleCloseSidebar}>
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