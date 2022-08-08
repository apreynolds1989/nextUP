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
    { columnName: 'First Column', initialSort: 'none' },
    { columnName: 'Second Column', initialSort: 'asc' },
    { columnName: 'Third Column', initialSort: 'desc' },
];

const rowData = [
    ['c', 'Row 1 Col 2', 'Row 1 Col 3'],
    ['b', 'Row 2 Col 2', 'Row 2 Col 3'],
    ['e', 'Row 3 Col 2', 'Row 3 Col 3'],
    ['a', 'Row 4 Col 2', 'Row 4 Col 3'],
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
