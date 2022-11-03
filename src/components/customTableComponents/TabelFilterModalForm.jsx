import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useRef } from 'react';
import { onFilterFormSubmit } from './utilities/onFilterFormSubmit';
import { MountedFilterLabels } from './MountedFilterLabels';

export const TableFilterModalForm = ({
    rowConfig,
    setRowOrder,
    columnConfig,
    filteringArr,
    setFilteringArr,
    setSearchArr,
    handleClose,
    renderedProps,
}) => {
    const form = useRef();
    // react-hook-form
    const { handleSubmit } = useForm();
    const onSubmit = () => {
        handleClose();
        if (filteringArr.length === 0) {
            setRowOrder(rowConfig);
            setSearchArr([]);
        } else {
            onFilterFormSubmit(
                rowConfig,
                setRowOrder,
                filteringArr,
                setSearchArr,
            );
        }
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
                    justifyContent: 'center',
                }}
            >
                <TextField
                    id='filterField'
                    name='filterField'
                    select
                    size='small'
                    value={filterField}
                    onChange={(choice) => setFilterField(choice.target.value)}
                    sx={{
                        width: '40%',
                        paddingRight: 1,
                    }}
                >
                    <MenuItem value=''></MenuItem>
                    {/* Only show columns with number type data */}
                    {columnConfig.map((column) =>
                        column.inputType === 'number' ? (
                            <MenuItem
                                value={column.field}
                                key={`${column.field}FilterOption`}
                            >
                                {column.columnName}
                            </MenuItem>
                        ) : null,
                    )}
                </TextField>
                <TextField
                    id='filterBy'
                    name='filterBy'
                    select
                    size='small'
                    value={filterBy}
                    onChange={(choice) => setFilterBy(choice.target.value)}
                    sx={{
                        width: '20%',
                        paddingRight: 1,
                    }}
                >
                    <MenuItem value=''></MenuItem>
                    <MenuItem value='='>&#61;</MenuItem>
                    <MenuItem value='<'>&#60;</MenuItem>
                    <MenuItem value='<='>&le;</MenuItem>
                    <MenuItem value='>'>&#62;</MenuItem>
                    <MenuItem value='>='>&ge;</MenuItem>
                </TextField>
                <TextField
                    id='filterInput'
                    name='filterInput'
                    variant='outlined'
                    color='secondary'
                    size='small'
                    value={filterInput}
                    onChange={(choice) => setFilterInput(choice.target.value)}
                    sx={{
                        width: '30%',
                    }}
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
                    backgroundColor: renderedProps.interactableTextColor,
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
