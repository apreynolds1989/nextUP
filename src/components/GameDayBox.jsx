import {
    Box,
    List,
    Typography,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    useMediaQuery,
} from '@mui/material';
import React from 'react';
import { palette, innerCardSx } from '../assets/theme';

export const GameDayBox = ({ isMobileSize, day, gamesArr }) => {
    const is400pxOrSmaller = useMediaQuery('(max-width:400px)');

    return (
        <Card
            sx={{
                margin: isMobileSize ? 0 : 2,
                ...innerCardSx,
            }}
        >
            <CardContent
                sx={{
                    padding: isMobileSize ? 0 : null,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: `${palette.gtBlue}15`,
                        }}
                    >
                        <Typography
                            variant='h5'
                            sx={{
                                textAlign: 'left',
                                fontWeight: 'bold',
                                paddingTop: 1,
                                paddingLeft: 2,
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
                                        textAlign: 'left',
                                        paddingY: 0,
                                    }}
                                >
                                    <ListItemText
                                        primary={`${game.time} - ${game.away} @ ${game.home}`}
                                        primaryTypographyProps={{
                                            fontSize: is400pxOrSmaller
                                                ? '12px'
                                                : '14px',
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
    );
};
