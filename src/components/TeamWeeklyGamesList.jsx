import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { teamsGames } from '../assets/data/games';
import {
    palette,
    scheduleTableCellsSx,
    scheduleTableHeaderSx,
} from '../assets/theme';

const teams = Object.keys(teamsGames).sort();

export const TeamWeeklyGamesList = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell sx={scheduleTableHeaderSx}>Team</TableCell>
                        <TableCell sx={scheduleTableHeaderSx}>Monday</TableCell>
                        <TableCell sx={scheduleTableHeaderSx}>
                            Tuesday
                        </TableCell>
                        <TableCell sx={scheduleTableHeaderSx}>
                            Wednesday
                        </TableCell>
                        <TableCell sx={scheduleTableHeaderSx}>
                            Thursday
                        </TableCell>
                        <TableCell sx={scheduleTableHeaderSx}>Friday</TableCell>
                        <TableCell sx={scheduleTableHeaderSx}>
                            Saturday
                        </TableCell>
                        <TableCell
                            sx={{
                                ...scheduleTableHeaderSx,
                                borderRight: '0px',
                            }}
                        >
                            Sunday
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teams.map((team) => (
                        <TableRow key={teamsGames[team].city}>
                            <TableCell
                                component='th'
                                scope='row'
                                sx={{
                                    ...scheduleTableHeaderSx,
                                    color: palette.gtBlue,
                                }}
                            >
                                {teamsGames[team].city}
                            </TableCell>
                            {teamsGames[team].games.map((game) => (
                                <TableCell
                                    component='td'
                                    scope='row'
                                    sx={scheduleTableCellsSx}
                                >
                                    {game}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
