import React from 'react';
import { Box, Typography } from '@mui/material';


export const PageNotFound: React.FC = () => (
    <Box>
        <Typography variant='h1' sx={{
            padding: '16% 0px 0px 45%',
            fontWeight: '500'
        }}
        >404</Typography>
        <Typography variant='h5' sx={{ padding: '0% 0px 0px 43%' }}>Sorry, Page Not Found</Typography>
    </Box>
);
