import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faAnglesUp,
    faAnglesDown,
} from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Typography } from '@mui/material';
import { sortCol, sortPrimary } from '../../utilities/helperFunctions';
import { TableFilterButtons } from './TableFilterButtons';
import { FilterColumnHeaders } from './FilterColumnHeaders';

export const DoubleSortTable = ({
    columnConfig,
    rowConfig,
    initialPrimaryField,
    colsToHide = [],
    ...stylingProps
}) => {
    const defaultProps = {
        tableBorder: `2px solid black`,
        outerRadius: 0,
        headerInnerBorder: `2px solid black`,
        rowEndBorder: `2px solid black`,
        rowBottomBorder: `2px solid black`,
        headerBgColor: 'white',
        headerTextColor: 'black',
        headerTextAlign: 'center',
        headerArrowColor: 'black',
        dataBgColor: 'white',
        dataTextColor: 'black',
        dataTextAlign: 'center',
    };

    // overide defaults with anything passed to stylingProps
    const renderedProps = { ...defaultProps, ...stylingProps };
    const [rowOrder, setRowOrder] = useState(rowConfig);
    const [clickedColumn, setClickedColumn] = useState('');
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const toggleIsFiltersOpen = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TableFilterButtons
                isFiltersOpen={isFiltersOpen}
                toggleIsFiltersOpen={toggleIsFiltersOpen}
                renderedProps={renderedProps}
            />
            <Box
                sx={{
                    display: 'table',
                    border: renderedProps.tableBorder,
                    borderRadius: renderedProps.outerRadius,
                    overflow: 'hidden',
                }}
            >
                {isFiltersOpen && (
                    <FilterColumnHeaders
                        columnConfig={columnConfig}
                        colsToHide={colsToHide}
                        renderedProps={renderedProps}
                    />
                )}
                <DoubleSortTableHeader
                    columnConfig={columnConfig}
                    rowConfig={rowConfig}
                    initialPrimaryField={initialPrimaryField}
                    clickedColumn={clickedColumn}
                    setClickedColumn={setClickedColumn}
                    rowOrder={rowOrder}
                    setRowOrder={setRowOrder}
                    colsToHide={colsToHide}
                    renderedProps={renderedProps}
                />
                <DoubleSortTableRows
                    rowOrder={rowOrder}
                    colsToHide={colsToHide}
                    renderedProps={renderedProps}
                />
            </Box>
        </Box>
    );
};

