import {
    Box,
    List,
    Typography,
    ListItem,
    ListItemText,
    Card,
    CardContent,
} from '@mui/material';
import React from 'react';
import { weeklyGames } from '../assets/data/games';
// import { palette } from '../assets/theme';

export const GameDayBox = ({ day }) => {
    const gamesArr = weeklyGames[day];

    return (
        <Card
            sx={{
                borderRadius: 5,
                marginY: 3,
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box>
                        <Typography
                            variant='h5'
                            sx={{
                                textAlign: 'center',
                                textDecoration: 'underline',
                                textUnderlineOffset: '5px',
                                paddingTop: 1,
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
                                        paddingY: 0,
                                        fontSize: '12px',
                                    }}
                                >
                                    <ListItemText
                                        primary={`Game ${index + 1} - ${game}`}
                                        primaryTypographyProps={{
                                            fontSize: '14px',
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};
