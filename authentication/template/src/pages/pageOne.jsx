import React from 'react';
import { AppBar, Avatar, IconButton, Toolbar, Typography, useTheme, useMediaQuery, Box } from '@mui/material';
import Lock from '@mui/icons-material/Lock';
import Menu from '@mui/icons-material/Menu';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Event from '@mui/icons-material/Event';
import { EmptyState, Spacer, UserMenu } from '@brightlayer-ui/react-components';
import { useSecurityActions } from '@brightlayer-ui/react-auth-shared';
import { LocalStorage } from '../store/local-storage';
import { useDrawer } from '../contexts/drawerContextProvider';

export const PageOne = () => {
    const theme = useTheme();
    const { setDrawerOpen } = useDrawer();
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const securityHelper = useSecurityActions();

    const logOut = (): void => {
        LocalStorage.clearAuthCredentials();
        securityHelper.onUserNotAuthenticated();
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <AppBar position={'sticky'}>
                <Toolbar sx={{ px: 2 }}>
                    {md ? null : (
                        <IconButton
                            color={'inherit'}
                            onClick={() => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            sx={{ mr: 3 }}
                            size="large"
                        >
                            <Menu />
                        </IconButton>
                    )}
                    <Typography variant={'h6'} color={'inherit'}>
                        Page One
                    </Typography>
                    <Spacer />
                    <UserMenu
                        avatar={<Avatar>UN</Avatar>}
                        menuGroups={[
                            {
                                items: [
                                    {
                                        title: 'Change Password',
                                        icon: <Lock />,
                                        onClick: securityHelper.showChangePassword,
                                    },
                                    {
                                        title: 'Log Out',
                                        icon: <ExitToApp />,
                                        onClick: logOut,
                                    },
                                ],
                            },
                        ]}
                        MenuProps={{
                            anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
                            transformOrigin: { horizontal: 'right', vertical: 'top' },
                        }}
                    />
                </Toolbar>
            </AppBar>
            <Box sx={{ flex: '1 1 0px' }}>
                <EmptyState
                    icon={<Event fontSize={'inherit'} />}
                    title={'Coming Soon'}
                    description={'Replace this page with your own content'}
                />
            </Box>
        </Box>
    );
};
