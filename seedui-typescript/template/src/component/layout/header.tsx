import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material';
import useMediaQuery  from '@mui/material/useMediaQuery';
import { useDrawer } from '../../contexts/drawerContextProvider';
import Menu from '@mui/icons-material/Menu';
import { userNameStyle, headerContent, headerTitle } from './layoutStyle';
type Props = {
    title: string;
};
const Header: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const theme = useTheme();
    const { setDrawerOpen } = useDrawer();
    const md = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div className={`header-container`}>
            <AppBar position="sticky" style={headerContent()}>
                <Toolbar style={{ paddingRight: 16 }}>
                    <div style={headerTitle()} data-testid="app-bar">
                        {md ? null : (
                            <IconButton
                                color={'inherit'}
                                onClick={(): void => {
                                    setDrawerOpen(true);
                                }}
                                edge={'start'}
                                sx={{ mr: 3 }}
                                size="large"
                            >
                                <Menu />
                            </IconButton>
                        )}
                        <Typography variant="h6" style={{ fontWeight: 600, lineHeight: 1 }}>
                            {props.title}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" style={userNameStyle()}>
                            SA
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
