import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { bannerSX, bannerSxMobile } from '../assets/theme';
import { BannerToggleButton } from './BannerToggleButton';
import { ShootingPuck } from './ShootingPuck';

export const BannerWithToggle = ({
    isMobileSize,
    bannerBackground,
    displayedTable,
    setDisplayedTable,
    buttonBackgroundOne,
    titleOne,
    buttonBackgroundTwo,
    titleTwo,
}) => {
    const bannerProps = isMobileSize ? bannerSxMobile : bannerSX;
    return (
        <Container sx={{ ...bannerBackground, ...bannerProps }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Box sx={{ paddingRight: 1 }}>
                        <BannerToggleButton
                            isMobileSize={isMobileSize}
                            displayedTable={displayedTable}
                            setDisplayedTable={setDisplayedTable}
                            buttonBackground={buttonBackgroundOne}
                            title={titleOne}
                        />
                    </Box>
                    <Box>
                        <BannerToggleButton
                            isMobileSize={isMobileSize}
                            displayedTable={displayedTable}
                            setDisplayedTable={setDisplayedTable}
                            buttonBackground={buttonBackgroundTwo}
                            title={titleTwo}
                        />
                    </Box>
                </Box>
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
                        Some text here briefly describing what this table is
                        for? Or maybe just a catchy line
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};
