import React, { useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { WeeklyGamesList } from './WeeklyGamesList';
import { TeamWeeklyGamesList } from './TeamWeeklyGamesList';

export const ScheduleToggler = () => {
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
            {alignment === 'teams' && <TeamWeeklyGamesList />}
        </>
    );
};
