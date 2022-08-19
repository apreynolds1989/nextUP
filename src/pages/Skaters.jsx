import React, { useState } from 'react';
import {
    palette,
    tableContainer,
    bannerSkaterBackground,
    bannerGoalieBackground,
} from '../assets/theme';
import { Container } from '@mui/system';
import { BannerPlayersToggle } from '../components/BannerPlayersToggle';
import { DoubleSortTable } from '../components/customTableComponents/DoubleSortTable';
import {
    goalieHeaders,
    goalieData,
    skaterHeaders,
    skaterData,
} from '../assets/data/staticStats';

export const Skaters = ({ isMobileSize }) => {
    const [displayedTable, setDisplayedTable] = useState('SKATERS');

    return (
        <>
            <BannerPlayersToggle
                displayedTable={displayedTable}
                setDisplayedTable={setDisplayedTable}
                backgroundOne={bannerSkaterBackground}
                titleOne='SKATERS'
                backgroundTwo={bannerGoalieBackground}
                titleTwo='GOALIES'
            />
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
                        // border: '2px solid red',
                    }}
                >
                    {displayedTable === 'SKATERS' && (
                        <DoubleSortTable
                            columnConfig={skaterHeaders}
                            rowConfig={skaterData}
                            isSortable={true}
                            initialPrimaryField={{
                                field: 'points',
                                sortStatus: 'desc',
                            }}
                            colsToHide={isMobileSize ? [1] : []}
                            tableBorder={`2px solid ${palette.gtBlue}`}
                            outerRadius={3}
                            headerBgColor={'transparent'}
                            headerTextColor={palette.gtRed}
                            headerArrowColor={palette.gtBlue}
                            dataBgColorOne={'transparent'}
                            dataBgColorTwo={'white'}
                            dataTextColor={palette.gtBlue}
                            leftAlignedFields={['name']}
                            dataTextAlign={'left'}
                        />
                    )}
                    {displayedTable === 'GOALIES' && (
                        <DoubleSortTable
                            columnConfig={goalieHeaders}
                            rowConfig={goalieData}
                            isSortable={true}
                            initialPrimaryField={{
                                field: 'wins',
                                sortStatus: 'desc',
                            }}
                            colsToHide={isMobileSize ? [1] : []}
                            tableBorder={`2px solid ${palette.gtBlue}`}
                            outerRadius={3}
                            headerBgColor={'transparent'}
                            headerTextColor={palette.gtRed}
                            headerArrowColor={palette.gtBlue}
                            dataBgColorOne={'transparent'}
                            dataBgColorTwo={'white'}
                            dataTextColor={palette.gtBlue}
                            leftAlignedFields={['name']}
                            dataTextAlign={'left'}
                        />
                    )}
                </Container>
            </Container>
        </>
    );
};

// PLAYER IMAGES:

// http://nhl.bamcontent.com/images/headshots/current/168x168/{player_id}.jpg
