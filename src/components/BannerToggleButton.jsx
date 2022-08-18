import React from 'react';
import { Button, Typography } from '@mui/material';
import { palette } from '../assets/theme';

export const BannerToggleButton = ({
    displayedTable,
    setDisplayedTable,
    background,
    title,
}) => {
    return (
        <Button
            onClick={() => setDisplayedTable(title)}
            sx={{
                boxShadow: 1,
                ...background,
                backgroundColor:
                    displayedTable === title
                        ? `${palette.gtBlue}75`
                        : `${palette.gtBlue}15`,
            }}
        >
            <Typography
                variant='h6'
                sx={{
                    paddingX: 5,
                    paddingY: 1,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                }}
            >
                {title}
            </Typography>
        </Button>
    );
};
