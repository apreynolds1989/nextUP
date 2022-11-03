import React from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import { TableFilterModalForm } from './TabelFilterModalForm';
import { useState } from 'react';

export const TableFilterModal = ({
    renderedProps,
    columnConfig,
    rowConfig,
    setRowOrder,
    filteringArr,
    setFilteringArr,
    setSearchArr,
}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
            xs: '95vw',
            sm: '600px',
        },
        bgcolor: renderedProps.headerBgColor,
        border: renderedProps.tableBorder,
        borderRadius: renderedProps.outerRadius,
        boxShadow: 24,
        p: 1,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backgroundColor: 'transparent',
                }}
            >
                <Button
                    onClick={handleOpen}
                    sx={{
                        color: renderedProps.interactableTextColor,
                        fontWeight: 'bold',
                    }}
                >
                    Open Filters
                </Button>
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
                                paddingX: {
                                    xs: 1,
                                    sm: 6,
                                },
                                paddingBottom: 5,
                            }}
                        >
                            <Typography
                                id='transition-modal-title'
                                variant='h6'
                                component='h2'
                                sx={{
                                    color: renderedProps.interactableTextColor,
                                    paddingBottom: 2,
                                    textDecoration: 'underline',
                                    fontWeight: 'bold',
                                }}
                            >
                                Filters
                            </Typography>
                            <Box
                                id='transition-modal-description'
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignContent: 'center',
                                }}
                            >
                                <TableFilterModalForm
                                    rowConfig={rowConfig}
                                    setRowOrder={setRowOrder}
                                    columnConfig={columnConfig}
                                    filteringArr={filteringArr}
                                    setFilteringArr={setFilteringArr}
                                    setSearchArr={setSearchArr}
                                    handleClose={handleClose}
                                    renderedProps={renderedProps}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};
