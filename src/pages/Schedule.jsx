import React from 'react';
import { palette, tableContainer } from '../assets/theme';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { BannerWithToggle } from '../components/BannerWithToggle';
import { WeeklyGamesList } from '../components/WeeklyGamesList';
import { DoubleSortTable } from '../components/customTableComponents/DoubleSortTable';
import { teamScheduleHeaders, teamScheduleData } from '../assets/data/games';
import { BannerText } from '../components/BannerText';
// import { bannerScheduleBackground } from '../assets/theme';

export const Schedule = ({ isMobileSize }) => {
    const [displayedTable, setDisplayedTable] = useState('Weekly Schedule');

    return (
        <>
            <BannerWithToggle
                isMobileSize={isMobileSize}
                displayedTable={displayedTable}
                setDisplayedTable={setDisplayedTable}
                titleOne='Weekly Schedule'
                titleTwo='Team Schedules'
                bannerText={
                    <BannerText
                        isMobileSize={isMobileSize}
                        text={'Fantasy Streaming - Fast. Efficient. Effective.'}
                    />
                }
            />
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    // ...bannerScheduleBackground,
                    ...tableContainer,
                    paddingBottom: isMobileSize ? 5 : 0,
                }}
            >
                <Box
                    sx={{
                        marginX: {
                            xs:
                                displayedTable === 'Team Schedules'
                                    ? 'auto'
                                    : 0,
                            md: 'auto',
                        },
                        paddingX: {
                            xs: displayedTable === 'Team Schedules' ? 2 : 0,
                            md: 'auto',
                        },
                        minWidth: {
                            xs: '100vw',
                            md: '900px',
                        },
                        marginY: isMobileSize ? 0 : 5,
                    }}
                >
                    {displayedTable === 'Weekly Schedule' && (
                        <WeeklyGamesList isMobileSize={isMobileSize} />
                    )}
                    {displayedTable === 'Team Schedules' && (
                        <DoubleSortTable
                            columnConfig={teamScheduleHeaders}
                            rowConfig={teamScheduleData}
                            stickyCol={'team'}
                            // colsToHide={isMobileSize ? [1] : []}
                            tableBorder={`2px solid ${palette.gtBlue}`}
                            outerRadius={3}
                            headerBgColor={palette.gtGrey}
                            headerTextColor={palette.gtRed}
                            headerArrowColor={palette.gtBlue}
                            rowsWithEndBorders={['team']}
                            rowEndBorder={'1px solid #c6c6c6'}
                            dataBgColorOne={palette.gtGrey}
                            dataBgColorTwo={'white'}
                            dataTextColor={palette.gtBlue}
                            leftAlignedFields={['team']}
                            dataTextAlign={'left'}
                            dataPaddingX={3}
                            dataPaddingY={3}
                        />
                    )}
                </Box>
            </Container>
        </>
    );
};

// Team Logos
// https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/TEAMID.svg
