
import React from 'react';
import Box from '@mui/material/Box';
import { AdminInvite } from '@etn-electrical/derms-blcloud-react-seedui';

import Header from '../../layout/header';

export const UserInviteStyle = (): React.CSSProperties => ({
    height: '98%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const UserInvite: React.FC = () => (
    <>
        <Header title={'Invite User'} />
        <Box sx={{ height: '90%', backgroundColor: '#7f7f7f' }}>
            <div style={UserInviteStyle()}>
                <AdminInvite />
            </div>
        </Box>
    </>
);
