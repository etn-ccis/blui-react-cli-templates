import React from 'react';
import { Box } from '@mui/material';

import Header from '../../layout/header';
import dashboardImage from '../../../assets/images/dashboard.png';

export const Dashboard: React.FC = () => (
    <>
        <Header title={'Dashboard'} />
        <Box sx={{ margin: '3% 5%' }}>
            <img src={dashboardImage} alt={'Dashboard'} />
        </Box>
    </>
);
