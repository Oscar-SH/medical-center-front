import React from 'react';
import { useDispatch } from 'react-redux';
import { success } from '../../../theme/colors';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { green, red } from '@mui/material/colors';
import ErrorIcon from '@mui/icons-material/Error';
import { SerializedError } from '@reduxjs/toolkit';
import { closeGeneralModal } from '../../../store/slices';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Box, Button, CircularProgress, DialogActions, Fab } from '@mui/material';

interface Props {
    btnText: string;
    loading: boolean;
    success: boolean;
    handleSubmit: () => void;
    error: FetchBaseQueryError | SerializedError | undefined | boolean;
}

const CmpGeneralModalActions = ({ handleSubmit, error, loading, btnText, success }: Props) => {
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeGeneralModal());
    };

    const buttonSx = {
        ...(success && {
            bgcolor: green[500], '&:hover': { bgcolor: green[700] }
        }),
        ...(error && {
            bgcolor: red[500], '&:hover': { bgcolor: red[700] }
        })
    };

    return (
        <DialogActions>
            <Button
                variant='outlined'
                onClick={handleCloseModal}
                startIcon={<CloseIcon />}
            >
                Cancelar
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                        variant='contained'
                        sx={buttonSx}
                        disabled={loading || success}
                        onClick={handleSubmit}
                        color={error ? 'error' : 'success'}
                    >
                        {btnText}
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: green[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
                {(success || error) &&
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Fab
                            aria-label='save-submit'
                            color='primary'
                            sx={buttonSx}
                        >
                            {success && (<CheckIcon />)}
                            {error && <ErrorIcon />}
                            {!success && !error && (<SaveIcon />)}
                        </Fab>
                        {loading && (
                            <CircularProgress
                                size={68}
                                sx={{
                                    position: 'absolute',
                                    color: green[500],
                                    top: -6,
                                    left: -6,
                                    zIndex: 1
                                }}
                            />
                        )}
                    </Box>
                }
            </Box>
        </DialogActions>
    );
}

export default CmpGeneralModalActions
