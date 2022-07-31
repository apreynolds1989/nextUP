import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TeamWeeklyGamesList = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Team</TableCell>
                        <TableCell align='right'>Monday</TableCell>
                        <TableCell align='right'>Tuesday</TableCell>
                        <TableCell align='right'>Wednesday</TableCell>
                        <TableCell align='right'>Thursday</TableCell>
                        <TableCell align='right'>Friday</TableCell>
                        <TableCell align='right'>Saturday</TableCell>
                        <TableCell align='right'>Sunday</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody></TableBody>
            </Table>
        </TableContainer>
    );
};
