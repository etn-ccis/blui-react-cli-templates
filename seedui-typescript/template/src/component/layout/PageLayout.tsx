import React, { useState, useEffect } from 'react';
import {
    DrawerLayout,
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerHeader,
    NavItem,
    DrawerFooter,
} from '@brightlayer-ui/react-components';
import Dashboard from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { GroupAdd } from '@mui/icons-material';
import Menu from '@mui/icons-material/Menu';
import * as PXBColors from '@brightlayer-ui/colors';
import { Typography } from '@mui/material';
import headerBackgroundImage from '../../assets/images/topology.png';
import BrandLogo from '../../assets/images/seed_logo.png';
import eatonlogo from '../../assets/images/eaton_logo.svg';
import { LocalStorage } from '../../utils/local-storage';
import { copyRightsStyle, rghtsReservedStyle } from './layoutStyle';

const ROUTE_OBJ = [
    {
        path: '/invite',
        name: 'inviteUser',
    },
    {
        path: '/dashboard',
        name: 'dashboard',
    },
];
export const PageLayout: React.FC<React.PropsWithChildren> = (props) => {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState<string>('');

    const { pathname } = window.location;
    const firstNavList: NavItem[] = [
        {
            itemID: 'dashboard',
            title: 'Dashboard',
            icon: <Dashboard />,
            onClick: (): void => {
                setActive('dashboard');
                window.location.href = '/dashboard';
            },
            divider: false,
        },
        {
            itemID: 'inviteUser',
            title: 'Invite User',
            icon: <GroupAdd />,
            onClick: (): void => {
                setActive('inviteUser');
                window.location.href = '/invite';
            },
            divider: false,
        },
        {
            itemID: 'logout',
            title: 'Logout',
            icon: <LogoutIcon />,
            onClick: (): void => {
                LocalStorage.clearAuthToken();
                window.location.href = '/login';
            },
            divider: false,
        },
    ];

    useEffect(() => {
        const activeRoute = ROUTE_OBJ.find((item) => pathname.indexOf(item.path) !== -1);
        setActive((activeRoute && activeRoute.name) || 'inviteUser');
    }, [pathname]);

    return (
        <DrawerLayout
            sx={{ height: '100%' }}
            drawer={
                <Drawer open={open} width={332} variant="persistent" activeItem={active}>
                    <DrawerHeader
                        title="Seed UI"
                        sx={{ cursor: 'pointer' }}
                        fontColor={PXBColors.white[50]}
                        backgroundColor={PXBColors.blue[500]}
                        backgroundImage={headerBackgroundImage}
                        icon={<Menu />}
                        onIconClick={(): void => setOpen(!open)}
                        titleContent={
                            <div style={{ width: '100%' }}>
                                <img style={{ maxWidth: 220, marginTop: 5, height: 29 }} src={BrandLogo} alt="logo" />
                            </div>
                        }
                    />
                    <DrawerBody itemFontColor={PXBColors.black[400]} itemIconColor={PXBColors.black[400]}>
                        <DrawerNavGroup
                            activeItemBackgroundColor={PXBColors.blue[50]}
                            activeItemIconColor={PXBColors.blue[500]}
                            activeItemFontColor={PXBColors.blue[500]}
                            activeItemBackgroundShape="round"
                            items={firstNavList}
                        />
                    </DrawerBody>
                    <DrawerFooter>
                        <div style={{ padding: '10px 18px 0' }}>
                            <img src={eatonlogo} alt={'Eaton Logo'} />
                        </div>
                        <div style={{ paddingLeft: 18, display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="caption">v 1.1.1.1</Typography>
                            <Typography sx={copyRightsStyle()} variant="caption">
                                © Copyright 2023 Eaton.
                            </Typography>
                        </div>
                        <Typography sx={rghtsReservedStyle()} variant="caption">
                            All Rights Reserved.
                        </Typography>
                    </DrawerFooter>
                </Drawer>
            }
        >
            {props.children}
        </DrawerLayout>
    );
};
