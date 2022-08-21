import React from 'react';
import { palette, tableContainer } from '../assets/theme';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { BannerWithToggle } from '../components/BannerWithToggle';
import { WeeklyGamesList } from '../components/WeeklyGamesList';
import { DoubleSortTable } from '../components/customTableComponents/DoubleSortTable';
import { teamScheduleHeaders, teamScheduleData } from '../assets/data/games';

export const Schedule = ({ isMobileSize }) => {
    const [displayedTable, setDisplayedTable] = useState('Weekly Schedule');

    return (
        <>
            <BannerWithToggle
                displayedTable={displayedTable}
                setDisplayedTable={setDisplayedTable}
                titleOne='Weekly Schedule'
                titleTwo='Team Schedules'
            />
            <Container
                disableGutters
                sx={{
                    marginX: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    ...tableContainer,
                }}
            >
                <Box
                    sx={{
                        margin: 'auto',
                        minWidth: '750px',
                        marginY: 5,
                        paddingBottom: 2,
                    }}
                >
                    {displayedTable === 'Weekly Schedule' && (
                        <WeeklyGamesList />
                    )}
                    {displayedTable === 'Team Schedules' && (
                        <DoubleSortTable
                            columnConfig={teamScheduleHeaders}
                            rowConfig={teamScheduleData}
                            colsToHide={isMobileSize ? [1] : []}
                            tableBorder={`2px solid ${palette.gtBlue}`}
                            outerRadius={3}
                            headerBgColor={'transparent'}
                            headerTextColor={palette.gtRed}
                            headerArrowColor={palette.gtBlue}
                            rowsWithEndBorders={['team']}
                            rowEndBorder={'2px solid #c6c6c6'}
                            dataBgColorOne={'transparent'}
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
