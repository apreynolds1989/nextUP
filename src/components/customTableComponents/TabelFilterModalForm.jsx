import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { useRef } from 'react';
import { onFilterFormSubmit } from './utilities/onFilterFormSubmit';
import { MountedFilterLabels } from './MountedFilterLabels';

export const TableFilterModalForm = ({
    rowOrder,
    setRowOrder,
    columnConfig,
    filteringArr,
    setFilteringArr,
    renderedProps,
}) => {
    const form = useRef();
    // react-hook-form
    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        console.log(filteringArr);
        onFilterFormSubmit(rowOrder, setRowOrder, filteringArr);
    };
    const [filterField, setFilterField] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const [filterInput, setFilterInput] = useState('');
    const handleFilterMounting = () => {
        // when called, add current values of filterField, filterBy and filterInput to filteringArr
        const arr = filteringArr;
        setFilteringArr([...arr, [filterField, filterBy, filterInput]]);
    };

    return (
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <select
                    {...register(`filterField`)}
                    onChange={(choice) => setFilterField(choice.target.value)}
                >
                    <option value=''></option>
                    {/* Only show columns with number type data */}
                    {columnConfig.map((column) =>
                        column.inputType === 'number' ? (
                            <option
                                value={column.field}
                                key={`${column.field}FilterOption`}
                            >
                                {column.columnName}
                            </option>
                        ) : null,
                    )}
                </select>
                <select
                    {...register(`filterBy`)}
                    onChange={(choice) => setFilterBy(choice.target.value)}
                >
                    <option value=''></option>
                    <option value='='>&#61;</option>
                    <option value='<'>&#60;</option>
                    <option value='<='>&le;</option>
                    <option value='>'>&#62;</option>
                    <option value='>='>&ge;</option>
                </select>
                <TextField
                    id='filterInput'
                    name='filterInput'
                    variant='outlined'
                    color='secondary'
                    size='small'
                    fullWidth
                    {...register(`filterInput`)}
                    onChange={(choice) => setFilterInput(choice.target.value)}
                    // error={errors.firstName ? true : false}
                />
                <Button onClick={handleFilterMounting}>+</Button>
            </Box>
            {/* Mount all values of filteringArr to be displayed */}
            <MountedFilterLabels
                filteringArr={filteringArr}
                renderedProps={renderedProps}
                setFilteringArr={setFilteringArr}
            />
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
    );
};
