import { Box, List, Typography, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { weeklyGames } from '../assets/data/games';
import { palette } from '../assets/theme';

export const GameDayBox = ({ day }) => {
    const gamesArr = weeklyGames[day];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderBottom: `2px solid ${palette.gtBlue}`,
            }}
        >
            <Box>
                <Typography
                    variant='h5'
                    sx={{
                        textAlign: 'center',
                        textDecoration: 'underline',
                        textUnderlineOffset: '5px',
                        paddingTop: 2,
                    }}
                >
                    {day}
                </Typography>
            </Box>
            <Box>
                <List>
                    {gamesArr.map((game, index) => (
                        <ListItem
                            key={`${day} Game ${index + 1}`}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <ListItemText
                                primary={`Game ${index + 1} - ${game}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};
