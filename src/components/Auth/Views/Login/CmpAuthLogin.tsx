import React from 'react';
import { Grid2 as Grid } from "@mui/material";
import CmpAuthLoginForm from './CmpAuthLoginForm';
import CmpAuthLoginWelcome from './CmpAuthLoginWelcome';

const CmpAuthLogin = () => {
    return (
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid
                size={4}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <CmpAuthLoginForm />
            </Grid>
            <Grid size={8}>
                <CmpAuthLoginWelcome />
            </Grid>
        </Grid>

    );
};

export default CmpAuthLogin;