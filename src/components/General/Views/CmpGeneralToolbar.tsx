import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RootStateInterface } from '../../../store';
import MenuIcon from '@mui/icons-material/Menu';
import { handleSideBar } from '../../../store/slices';
import { useDispatch, useSelector } from 'react-redux';
import CmpGeneralUserOptions from './CmpGeneralUserOptions';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';


const CmpGeneralToolbar = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { user } = useSelector((state: RootStateInterface) => state.auth);

    const handleOpenSidebar = () => { dispatch(handleSideBar(true)); };

    return (
        <Box>
            <Stack direction={'row'} alignItems={'center'} sx={{ flexGrow: 1 }} justifyContent={'space-between'}>
                <Stack direction={'row'} alignItems={'center'}>
                    {user &&
                        <IconButton size={'large'} color={'inherit'} edge={'start'} onClick={handleOpenSidebar}>
                            <MenuIcon />
                        </IconButton>
                    }
                    <Stack
                        component={Link}
                        direction={'row'}
                        alignItems={'center'}
                        to={user ? '/dashboard' : '/login'}
                        sx={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <Avatar sx={{ width: 40, height: 40, mr: 1 }} src={`#`} />
                        <Typography variant={'h6'} fontWeight={'bold'}>Medical System</Typography>
                    </Stack>
                </Stack>
                {user &&
                    <CmpGeneralUserOptions anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                }
            </Stack>
        </Box>
    );
};

export default CmpGeneralToolbar;