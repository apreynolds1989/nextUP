import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { bannerSX, bannerSxMobile } from '../assets/theme';
import { BannerToggleButton } from './BannerToggleButton';

export const BannerWithToggle = ({
    isMobileSize,
    displayedTable,
    setDisplayedTable,
    buttonBackgroundOne,
    titleOne,
    buttonBackgroundTwo,
    titleTwo,
    bannerText,
}) => {
    const bannerProps = isMobileSize ? bannerSxMobile : bannerSX;
    return (
        <Container sx={{ ...bannerProps }}>
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
                {bannerText}
            </Box>
        </Container>
    );
};
