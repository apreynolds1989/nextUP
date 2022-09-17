import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Backdrop,
    Box,
    Modal,
    Fade,
    Button,
    Typography,
    InputLabel,
    Grid,
    OutlinedInput,
} from '@mui/material';

export const TableFilterModal = ({ renderedProps, columnConfig }) => {
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // react-hook-form
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

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
                                paddingX: 6,
                                paddingBottom: 5,
                            }}
                        >
                            <Typography
                                id='transition-modal-title'
                                variant='h6'
                                component='h2'
                                sx={{
                                    paddingBottom: 2,
                                    textDecoration: 'underline',
                                    fontWeight: 'bold',
                                }}
                            >
                                Filters
                            </Typography>
                            <Box
                                id='transition-modal-description'
                                component='form'
                                onSubmit={handleSubmit(onSubmit)}
                                noValidate
                                autoComplete='off'
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignContent: 'center',
                                }}
                            >
                                {columnConfig.map((column) => (
                                    <Grid container sx={{ paddingBottom: 1 }}>
                                        <Grid
                                            item
                                            xs={5}
                                            sx={{ margin: 'auto' }}
                                        >
                                            <InputLabel>
                                                {column.columnName}
                                            </InputLabel>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={2}
                                            sx={{ margin: 'auto' }}
                                        >
                                            <SelectField
                                                register={register}
                                                variable={column.columnName}
                                            />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <OutlinedInput
                                                size='small'
                                                {...register(
                                                    `${column.field}`,
                                                    {
                                                        maxLength: 20,
                                                    },
                                                )}
                                            />
                                        </Grid>
                                    </Grid>
                                ))}

                                {/* <input
                                        {...register('lastName', {
                                            pattern: /^[A-Za-z]+$/i,
                                        })}
                                    />
                                    <input
                                        type='number'
                                        {...register('age', {
                                            min: 18,
                                            max: 99,
                                        })}
                                    /> */}
                                <Button
                                    variant='contained'
                                    component='label'
                                    sx={{ marginTop: 2 }}
                                >
                                    Set Filters
                                    <input type='submit' hidden />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

const SelectField = ({ register, variable }) => {
    return (
        <select {...register(`${variable}FilterBy`)}>
            <option value=''></option>
            <option value='equal'>&#61;</option>
            <option value='lessThan'>&#60;</option>
            <option value='lessThanOrEqual'>&le;</option>
            <option value='greaterThan'>&#62;</option>
            <option value='greaterThanOrEqual'>&ge;</option>
        </select>
    );
};
