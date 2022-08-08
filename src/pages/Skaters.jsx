import React from 'react';
import {
    palette,
    playersSx,
    tableContainer,
    bannerSkaterBackground,
} from '../assets/theme';
import { Container } from '@mui/system';
import { Banner } from '../components/Banner';
import { Typography } from '@mui/material';
import { DoubleSortTable } from '../components/customComponents/DoubleSortTable';

const headerColumns = [
    { columnName: 'Name', initialSort: 'none', field: 'name' },
    { columnName: 'Goals', initialSort: 'none', field: 'goals' },
    { columnName: 'Assists', initialSort: 'none', field: 'assists' },
    { columnName: 'Points', initialSort: 'none', field: 'points' },
    { columnName: 'Weekly Games', initialSort: 'none', field: 'weeklyGames' },
    { columnName: 'Off-Day Games', initialSort: 'none', field: 'offDayGames' },
];

const rowData = [
    {
        name: 'Auston Matthews',
        goals: 60,
        assists: 46,
        points: 106,
        weeklyGames: 3,
        offDayGames: 2,
    },
    {
        name: 'Leon Draisaitl',
        goals: 55,
        assists: 55,
        points: 110,
        weeklyGames: 2,
        offDayGames: 2,
    },
    {
        name: 'Connor McDavid',
        goals: 44,
        assists: 79,
        points: 123,
        weeklyGames: 2,
        offDayGames: 2,
    },
    {
        name: 'Johnny Gaudreau',
        goals: 40,
        assists: 75,
        points: 115,
        weeklyGames: 4,
        offDayGames: 1,
    },
];

export const Skaters = ({ isMobileSize }) => {
    return (
        <>
            <Banner background={bannerSkaterBackground} title='SKATERS' />
            <Container
                disableGutters
                sx={{
                    marginX: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    ...tableContainer,
                }}
            >
                <Container
                    sx={{
                        minWidth: '1000px',
                        border: '2px solid red',
                    }}
                >
                    <DoubleSortTable
                        columnConfig={headerColumns}
                        rowConfig={rowData}
                        colsToHide={isMobileSize ? [1] : []}
                        stylingProps={{
                            tableBorder: `2px solid ${palette.gtBlue}`,
                            outerRadius: 3,
                            rowEndBorder: `2px solid #00000035`,
                            rowBottomBorder: `2px solid #00000035`,
                            headerBgColor: 'transparent',
                            headerTextColor: palette.gtRed,
                            headerArrowColor: palette.gtBlue,
                            dataBgColor: 'white',
                            dataTextColor: palette.gtBlue,
                        }}
                    />
                </Container>
                <Container sx={playersSx.skatersPopContainer}>
                    <Typography variant='h6'>Placeholder</Typography>
                </Container>
            </Container>
        </>
    );
};

// PLAYER IMAGES:

// http://nhl.bamcontent.com/images/headshots/current/168x168/{player_id}.jpg
