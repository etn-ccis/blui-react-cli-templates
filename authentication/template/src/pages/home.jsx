import React from 'react';
import {
    AppBar,
    Avatar,
    Button,
    Divider,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    Box,
} from '@mui/material';
import Lock from '@mui/icons-material/Lock';
import Menu from '@mui/icons-material/Menu';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { Spacer, UserMenu } from '@brightlayer-ui/react-components';
import { useSecurityActions } from '@brightlayer-ui/react-auth-shared';
import { LocalStorage } from '../store/local-storage';
import { BluiSVG } from '../components/Logo';
import { useDrawer } from '../contexts/drawerContextProvider';
import { styled } from '@mui/material/styles';

const BluiSVGStyled = styled(BluiSVG)({
    '@keyframes spin': {
        '100%': {
            transform: 'rotate(360deg)',
        },
    },
    animation: '2500ms spin linear infinite',
});

export const HomePage = () => {
    const theme = useTheme();
    const { setDrawerOpen } = useDrawer();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const securityHelper = useSecurityActions();

    const logOut = () => {
        LocalStorage.clearAuthCredentials();
        securityHelper.onUserNotAuthenticated();
    };

    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper, minHeight: '100vh', position: 'relative' }}>
            <AppBar position={'sticky'}>
                <Toolbar
                    sx={{
                        px: 2,
                    }}
                >
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
            <Box
                sx={{
                    minHeight: `calc(100vh - ${theme.spacing(8)})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    [theme.breakpoints.down('sm')]: {
                        minHeight: `calc(100vh - ${theme.spacing(7)})`,
                    },
                }}
            >
                <Box sx={{ maxWidth: 600, m: '0 auto' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <BluiSVGStyled size={sm ? 100 : 160} color={theme.palette.primary.main} />
                        <Typography variant={sm ? 'h4' : 'h2'} paragraph>
                            Welcome to Brightlayer{' '}
                            <Box
                                component="span"
                                sx={{
                                    color: theme.palette.primary.main,
                                }}
                            >
                                UI
                            </Box>
                            .
                        </Typography>
                        <Typography variant={'body1'}>
                            Edit <strong>src/pages/home.jsx</strong> and save to reload.
                        </Typography>
                    </Box>
                    {sm ? null : (
                        <>
                            <Divider
                                sx={{
                                    my: 3,
                                }}
                            />
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
                                    <Button
                                        target={'_blank'}
                                        href={'https://brightlayer-ui-components.github.io/react/'}
                                    >
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
                                    <Button
                                        target={'_blank'}
                                        href={'https://brightlayer-ui.github.io/community/contactus'}
                                    >
                                        Send Feedback or Suggestions
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
