import React from 'react';
import { RootState } from '../../../store';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { closeGeneralDrawer } from '../../../store/slices';
import { Card, CardContent, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';

const CmpGeneralDrawer = () => {
    const dispatch = useDispatch();
    const { component: Cmp, open, title } = useSelector((state: RootState) => state.ui.openDrawer);

    const handleClose = () => { dispatch(closeGeneralDrawer()); };

    return (
        <Drawer
            open={open}
            anchor={'right'}
            onClose={handleClose}
        >
            <Card>
                <CardContent>
                    <Stack spacing={1}>
                        <IconButton size={'small'} sx={{ justifyContent: 'start' }} onClick={handleClose}>
                            <CloseIcon fontSize={'small'} />
                        </IconButton>
                        <Typography>{title}</Typography>
                        <Divider />
                        {Cmp && <Cmp />}
                    </Stack>
                </CardContent>
            </Card>
        </Drawer>
    );
};

export default CmpGeneralDrawer;