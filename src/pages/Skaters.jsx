import React, { useState } from 'react';
import {
    palette,
    tableContainer,
    bannerSkaterBackground,
    bannerGoalieBackground,
} from '../assets/theme';
import { Container } from '@mui/system';
import { Banner } from '../components/Banner';
import { BannerPlayersToggle } from '../components/BannerPlayersToggle';
import { DoubleSortTable } from '../components/customTableComponents/DoubleSortTable';
import { skaterHeaders, skaterData } from '../assets/data/staticStats';

export const Skaters = ({ isMobileSize }) => {
    const [displayedTable, setDisplayedTable] = useState();

    return (
        <>
            <BannerPlayersToggle
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
                    <DoubleSortTable
                        columnConfig={skaterHeaders}
                        rowConfig={skaterData}
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
                        // How to do this?
                        // dataTextAlign: cellKey === 'name' ? 'left' : 'center',
                    />
                </Container>
            </Container>
        </>
    );
};

// PLAYER IMAGES:

// http://nhl.bamcontent.com/images/headshots/current/168x168/{player_id}.jpg
