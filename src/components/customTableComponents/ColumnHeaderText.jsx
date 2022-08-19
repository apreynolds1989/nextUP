import React, { useEffect, useState } from 'react';
import {
    faAngleDown,
    faAnglesDown,
    faAnglesUp,
    faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Typography } from '@mui/material';
import { sortCol, sortPrimary } from '../../utilities/helperFunctions';

export const ColumnHeaderText = ({
    columnName,
    field,
    colNum,
    columnConfig,
    rowConfig,
    isSortable,
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

    // Remove sort icon on columns as new columns are clicked
    // Maintain sort icons on secondarySort and primarySort fields if one of those is clicked
    if (
        clickedColumn !== field &&
        sortStatus !== 'none' &&
        primarySort !== field &&
        secondarySort !== field
    )
        setSortStatus('none');

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
                borderBottom: renderedProps.headerBottomBorder,
            }}
        >
            {isSortable && (
                <Button
                    className='headerBtn'
                    data-field={field}
                    onClick={toggleSort}
                    sx={{
                        padding: 2,
                        textTransform: 'none',
                    }}
                >
                    <Typography
                        sx={{
                            paddingRight: 2,
                            textAlign: renderedProps.headerTextAlign,
                            color: renderedProps.headerTextColor,
                            fontWeight: 'bold',
                            fontSize: renderedProps.headerTextSize,
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
            )}
            {!isSortable && (
                <Typography
                    sx={{
                        paddingY: 2,
                        paddingX: 4,
                        textAlign: renderedProps.headerTextAlign,
                        color: renderedProps.headerTextColor,
                        fontWeight: 'bold',
                        fontSize: renderedProps.headerTextSize,
                    }}
                >
                    {columnName}
                </Typography>
            )}
        </Box>
    );
};
