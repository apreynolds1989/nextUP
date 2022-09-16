import * as React from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';

export const TableFilterModal = ({ renderedProps }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: renderedProps.headerBgColor,
        border: renderedProps.tableBorder,
        borderRadius: renderedProps.outerRadius,
        boxShadow: 24,
        p: 1,
    };

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backgroundColor: renderedProps.headerBgColor,
                }}
            >
                <Button onClick={handleOpen}>Open Filters</Button>
            </Box>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Button onClick={handleClose}>X</Button>
                        </Box>
                        <Box
                            sx={{
                                paddingX: 4,
                                paddingBottom: 2,
                            }}
                        >
                            <Typography
                                id='transition-modal-title'
                                variant='h6'
                                component='h2'
                            >
                                Set Filters
                            </Typography>
                            <Typography
                                id='transition-modal-description'
                                sx={{ mt: 2 }}
                            >
                                This will be a list of filters
                            </Typography>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};
