import { Box, List, Typography, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { games } from '../assets/data/games';

export const GameDayBox = ({ day }) => {
    const gamesArr = games[day];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '2px solid black',
            }}
        >
            <Box>
                <Typography
                    variant='h5'
                    sx={{
                        textAlign: 'center',
                        textDecoration: 'underline',
                        textUnderlineOffset: '5px',
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
