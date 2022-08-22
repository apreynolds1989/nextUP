import React, { useState } from 'react';
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
} from '../assets/data/staticStats';
import { BannerText } from '../components/BannerText';

export const Players = ({ isMobileSize }) => {
    const [displayedTable, setDisplayedTable] = useState('SKATERS');

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
                        text={'Player streaming made easy.'}
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
                    sx={{
                        width: '100vw',
                    }}
                >
                    {displayedTable === 'SKATERS' && (
                        <DoubleSortTable
                            columnConfig={skaterHeaders}
                            rowConfig={skaterData}
                            isSortable={true}
                            isFilterable={true}
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
                        />
                    )}
                    {displayedTable === 'GOALIES' && (
                        <DoubleSortTable
                            columnConfig={goalieHeaders}
                            rowConfig={goalieData}
                            isSortable={true}
                            isFilterable={true}
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
                        />
                    )}
                </Container>
            </Container>
        </>
    );
};

// PLAYER IMAGES:

// http://nhl.bamcontent.com/images/headshots/current/168x168/{player_id}.jpg
