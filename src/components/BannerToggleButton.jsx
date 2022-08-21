import React from 'react';
import { Button, Typography } from '@mui/material';
import { palette } from '../assets/theme';

export const BannerToggleButton = ({
    isMobileSize,
    displayedTable,
    setDisplayedTable,
    buttonBackground,
    title,
}) => {
    return (
        <Button
            onClick={() => setDisplayedTable(title)}
            sx={{
                boxShadow: 1,
                ...buttonBackground,
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
                    fontSize: isMobileSize ? '12px' : '20px',
                    textDecoration: 'none',
                }}
            >
                {title}
            </Typography>
        </Button>
    );
};
