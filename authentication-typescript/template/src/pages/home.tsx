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
    useMediaQuery,
    useTheme,
} from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Lock from '@mui/icons-material/Lock';
import Menu from '@mui/icons-material/Menu';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { Spacer, UserMenu } from '@brightlayer-ui/react-components';
import { useSecurityActions } from '@brightlayer-ui/react-auth-shared';
import { LocalStorage } from '../store/local-storage';
import { BluiSVG } from '../components/Logo';
import { useDrawer } from '../contexts/drawerContextProvider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageBackground: {
            backgroundColor: theme.palette.background.paper,
            minHeight: '100vh',
            position: 'relative',
        },
        body: {
            minHeight: `calc(100vh - ${theme.spacing(8)})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(3),
            [theme.breakpoints.down('sm')]: {
                minHeight: `calc(100vh - ${theme.spacing(7)})`,
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
    const xs = useMediaQuery(theme.breakpoints.down('sm'));
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
                            size="large">
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
                        <BluiSVG className={classes.rotate} size={xs ? 100 : 160} color={theme.palette.primary.main} />
                        <Typography variant={xs ? 'h4' : 'h2'} paragraph>
                            Welcome to Brightlayer{' '}
                            <Typography variant={'inherit'} color={'primary'}>
                                UI
                            </Typography>
                            .
                        </Typography>
                        <Typography variant={'body1'}>
                            Edit <strong>src/pages/home.tsx</strong> and save to reload.
                        </Typography>
                    </div>
                    <Hidden smDown>
                        <Divider className={classes.divider} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://brightlayer-ui.github.io/'}>
                                    Brightlayer UI Documentation
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    target={'_blank'}
                                    href={'https://brightlayer-ui.github.io/development/frameworks-web/react'}
                                >
                                    React Getting Started Guide
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://brightlayer-ui.github.io/patterns'}>
                                    Design Pattern Descriptions
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://brightlayer-ui-components.github.io/react/'}>
                                    Brightlayer UI React Component Library
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://github.com/brightlayer-ui'}>
                                    Visit Us on GitHub
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    target={'_blank'}
                                    href={'https://github.com/brightlayer-ui/react-design-patterns'}
                                >
                                    Design Pattern Source on GitHub
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://brightlayer-ui.github.io/roadmap'}>
                                    Release Roadmap
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button target={'_blank'} href={'https://brightlayer-ui.github.io/community/contactus'}>
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
