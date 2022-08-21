import { Container } from '@mui/system';
import React from 'react';
import { GameDayBox } from './GameDayBox';
// import { palette } from '../assets/theme.js';
import { Box, Grid } from '@mui/material';

export const WeeklyGamesList = () => {
    return (
        <Box
            sx={{
                width: '35vw',
                margin: 'auto',
            }}
        >
            <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <GameDayBox day='Monday' />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <GameDayBox day='Tuesday' />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <GameDayBox day='Wednesday' />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <GameDayBox day='Thursday' />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <GameDayBox day='Friday' />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <GameDayBox day='Saturday' />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <GameDayBox day='Sunday' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
        // <Container
        //     sx={{
        //         display: 'flex',
        //         flexDirection: 'row',
        //     }}
        // >
        //     <Box
        //         sx={{
        //             flexDirection: 'column',
        //             marginX: 1,
        //         }}
        //     >
        //         <GameDayBox day='Monday' />
        //         <GameDayBox day='Wednesday' />
        //         <GameDayBox day='Friday' />
        //         <GameDayBox day='Sunday' />
        //     </Box>
        //     <Box
        //         sx={{
        //             flexDirection: 'column',
        //             marginX: 1,
        //         }}
        //     >
        //         <GameDayBox day='Tuesday' />
        //         <GameDayBox day='Thursday' />
        //         <GameDayBox day='Saturday' />
        //     </Box>
        // </Container>
    );
};
