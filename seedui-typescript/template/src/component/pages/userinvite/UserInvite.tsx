
import React from 'react';
import Box from '@mui/material/Box';
import { AdminInvite } from '@etn-electrical/derms-blcloud-seedui';

import Header from '../../layout/header';
import { UserInviteStyle } from '../pagesStyles';

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

