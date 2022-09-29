import React, { useEffect, useState } from 'react';
import {
    palette,
    tableContainer,
    bannerSkaterBackground,
    bannerSkaterBackgroundMobile,
    bannerGoalieBackground,
    bannerGoalieBackgroundMobile,
} from '../assets/theme';
import { Container } from '@mui/system';
import { BannerWithToggle } from '../components/BannerWithToggle';
import { DoubleSortTable } from '../components/customTableComponents/DoubleSortTable';
import {
    goalieHeaders,
    goalieData,
    skaterHeaders,
    skaterData,
} from '../assets/data/columnHeaders';
import { BannerText } from '../components/BannerText';
import { fetchData } from '../assets/data/fetchData';
import { Box, LinearProgress } from '@mui/material';

export const Players = ({ isMobileSize }) => {
    const [displayedTable, setDisplayedTable] = useState('SKATERS');
    const [skatersStatsData, setSkatersStatsData] = useState(null);
    const [goaliesStatsData, setGoaliesStatsData] = useState(null);
    const createPlayerStatsArr = async () => {
        const skatersStats = await fetchData(
            'https://nextup-backend-production.up.railway.app/skaters',
        );
        const goaliesStats = await fetchData(
            'https://nextup-backend-production.up.railway.app/goalies',
        );
        skatersStats
            ? setSkatersStatsData(skatersStats)
            : setSkatersStatsData(skaterData);
        goaliesStats
            ? setGoaliesStatsData(goaliesStats)
            : setGoaliesStatsData(goalieData);
    };

    useEffect(() => {
        createPlayerStatsArr();
        // setSkatersData(skatersStats);
    }, []);

    return (
        <>
            <BannerWithToggle
                isMobileSize={isMobileSize}
                displayedTable={displayedTable}
                setDisplayedTable={setDisplayedTable}
                buttonBackgroundOne={
                    isMobileSize
                        ? bannerSkaterBackgroundMobile
                        : bannerSkaterBackground
                }
                titleOne='SKATERS'
                buttonBackgroundTwo={
                    isMobileSize
                        ? bannerGoalieBackgroundMobile
                        : bannerGoalieBackground
                }
                titleTwo='GOALIES'
                bannerText={
                    <BannerText
                        isMobileSize={isMobileSize}
                        text={'Fantasy Streaming - Fast. Efficient. Effective.'}
                    />
                }
            />
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    ...tableContainer,
                }}
            >
                <Container
                    disableGutters
                    maxWidth={false}
                    sx={{
                        width: '95vw',
                    }}
                >
                    {displayedTable === 'SKATERS' && !skatersStatsData && (
                        <>
                            <DoubleSortTable
                                columnConfig={skaterHeaders}
                                rowConfig={[]}
                                isSortable={true}
                                isFilterable={true}
                                numberedColumn={'name'}
                                stickyCol={'name'}
                                // colsToHide={isMobileSize ? [1] : []}
                                tableBorder={`2px solid ${palette.gtBlue}`}
                                outerRadius={3}
                                headerBgColor={palette.gtGrey}
                                headerTextColor={palette.gtRed}
                                headerArrowColor={palette.gtBlue}
                                dataBgColorOne={palette.gtGrey}
                                dataBgColorTwo={'white'}
                                dataTextColor={palette.gtBlue}
                                rowEndBorder={'1px solid #c6c6c6'}
                                leftAlignedFields={['name']}
                            />
                            <Box
                                sx={{
                                    marginX: 'auto',
                                    maxWidth: '70vw',
                                }}
                            >
                                <LinearProgress
                                    color='secondary'
                                    sx={{ marginY: 5 }}
                                />
                            </Box>
                        </>
                    )}
                    {displayedTable === 'SKATERS' && skatersStatsData && (
                        <DoubleSortTable
                            columnConfig={skaterHeaders}
                            rowConfig={skatersStatsData}
                            isSortable={true}
                            isFilterable={true}
                            initialPrimaryField={{
                                field: 'points',
                                sortStatus: 'desc',
                            }}
                            numberedColumn={'name'}
                            stickyCol={'name'}
                            // colsToHide={isMobileSize ? [1] : []}
                            tableBorder={`2px solid ${palette.gtBlue}`}
                            outerRadius={3}
                            headerBgColor={palette.gtGrey}
                            headerTextColor={palette.gtRed}
                            headerArrowColor={palette.gtBlue}
                            dataBgColorOne={palette.gtGrey}
                            dataBgColorTwo={'white'}
                            dataTextColor={palette.gtBlue}
                            rowEndBorder={'1px solid #c6c6c6'}
                            leftAlignedFields={['name']}
                        />
                    )}
                    {displayedTable === 'GOALIES' && !goaliesStatsData && (
                        <>
                            <DoubleSortTable
                                columnConfig={goalieHeaders}
                                rowConfig={[]}
                                isSortable={true}
                                isFilterable={true}
                                numberedColumn={'name'}
                                stickyCol={'name'}
                                // colsToHide={isMobileSize ? [1] : []}
                                tableBorder={`2px solid ${palette.gtBlue}`}
                                outerRadius={3}
                                headerBgColor={palette.gtGrey}
                                headerTextColor={palette.gtRed}
                                headerArrowColor={palette.gtBlue}
                                dataBgColorOne={palette.gtGrey}
                                dataBgColorTwo={'white'}
                                dataTextColor={palette.gtBlue}
                                rowEndBorder={'1px solid #c6c6c6'}
                                leftAlignedFields={['name']}
                            />
                            <Box
                                sx={{
                                    marginX: 'auto',
                                    maxWidth: '70vw',
                                }}
                            >
                                <LinearProgress
                                    color='secondary'
                                    sx={{ marginY: 5 }}
                                />
                            </Box>
                        </>
                    )}
                    {displayedTable === 'GOALIES' && (
                        <DoubleSortTable
                            columnConfig={goalieHeaders}
                            rowConfig={goaliesStatsData}
                            isSortable={true}
                            isFilterable={true}
                            initialPrimaryField={{
                                field: 'wins',
                                sortStatus: 'desc',
                            }}
                            numberedColumn={'name'}
                            stickyCol={'name'}
                            // colsToHide={isMobileSize ? [1] : []}
                            tableBorder={`2px solid ${palette.gtBlue}`}
                            outerRadius={3}
                            headerBgColor={palette.gtGrey}
                            headerTextColor={palette.gtRed}
                            headerArrowColor={palette.gtBlue}
                            dataBgColorOne={palette.gtGrey}
                            dataBgColorTwo={'white'}
                            dataTextColor={palette.gtBlue}
                            rowEndBorder={'1px solid #c6c6c6'}
                            leftAlignedFields={['name']}
                        />
                    )}
                </Container>
            </Container>
        </>
    );
};

// PLAYER IMAGES:

// http://nhl.bamcontent.com/images/headshots/current/168x168/{player_id}.jpg
