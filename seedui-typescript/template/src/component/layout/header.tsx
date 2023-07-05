import React from 'react';
import { Toolbar, Typography, AppBar } from '@mui/material';
import { userNameStyle, headerContent, headerTitle } from './layoutStyle';
type Props = {
    title: string;
};
const Header: React.FC<React.PropsWithChildren<Props>> = (props) => (
    <div className={`header-container`}>
        <AppBar position="sticky" style={headerContent()}>
            <Toolbar style={{ paddingRight: 16 }}>
                <div style={headerTitle()} data-testid="app-bar">
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
);

export default Header;
