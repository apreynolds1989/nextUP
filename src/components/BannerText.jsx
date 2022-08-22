import React from 'react';
import { Box, Typography } from '@mui/material';
import { ShootingPuck } from './ShootingPuck';

export const BannerText = ({ isMobileSize, text }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}
        >
            <ShootingPuck width={50} height={50} />
            <Typography
                variant='body1'
                sx={{
                    fontWeight: 'bold',
                    fontSize: isMobileSize ? '12px' : '16px',
                    paddingLeft: 1,
                    alignSelf: 'center',
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};
