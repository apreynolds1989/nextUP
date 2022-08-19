import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { sortPrimary } from '../../utilities/helperFunctions';
import { ColumnHeaderText } from './ColumnHeaderText';

export const DoubleSortTableHeader = ({
    columnConfig,
    rowConfig,
    isSortable,
    initialPrimaryField,
    clickedColumn,
    setClickedColumn,
    rowOrder,
    setRowOrder,
    colsToHide,
    renderedProps,
}) => {
    const [primarySort, setPrimarySort] = useState(
        initialPrimaryField ? initialPrimaryField.field : '',
    );
    const [primarySortIsAsc, setPrimarySortIsAsc] = useState();
    const [secondarySortIsAsc, setSecondarySortIsAsc] = useState();
    const [secondarySort, setSecondarySort] = useState('');
    const [isInitialPrimarySort, setIsInitialPrimarySort] = useState(
        initialPrimaryField ? true : false,
    );
    useEffect(() => {
        // reset these states if either sort becomes empty
        // keeps their state logic accurate
        if (primarySort === '') setPrimarySortIsAsc(undefined);
        if (secondarySort === '') setSecondarySortIsAsc(undefined);
        if (isInitialPrimarySort) {
            setRowOrder(sortPrimary(rowOrder, primarySort, primarySortIsAsc));
            setIsInitialPrimarySort(false);
        }
        console.log(
            `Primary = ${primarySort} and Secondary = ${secondarySort}`,
        );
        console.log(`primary sort is ascending: ${primarySortIsAsc}`);
        console.log(`secondary sort is ascending: ${secondarySortIsAsc}`);
    }, [
        secondarySort,
        primarySort,
        primarySortIsAsc,
        secondarySortIsAsc,
        isInitialPrimarySort,
        rowOrder,
        setRowOrder,
    ]);

    const setPrimaryOrSetSecondary = (field, sortStatus) => {
        if (primarySort === '') {
            setPrimarySort(field);
        } else if (primarySort !== field && secondarySort !== field) {
            setSecondarySort(field);
        } else if (primarySort === field && sortStatus === 'asc') {
            setPrimarySort('');
            // Moves secondarySort to primarySort and sorts the table accordingly
            if (secondarySort !== '') {
                setPrimarySort(secondarySort);
                setSecondarySort('');
            }
        } else if (secondarySort === field && sortStatus === 'asc') {
            setSecondarySort('');
        }
    };

    return (
        <Box
            sx={{
                display: 'table-row',
                backgroundColor: renderedProps.headerBgColor,
            }}
        >
            {columnConfig.map((column, index) => (
                <ColumnHeaderText
                    {...column}
                    columnConfig={columnConfig}
                    rowConfig={rowConfig}
                    isSortable={isSortable}
                    initialPrimaryField={initialPrimaryField}
                    clickedColumn={clickedColumn}
                    setClickedColumn={setClickedColumn}
                    setPrimaryOrSetSecondary={setPrimaryOrSetSecondary}
                    primarySort={primarySort}
                    secondarySort={secondarySort}
                    primarySortIsAsc={primarySortIsAsc}
                    setPrimarySortIsAsc={setPrimarySortIsAsc}
                    secondarySortIsAsc={secondarySortIsAsc}
                    setSecondarySortIsAsc={setSecondarySortIsAsc}
                    rowOrder={rowOrder}
                    setRowOrder={setRowOrder}
                    colsToHide={colsToHide}
                    colNum={index}
                    key={`column${index}`}
                    renderedProps={renderedProps}
                />
            ))}
        </Box>
    );
};
