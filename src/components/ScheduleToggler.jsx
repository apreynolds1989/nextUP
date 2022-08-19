import React, { useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { WeeklyGamesList } from './WeeklyGamesList';
import { DoubleSortTable } from './customTableComponents/DoubleSortTable';
import { teamScheduleHeaders, teamScheduleData } from '../assets/data/games';
import { palette } from '../assets/theme';

export const ScheduleToggler = ({ isMobileSize }) => {
    const [alignment, setAlignment] = useState('weekly');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: 3,
                }}
            >
                <ToggleButtonGroup
                    color='secondary'
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label='schedule type'
                >
                    <ToggleButton value='weekly' aria-label='weekly games'>
                        Weekly Games
                    </ToggleButton>
                    <ToggleButton value='teams' aria-label='teams schedules'>
                        Team's Schedules
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
            {alignment === 'weekly' && <WeeklyGamesList />}
            {alignment === 'teams' && (
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
        </>
    );
};
