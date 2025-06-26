import { Link } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';
import { RootStateInterface } from '../../../store';
import { handleSideBar } from '../../../store/slices';
import { useDispatch, useSelector } from 'react-redux';
import { navBarItems } from '../../../helpers/navBarHelper';
import { contienePermiso } from '../Helpers/contienePermiso';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

const CmpGeneralSideBar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootStateInterface) => state.auth);
    const { sideBar } = useSelector((state: RootStateInterface) => state.ui);

    const handleCloseSidebar = () => { dispatch(handleSideBar(false)); };

    // console.log(user?.permissions);


    return (
        <Drawer open={sideBar} onClose={handleCloseSidebar}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ p: 2 }}>
                <Typography variant={'h6'}> Medical Center </Typography>
                <IconButton size={'large'} onClick={handleCloseSidebar}> <ChevronLeft /></IconButton>
            </Stack>
            <Divider />
            <List>
                {navBarItems.map((item, index) => {
                    console.log(item);
                    if (contienePermiso(item.permission, user?.permissions ?? [])) {
                        return (
                            <ListItem key={`navitem-${index}`} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton component={Link} to={item.route} onClick={handleCloseSidebar}>
                                    <ListItemIcon> <item.icon /> </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                })}
            </List>
        </Drawer>
    );
};

export default CmpGeneralSideBar;