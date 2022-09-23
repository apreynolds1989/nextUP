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
    TextField,
} from '@mui/material';
import { useRef } from 'react';
import { onFilterFormSubmit } from './utilities/onFilterFormSubmit';

export const TableFilterModal = ({
    renderedProps,
    columnConfig,
    rowOrder,
    setRowOrder,
}) => {
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

    const form = useRef();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // react-hook-form
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        onFilterFormSubmit(rowOrder, setRowOrder, columnConfig, data);
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
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignContent: 'center',
                                }}
                            >
                                <form
                                    ref={form}
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    {columnConfig.map((column) =>
                                        column.inputType === 'string' ? (
                                            <FilterStringField
                                                key={`${column.field}FilterField`}
                                                register={register}
                                                label={column.columnName}
                                                field={column.field}
                                            />
                                        ) : (
                                            <FilterNumberField
                                                key={`${column.field}FilterField`}
                                                register={register}
                                                label={column.columnName}
                                                field={column.field}
                                            />
                                        ),
                                    )}
                                    <Button
                                        variant='contained'
                                        component='label'
                                        sx={{
                                            display: 'flex',
                                            maxWidth: '200px',
                                            marginTop: 2,
                                            marginX: 'auto',
                                        }}
                                    >
                                        Set Filters
                                        <input type='submit' hidden />
                                    </Button>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

const FilterStringField = ({ register, label, field }) => {
    return (
        <Grid container sx={{ paddingBottom: 1 }}>
            <Grid item xs={5} sx={{ margin: 'auto' }}>
                <InputLabel>{label}</InputLabel>
            </Grid>
            <Grid item xs={7}>
                <TextField
                    id={field}
                    name={field}
                    variant='outlined'
                    color='secondary'
                    size='small'
                    fullWidth
                    {...register(`${field}`)}
                    // error={errors.firstName ? true : false}
                />
            </Grid>
        </Grid>
    );
};

const FilterNumberField = ({ register, label, field }) => {
    return (
        <Grid container sx={{ paddingBottom: 1 }}>
            <Grid item xs={5} sx={{ margin: 'auto' }}>
                <InputLabel>{label}</InputLabel>
            </Grid>
            <Grid item xs={2} sx={{ margin: 'auto' }}>
                <select {...register(`${field}FilterBy`)}>
                    <option value=''></option>
                    <option value='equal'>&#61;</option>
                    <option value='lessThan'>&#60;</option>
                    <option value='lessThanOrEqual'>&le;</option>
                    <option value='greaterThan'>&#62;</option>
                    <option value='greaterThanOrEqual'>&ge;</option>
                </select>
            </Grid>
            <Grid item xs={5}>
                <TextField
                    id={field}
                    name={field}
                    variant='outlined'
                    color='secondary'
                    size='small'
                    fullWidth
                    {...register(`${field}`)}
                    // error={errors.firstName ? true : false}
                />
            </Grid>
        </Grid>
    );
};
