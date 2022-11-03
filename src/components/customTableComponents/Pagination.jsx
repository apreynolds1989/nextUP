import { Box, Button } from '@mui/material';
import React from 'react';

export const Pagination = ({
    firstItemOnPage,
    setFirstItemOnPage,
    lastItemOnPage,
    setLastItemOnPage,
    setPaginatedRows,
    rowOrder,
    renderedProps,
}) => {
    const paginationNextHandler = () => {
        setFirstItemOnPage(firstItemOnPage + 25);
        setLastItemOnPage(
            lastItemOnPage + 25 > rowOrder.length
                ? rowOrder.length
                : lastItemOnPage + 25,
        );
        setPaginatedRows(rowOrder.slice(firstItemOnPage, lastItemOnPage));
    };

    const paginationPrevHandler = () => {
        const lastItemOfArr = rowOrder.length - 1;
        setFirstItemOnPage(firstItemOnPage - 25 < 0 ? 0 : firstItemOnPage - 25);
        setLastItemOnPage(
            lastItemOnPage === rowOrder.length
                ? lastItemOfArr - (rowOrder.length % 25)
                : lastItemOnPage - 25,
        );
        setPaginatedRows(rowOrder.slice(firstItemOnPage, lastItemOnPage));
    };

    const paginationFirstPageHandler = () => {
        setFirstItemOnPage(0);
        setLastItemOnPage(25);
        setPaginatedRows(rowOrder.slice(firstItemOnPage, lastItemOnPage));
    };

    const paginationLastPageHandler = () => {
        const lastItemOfArr = rowOrder.length - 1;
        setFirstItemOnPage(lastItemOfArr - (rowOrder.length % 25));
        setLastItemOnPage(lastItemOfArr + 1);
        setPaginatedRows(rowOrder.slice(firstItemOnPage, lastItemOnPage));
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: 2,
            }}
        >
            <Button
                onClick={
                    firstItemOnPage !== 0 ? paginationFirstPageHandler : null
                }
                sx={{
                    fontWeight: 'bold',
                    borderRight: 2,
                    borderColor: renderedProps.dataTextColor,
                    borderRadius: 0,
                    color: renderedProps.interactableTextColor,
                }}
            >
                First Page
            </Button>
            <Button
                onClick={firstItemOnPage !== 0 ? paginationPrevHandler : null}
                sx={{
                    fontWeight: 'bold',
                    borderRight: 2,
                    borderColor: renderedProps.dataTextColor,
                    borderRadius: 0,
                    color: renderedProps.interactableTextColor,
                }}
            >
                Prev 25
            </Button>
            <Button
                onClick={
                    lastItemOnPage !== rowOrder.length
                        ? paginationNextHandler
                        : null
                }
                sx={{
                    fontWeight: 'bold',
                    borderRight: 2,
                    borderColor: renderedProps.dataTextColor,
                    borderRadius: 0,
                    color: renderedProps.interactableTextColor,
                }}
            >
                Next 25
            </Button>
            <Button
                onClick={
                    lastItemOnPage !== rowOrder.length
                        ? paginationLastPageHandler
                        : null
                }
                sx={{
                    fontWeight: 'bold',
                    color: renderedProps.interactableTextColor,
                }}
            >
                Last Page
            </Button>
        </Box>
    );
};
