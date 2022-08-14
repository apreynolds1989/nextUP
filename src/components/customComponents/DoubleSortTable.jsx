import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faAnglesUp,
    faAnglesDown,
} from '@fortawesome/free-solid-svg-icons';
import {
    Box,
    Button,
    FormControl,
    Input,
    MenuItem,
    Select,
    Typography,
} from '@mui/material';
import { sortCol, sortPrimary } from '../../utilities/helperFunctions';

export const DoubleSortTable = ({
    columnConfig,
    rowConfig,
    colsToHide = [],
    stylingProps,
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
    const [filtersOpen, setFiltersOpen] = useState(false);

    const handleFiltersOpen = () => {
        setFiltersOpen(!filtersOpen);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TableFilter
                filtersOpen={filtersOpen}
                handleFiltersOpen={handleFiltersOpen}
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
                {filtersOpen && (
                    <FilterColumnHeaders
                        columnConfig={columnConfig}
                        rowConfig={rowConfig}
                        rowOrder={rowOrder}
                        setRowOrder={setRowOrder}
                        colsToHide={colsToHide}
                        renderedProps={renderedProps}
                    />
                )}
                <DoubleSortTableHeader
                    columnConfig={columnConfig}
                    rowConfig={rowConfig}
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
    clickedColumn,
    setClickedColumn,
    rowOrder,
    setRowOrder,
    colsToHide,
    ...renderedProps
}) => {
    const [primarySort, setPrimarySort] = useState('');
    const [primarySortIsAsc, setPrimarySortIsAsc] = useState();
    const [secondarySortIsAsc, setSecondarySortIsAsc] = useState();
    const [secondarySort, setSecondarySort] = useState('');
    useEffect(() => {
        // reset these states if either sort becomes empty
        // keeps their state logic accurate
        if (primarySort === '') setPrimarySortIsAsc(undefined);
        if (secondarySort === '') setSecondarySortIsAsc(undefined);
        console.log(
            `Primary = ${primarySort} and Secondary = ${secondarySort}`,
        );
        console.log(`primary sort is ascending: ${primarySortIsAsc}`);
        console.log(`secondary sort is ascending: ${secondarySortIsAsc}`);
    }, [secondarySort, primarySort, primarySortIsAsc, secondarySortIsAsc]);
    // the second parameter was suggested by VSCode, what does it do?

    const setPrimaryOrSetSecondary = (field, sortStatus) => {
        if (primarySort === '') {
            setPrimarySort(field);
        } else if (primarySort !== field && secondarySort !== field) {
            setSecondarySort(field);
        } else if (primarySort === field && sortStatus === 'desc') {
            setPrimarySort('');
            // Moves secondarySort to primarySort and sorts the table accordingly
            if (secondarySort !== '') {
                setPrimarySort(secondarySort);
                setSecondarySort('');
            }
        } else if (secondarySort === field && sortStatus === 'desc') {
            setSecondarySort('');
        }
    };

    return (
        <Box
            sx={{
                display: 'table-row',
                backgroundColor: renderedProps.renderedProps.headerBgColor,
            }}
        >
            {columnConfig.map((column, index) => (
                <ColumnHeaderText
                    {...column}
                    columnConfig={columnConfig}
                    rowConfig={rowConfig}
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
    initialSort = 'none',
    field,
    colNum,
    columnConfig,
    rowConfig,
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
    ...renderedProps
}) => {
    const [sortStatus, setSortStatus] = useState('');
    // variables to set which icon will show when sorting
    const iconUp = field === primarySort ? faAnglesUp : faAngleUp;
    const iconDown = field === primarySort ? faAnglesDown : faAngleDown;

    // maintain these states to ensure table re-sorts properly as different columns are sorted on
    useEffect(() => {
        if (primarySort === field) {
            sortStatus === 'asc'
                ? setPrimarySortIsAsc(true)
                : setPrimarySortIsAsc(false);
        }
        if (secondarySort === field) {
            sortStatus === 'asc'
                ? setSecondarySortIsAsc(true)
                : setSecondarySortIsAsc(false);
        }
    });

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
            setSortStatus('asc');
            setRowOrder(sortCol(rowOrder, field, primarySort, true));
            setPrimaryOrSetSecondary(field, sortStatus);
        } else if (sortStatus === 'asc') {
            setSortStatus('desc');
            setRowOrder(sortCol(rowOrder, field, primarySort, false));
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
            : renderedProps.renderedProps.renderedProps.headerInnerBorder ||
              renderedProps.renderedProps.renderedProps.tableBorder;

    return (
        <Box
            sx={{
                display: colDisplay,
                borderRight: endBorder,
                borderBottom:
                    renderedProps.renderedProps.renderedProps
                        .headerInnerBorder ||
                    renderedProps.renderedProps.renderedProps.tableBorder,
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
                        textAlign:
                            renderedProps.renderedProps.renderedProps
                                .headerTextAlign,
                        color: renderedProps.renderedProps.renderedProps
                            .headerTextColor,
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
                            color={
                                renderedProps.renderedProps.renderedProps
                                    .headerArrowColor
                            }
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={iconUp}
                            color={
                                renderedProps.renderedProps.renderedProps
                                    .headerArrowColor
                            }
                            style={{ opacity: 0.25 }}
                        />
                    )}
                    {sortStatus === 'desc' ? (
                        <FontAwesomeIcon
                            icon={iconDown}
                            color={
                                renderedProps.renderedProps.renderedProps
                                    .headerArrowColor
                            }
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={iconDown}
                            color={
                                renderedProps.renderedProps.renderedProps
                                    .headerArrowColor
                            }
                            style={{ opacity: 0.25 }}
                        />
                    )}
                </Box>
            </Button>
        </Box>
    );
};

const DoubleSortTableRows = ({ rowOrder, colsToHide, ...renderedProps }) => {
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
            : renderedProps.renderedProps.rowEndBorder ||
              renderedProps.renderedProps.tableBorder;
    const bottomBorder =
        rowNum + 1 === numberOfRows
            ? '0px'
            : renderedProps.renderedProps.rowBottomBorder ||
              renderedProps.renderedProps.tableBorder;
    return (
        <Box
            sx={{
                display: colDisplay,
                backgroundColor: renderedProps.renderedProps.dataBgColor,
                borderRight: endBorder,
                borderBottom: bottomBorder,
                padding: 0.5,
            }}
        >
            <Typography
                sx={{
                    // textAlign: cellKey === 'name' ? 'left' : 'center',
                    textAlign: renderedProps.renderedProps.dataTextAlign,
                    color: renderedProps.renderedProps.dataTextColor,
                }}
            >
                {cellData}
            </Typography>
        </Box>
    );
};

// A filter button to open Filters row
const TableFilter = ({ filtersOpen, handleFiltersOpen, renderedProps }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                backgroundColor: renderedProps.headerBgColor,
                paddingRight: 5,
                paddingBottom: 1,
            }}
        >
            {!filtersOpen && (
                <Button onClick={handleFiltersOpen}>Filters</Button>
            )}
            {filtersOpen && (
                <>
                    <Box
                        sx={{
                            borderRight:
                                renderedProps.headerInnerBorder ||
                                renderedProps.tableBorder,
                        }}
                    >
                        {/* this button will call function to set filters on table */}
                        <Button onClick={handleFiltersOpen}>Set Filters</Button>
                    </Box>
                    <Box
                        sx={{
                            borderRight:
                                renderedProps.headerInnerBorder ||
                                renderedProps.tableBorder,
                        }}
                    >
                        {/* this button will call function to reset filters on table */}
                        <Button onClick={handleFiltersOpen}>
                            Reset Filters
                        </Button>
                    </Box>
                    <Box>
                        <Button onClick={handleFiltersOpen}>
                            Close Filters
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

const FilterColumnHeaders = ({
    columnConfig,
    rowConfig,
    rowOrder,
    setRowOrder,
    colsToHide,
    ...renderedProps
}) => {
    return (
        <Box
            sx={{
                display: 'table-row',
                backgroundColor: renderedProps.renderedProps.headerBgColor,
            }}
        >
            {columnConfig.map((column, index) => (
                <FilterColumnHeaderForms
                    {...column}
                    columnConfig={columnConfig}
                    rowConfig={rowConfig}
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

const FilterColumnHeaderForms = ({
    columnName,
    field,
    inputType,
    colNum,
    columnConfig,
    rowConfig,
    rowOrder,
    setRowOrder,
    colsToHide,
    ...renderedProps
}) => {
    const [filterOperator, setFilterOperator] = useState('equal');

    const handleChange = (event) => {
        setFilterOperator(event.target.value);
    };

    const ariaLabel = { 'aria-label': `${field} search box` };

    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';

    const endBorder =
        colNum === columnConfig.length - 1
            ? '0px'
            : renderedProps.renderedProps.renderedProps.headerInnerBorder ||
              renderedProps.renderedProps.renderedProps.tableBorder;

    return (
        <Box
            sx={{
                display: colDisplay,
                padding: 1,
                borderRight: endBorder,
                // borderBottom:
                //     renderedProps.renderedProps.renderedProps
                //         .headerInnerBorder ||
                //     renderedProps.renderedProps.renderedProps.tableBorder,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {inputType === 'number' && (
                    <>
                        <FormControl
                            size='small'
                            sx={{ minWidth: '65px', paddingRight: 1 }}
                        >
                            <Select
                                value={filterOperator}
                                autoWidth
                                onChange={handleChange}
                            >
                                <MenuItem value={'equal'}>&#61;</MenuItem>
                                <MenuItem value={'greaterThan'}>&#62;</MenuItem>
                                <MenuItem value={'greatThanOrEqual'}>
                                    &#62;&#61;
                                </MenuItem>
                                <MenuItem value={'lessThan'}>&#60;</MenuItem>
                                <MenuItem value={'lessThanOrEqual'}>
                                    &#60;&#61;
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <Input
                            placeholder='Filter by:'
                            inputProps={ariaLabel}
                        />
                    </>
                )}
                {inputType === 'text' && (
                    <Input placeholder='Search...' inputProps={ariaLabel} />
                )}
                {/* <FormControl
                    size='small'
                    sx={{ minWidth: '65px', paddingRight: 1 }}
                >
                    <Select
                        value={filterOperator}
                        autoWidth
                        onChange={handleChange}
                    >
                        <MenuItem value={'equal'}>&#61;</MenuItem>
                        <MenuItem value={'greaterThan'}>&#62;</MenuItem>
                        <MenuItem value={'greatThanOrEqual'}>
                            &#62;&#61;
                        </MenuItem>
                        <MenuItem value={'lessThan'}>&#60;</MenuItem>
                        <MenuItem value={'lessThanOrEqual'}>
                            &#60;&#61;
                        </MenuItem>
                    </Select>
                </FormControl>
                <Input placeholder='Filter by:' inputProps={ariaLabel} /> */}
            </Box>
        </Box>
    );
};
