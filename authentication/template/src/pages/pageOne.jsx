import React from 'react';
import {
    AppBar,
    Avatar,
    IconButton,
    Hidden,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
    useTheme,
} from '@material-ui/core';
import Lock from '@material-ui/icons/Lock';
import Menu from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Event from '@material-ui/icons/Event';
import { EmptyState, Spacer, UserMenu } from '@brightlayer-ui/react-components';
import { useSecurityActions } from '@brightlayer-ui/react-auth-shared';
import { LocalStorage } from '../store/local-storage';
import { useDrawer } from '../contexts/drawerContextProvider';

const useStyles = makeStyles((theme) =>
    createStyles({
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    })
);

export const PageOne = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const securityHelper = useSecurityActions();

    const logOut = (): void => {
        LocalStorage.clearAuthCredentials();
        securityHelper.onUserNotAuthenticated();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <AppBar position={'sticky'}>
                <Toolbar className={classes.toolbar}>
                    <Hidden mdUp={true}>
                        <IconButton
                            color={'inherit'}
                            onClick={() => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(3) }}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
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
            <div style={{ flex: '1 1 0px' }}>
                <EmptyState
                    icon={<Event fontSize={'inherit'} />}
                    title={'Coming Soon'}
                    description={'Replace this page with your own content'}
                />
            </div>
        </div>
    );
};
