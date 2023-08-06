// @ts-nocheck

import React from 'react';
import * as Colors from '@brightlayer-ui/colors';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Header from '../../layout/header';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
    Hero,
    HeroBanner,
    ChannelValue,
    EmptyState,
    InfoListItem,
    DrawerNavGroup,
    ListItemTag,
} from '@brightlayer-ui/react-components';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import ListIcon from '@mui/icons-material/List';
import Settings from '@mui/icons-material/Settings';
import TrendingUp from '@mui/icons-material/TrendingUp';
import DevicesIcon from '@mui/icons-material/Devices';
import { Pie, Battery } from '@brightlayer-ui/react-progress-icons';
import { GradeA, Leaf, VoltageCircled, Temp } from '@brightlayer-ui/icons-mui';


const listTagStyles = {
    mr: 1,
};

const Dashboard: React.FC = () => {
    const theme = useTheme();

    return (
        <><Header title={'Dashboard'} /><Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                sx={{
                    p: 2,
                    flex: 1,
                    width: '80%',
                    maxWidth: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >

                <Card sx={{ maxWidth: `${416 * 2 + 16}px` }}>
                    <List sx={{ p: 0 }}>
                        <HeroBanner divider>
                            <Hero
                                icon={<GradeA fontSize={'inherit'} color={'inherit'} htmlColor={Colors.green[500]} />}
                                label={'Healthy'}
                                ChannelValueProps={{ value: 96, units: '/100' }} />
                            <Hero
                                icon={<Pie
                                    color={Colors.blue[500]}
                                    percent={65}
                                    size={36} />}
                                label={'Load'}
                            >
                                <ChannelValue
                                    value={65}
                                    units={'%'}
                                    fontSize={20}
                                    icon={<TrendingUp
                                        htmlColor={Colors.red[500]}
                                        fontSize={'inherit'}
                                    />} />
                            </Hero>
                            <Hero
                                icon={<Battery
                                    color={Colors.blue[500]}
                                    percent={100}
                                    size={36}
                                />}
                                label={'Battery'}
                            >
                                <ChannelValue value={'Full'} fontSize={20} />
                            </Hero>
                        </HeroBanner>
                        <InfoListItem
                            dense
                            title={'Status'}
                            divider={'full'}
                            statusColor={Colors.green[500]}
                            subtitleSeparator={'/'}
                            icon={<Leaf color={'inherit'} />}
                            iconAlign={'center'}
                            rightComponent={<ChannelValue fontSize={16} value={'Online, ESS+'} />} />
                        <InfoListItem
                            title={'Output Voltage'}
                            divider={'full'}
                            avatar
                            statusColor={Colors.red[500]}
                            fontColor={Colors.red[500]}
                            subtitle={['Phase A', 'Phase B']}
                            icon={<VoltageCircled color={'inherit'} />}
                            rightComponent={<Box sx={{ display: 'flex', alignItems: 'center', color: Colors.red[500] }}>
                                <ListItemTag label={'monitored'} sx={listTagStyles} />
                                <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                                <ChannelValue fontSize={16} value={480} units={'V'} />
                            </Box>} />
                        <InfoListItem
                            dense
                            title={'Temperature'}
                            icon={<Temp />}
                            iconAlign={'center'}
                            rightComponent={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItemTag
                                    backgroundColor={theme.palette.background.default}
                                    label={'active'}
                                    fontColor={theme.palette.mode === 'light' ? Colors.blue[700] : Colors.green['500']}
                                    sx={listTagStyles} />
                                <ListItemTag
                                    label={'OVERHEAT'}
                                    backgroundColor={Colors.red['500']}
                                    sx={listTagStyles} />
                            </Box>} />
                    </List>
                </Card>
                <Card
                    sx={{
                        mt: 2,
                        p: 3,
                        maxWidth: `${416 * 2 + 16}px`,
                    }}
                >
                    <EmptyState
                        icon={<DevicesIcon fontSize={'inherit'} />}
                        title={'No Devices'}
                        description={'Contact your local admin for details'}
                        actions={<Button variant="contained" color="primary" startIcon={<Add />}>
                            Add Device
                        </Button>} />
                </Card>
                <Card sx={{ mt: 2, maxWidth: `${416 * 2 + 16}px` }}>
                    <DrawerNavGroup
                        title={'Resources'}
                        items={[
                            {
                                title: 'Guides',
                                itemID: 'Guides',
                                icon: <DevicesIcon />,
                                rightComponent: <ListItemTag label={'new'} />,
                                expandIcon: <Add />,
                                collapseIcon: <Remove />,
                                items: [
                                    {
                                        title: 'Installation Manual',
                                        itemID: 'Installation Manual',
                                        items: [
                                            {
                                                title: '101',
                                                itemID: '101',
                                            },
                                            {
                                                title: '102',
                                                itemID: '102',
                                            },
                                        ],
                                    },
                                    {
                                        title: 'Maintenance',
                                        itemID: 'Maintenance',
                                    },
                                ],
                            },
                            {
                                title: 'Quality Control',
                                itemID: 'Quality Control',
                                icon: <Settings />,
                                items: [
                                    {
                                        title: 'Training',
                                        itemID: 'Training',
                                    },
                                    {
                                        title: 'Checklist',
                                        itemID: 'Checklist',
                                    },
                                ],
                            },
                            {
                                title: 'Report',
                                itemID: 'Report',
                                icon: <ListIcon />,
                                divider: false,
                                items: [
                                    {
                                        title: '2022',
                                        itemID: '2022',
                                    },
                                    {
                                        title: '2023',
                                        itemID: '2023',
                                    },
                                ],
                            },
                        ]} />
                </Card>
            </Box>
        </Box></>
    );
};

export default Dashboard;