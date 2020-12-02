import React from 'react';
import {
    AppBar,
    Avatar,
    Button,
    Divider,
    Grid,
    Hidden,
    IconButton,
    Theme,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import Lock from '@material-ui/icons/Lock';
import Menu from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { Spacer, UserMenu } from '@pxblue/react-components';
import { useSecurityActions } from '@pxblue/react-auth-shared';
import { LocalStorage } from '../store/local-storage';
import { PXBlueSVG } from '../components/Logo';
import { useDrawer } from '../contexts/drawerContextProvider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageBackground: {
            backgroundColor: theme.palette.background.paper,
            minHeight: '100vh',
            position: 'relative',
        },
        body: {
            minHeight: `calc(100vh - ${theme.spacing(8)}px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${theme.spacing(3)}px`,
            [theme.breakpoints.down('xs')]: {
                minHeight: `calc(100vh - ${theme.spacing(7)}px)`,
            },
        },
        toolbar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        divider: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
        rotate: {
            animation: '2500ms $spin linear infinite',
        },
        '@keyframes spin': {
            '100%': {
                transform: 'rotate(360deg)',
            },
        },
    })
);

export const HomePage = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    const securityHelper = useSecurityActions();

    const logOut = (): void => {
        LocalStorage.clearAuthCredentials();
        securityHelper.onUserNotAuthenticated();
    };

    return (
        <div className={classes.pageBackground}>
            <AppBar position={'sticky'}>
                <Toolbar className={classes.toolbar}>
                    <Hidden mdUp={true}>
                        <IconButton
                            color={'inherit'}
                            onClick={(): void => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(3) }}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                    <Typography variant={'h6'} color={'inherit'}>
                        Home Page
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
            <div className={classes.body}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center' }}>
                        <PXBlueSVG
                            className={classes.rotate}
                            size={xs ? 100 : 160}
                            color={theme.palette.primary.main}
                        />
                        <Typography variant={xs ? 'h4' : 'h2'} paragraph>
                            Welcome to PX{' '}
                            <Typography variant={'inherit'} color={'primary'}>
                                Blue
                            </Typography>
                            .
                        </Typography>
                        <Typography variant={'body1'}>
                            Edit <strong>src/App.tsx</strong> and save to reload.
                        </Typography>
                    </div>
                    <Hidden xsDown>
                        <Divider className={classes.divider} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://pxblue.github.io/'}>
                                    PX Blue Documentation
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    target={'_blank'}
                                    href={'https://pxblue.github.io/development/frameworks-web/react'}
                                >
                                    React Getting Started Guide
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://pxblue.github.io/patterns'}>
                                    Design Pattern Descriptions
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://pxblue-components.github.io/react/'}>
                                    PX Blue React Component Library
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://github.com/pxblue'}>
                                    Visit Us on GitHub
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://github.com/pxblue/react-design-patterns'}>
                                    Design Pattern Source on GitHub
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://pxblue.github.io/roadmap'}>
                                    Release Roadmap
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://pxblue.github.io/community/contactus'}>
                                    Send Feedback or Suggestions
                                </Button>
                            </Grid>
                        </Grid>
                    </Hidden>
                </div>
            </div>
        </div>
    );
};
