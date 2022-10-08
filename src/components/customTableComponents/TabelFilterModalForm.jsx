import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { useRef } from 'react';
import { onFilterFormSubmit } from './utilities/onFilterFormSubmit';
import { MountedFilterLabels } from './MountedFilterLabels';

export const TableFilterModalForm = ({
    rowConfig,
    rowOrder,
    setRowOrder,
    columnConfig,
    filteringArr,
    setFilteringArr,
    handleClose,
    renderedProps,
}) => {
    const form = useRef();
    // react-hook-form
    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        handleClose();
        filteringArr.length === 0
            ? setRowOrder(rowConfig)
            : onFilterFormSubmit(rowOrder, setRowOrder, filteringArr);
    };
    const [filterField, setFilterField] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const [filterInput, setFilterInput] = useState('');
    const [forceRerender, setForceRerender] = useState(false);

    const createCurrentFields = (arr) => {
        const currentFields = [];
        arr.forEach((elementArr) => {
            currentFields.push(elementArr[0]);
        });
        return currentFields;
    };

    const replaceExistingField = (arr) => {
        arr.forEach((elementArr, index) => {
            if (elementArr[0] === filterField)
                arr[index] = [filterField, filterBy, filterInput];
        });
        setForceRerender(!forceRerender);
        return arr;
    };

    const handleFilterMounting = () => {
        // when called, check if the filterField already exists, if it does replace it,
        // if it doesn't add to end of filteringArr
        const arr = filteringArr;
        const currentFields = createCurrentFields(arr);
        currentFields.includes(filterField)
            ? setFilteringArr(replaceExistingField(arr))
            : setFilteringArr([...arr, [filterField, filterBy, filterInput]]);

        //? In above code, the first setFilteringArr does not trigger re-render without forceRerender state
        //? but the second one does?
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
