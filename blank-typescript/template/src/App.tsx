import React from 'react';
import {
    AppBar,
    Button,
    Divider,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    Box,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BluiSVG } from './Logo';
import { styled } from '@mui/material/styles';

const BluiSVGStyled = styled(BluiSVG)({
    '@keyframes spin': {
        '100%': {
            transform: 'rotate(360deg)',
        },
    },
    animation: '2500ms spin linear infinite',
});

export const App = (): JSX.Element => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper, minHeight: '100vh', position: 'relative' }}>
            <AppBar position={'fixed'}>
                <Toolbar sx={{ px: 2 }}>
                    <IconButton color={'inherit'} edge={'start'} style={{ marginRight: theme.spacing(3) }} size="large">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant={'h6'} color={'inherit'}>
                        Brightlayer UI React
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: `${theme.spacing(8)} ${theme.spacing(3)}`,
                }}
            >
                <Box style={{ maxWidth: 600, margin: '0 auto' }}>
                    <Box style={{ textAlign: 'center' }}>
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
                            Edit <strong>src/App.tsx</strong> and save to reload.
                        </Typography>
                    </Box>
                    {sm ? null : (
                        <>
                            <Divider sx={{ my: 3 }} />
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
                                        href={'https://github.com/etn-ccis/blui-react-design-patterns'}
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
