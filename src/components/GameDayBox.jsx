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
import { outerCardSx, innerCardSx } from '../assets/theme';

export const GameDayBox = ({ day }) => {
    const gamesArr = weeklyGames[day];

    return (
        <Card
            sx={{
                ...outerCardSx,
            }}
        >
            <Card
                sx={{
                    maxWidth: '500px',
                    ...innerCardSx,
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '500px',
                            alignItems: 'center',
                            margin: 'auto',
                        }}
                    >
                        <Box>
                            <Typography
                                variant='h5'
                                sx={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    paddingTop: 1,
                                }}
                            >
                                {day}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                minWidth: '400px',
                                alignSelf: 'center',
                            }}
                        >
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
                                            primary={game}
                                            primaryTypographyProps={{
                                                fontSize: '14px',
                                                textAlign: 'left',
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Card>
    );
};