const DoubleSortTableHeader = ({
    columnConfig,
    rowConfig,
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

const ColumnHeaderText = ({
    columnName,
    field,
    colNum,
    columnConfig,
    rowConfig,
    initialPrimaryField,
    clickedColumn,
    setClickedColumn,
    setPrimaryOrSetSecondary,
    primarySort,
    secondarySort,
    primarySortIsAsc,
    setPrimarySortIsAsc,
    secondarySortIsAsc,
    setSecondarySortIsAsc,
    rowOrder,
    setRowOrder,
    colsToHide,
    renderedProps,
}) => {
    const [sortStatus, setSortStatus] = useState(
        primarySort === field && initialPrimaryField
            ? initialPrimaryField.sortStatus
            : 'none',
    );
    // variables to set which icon will show when sorting
    const iconUp = field === primarySort ? faAnglesUp : faAngleUp;
    const iconDown = field === primarySort ? faAnglesDown : faAngleDown;

    // maintain these states to ensure table re-sorts properly as different columns are sorted on
    useEffect(() => {
        if (primarySort === field) {
            sortStatus === 'asc'
                ? setPrimarySortIsAsc(true)
                : setPrimarySortIsAsc(false);
            // setRowOrder(sortPrimary(rowOrder, primarySort, primarySortIsAsc));
        }
        if (secondarySort === field) {
            sortStatus === 'asc'
                ? setSecondarySortIsAsc(true)
                : setSecondarySortIsAsc(false);
        }
    }, [
        primarySort,
        secondarySort,
        field,
        sortStatus,
        primarySortIsAsc,
        setPrimarySortIsAsc,
        setSecondarySortIsAsc,
    ]);

    // Remove sort icon on columns as new columns are clicked
    if (
        clickedColumn !== field &&
        sortStatus !== 'none' &&
        primarySort !== field
    ) {
        // Keep icon on secondarySort if primarySort field is clicked
        if (primarySort === clickedColumn && secondarySort === field) {
            // Is there a better way to do this? I feel like there is
            console.log(sortStatus);
        } else setSortStatus('none');
    }

    // calls in functions from helperFunctions.js
    const toggleSort = (e) => {
        setClickedColumn(e.currentTarget.dataset.field);
        if (sortStatus === 'none') {
            setSortStatus('desc');
            setRowOrder(sortCol(rowOrder, field, primarySort, false));
            setPrimaryOrSetSecondary(field, sortStatus);
        } else if (sortStatus === 'desc') {
            setSortStatus('asc');
            setRowOrder(sortCol(rowOrder, field, primarySort, true));
            setPrimaryOrSetSecondary(field, sortStatus);
        } else {
            setSortStatus('none');
            // Reset table to sort by primarySort field, keeping sortStatus accurate
            if (field !== primarySort)
                setRowOrder(
                    sortPrimary(rowOrder, primarySort, primarySortIsAsc),
                );
            // As secondarySort becomes primarySort, sort table accordingly, keeping sortStatus accurate
            else if (field === primarySort && secondarySort !== '')
                setRowOrder(
                    sortPrimary(rowOrder, secondarySort, secondarySortIsAsc),
                );
            // otherwise, reset table to original state
            else setRowOrder(rowConfig);
            setPrimaryOrSetSecondary(field, sortStatus);
        }
    };

    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';

    const endBorder =
        colNum === columnConfig.length - 1
            ? '0px'
            : renderedProps.headerInnerBorder || renderedProps.tableBorder;

    return (
        <Box
            sx={{
                display: colDisplay,
                textAlign: 'center',
                borderRight: endBorder,
                borderBottom:
                    renderedProps.headerInnerBorder ||
                    renderedProps.tableBorder,
            }}
        >
            <Button
                className='headerBtn'
                data-field={field}
                onClick={toggleSort}
                sx={{ padding: 2 }}
            >
                <Typography
                    sx={{
                        paddingRight: 2,
                        textAlign: renderedProps.headerTextAlign,
                        color: renderedProps.headerTextColor,
                    }}
                >
                    {columnName}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {sortStatus === 'asc' ? (
                        <FontAwesomeIcon
                            icon={iconUp}
                            color={renderedProps.headerArrowColor}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={iconUp}
                            color={renderedProps.headerArrowColor}
                            style={{ opacity: 0.25 }}
                        />
                    )}
                    {sortStatus === 'desc' ? (
                        <FontAwesomeIcon
                            icon={iconDown}
                            color={renderedProps.headerArrowColor}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={iconDown}
                            color={renderedProps.headerArrowColor}
                            style={{ opacity: 0.25 }}
                        />
                    )}
                </Box>
            </Button>
        </Box>
    );
};

const DoubleSortTableRows = ({ rowOrder, colsToHide, renderedProps }) => {
    return rowOrder.map((row, rowIndex) => {
        const rowKeys = Object.keys(row);
        return (
            <Box
                sx={{
                    display: 'table-row',
                    flexDirection: 'row',
                }}
                key={`row${rowIndex}`}
            >
                {rowKeys.map((cellKey, index) => (
                    <RowData
                        cellData={row[cellKey]}
                        rowLength={rowKeys.length}
                        numberOfRows={rowOrder.length}
                        colsToHide={colsToHide}
                        colNum={index}
                        rowNum={rowIndex}
                        key={`column${index}`}
                        cellKey={cellKey}
                        renderedProps={renderedProps}
                    />
                ))}
            </Box>
        );
    });
};

const RowData = ({
    cellData,
    rowLength,
    colsToHide,
    colNum,
    rowNum,
    cellKey,
    numberOfRows,
    renderedProps,
}) => {
    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';
    const endBorder =
        colNum === rowLength - 1
            ? '0px'
            : renderedProps.rowEndBorder || renderedProps.tableBorder;
    const bottomBorder =
        rowNum + 1 === numberOfRows
            ? '0px'
            : renderedProps.rowBottomBorder || renderedProps.tableBorder;
    return (
        <Box
            sx={{
                display: colDisplay,
                backgroundColor: renderedProps.dataBgColor,
                borderRight: endBorder,
                borderBottom: bottomBorder,
                padding: 0.5,
            }}
        >
            <Typography
                sx={{
                    // textAlign: cellKey === 'name' ? 'left' : 'center',
                    textAlign: renderedProps.dataTextAlign,
                    color: renderedProps.dataTextColor,
                }}
            >
                {cellData}
            </Typography>
        </Box>
    );
};
