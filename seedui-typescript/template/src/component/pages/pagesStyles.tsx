import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import backgroundImage from '../../assets/images/background.svg';

export const RegistrationStyle = (theme: Theme): SxProps<Theme> => ({
    backgroundImage: `url(${backgroundImage})`,

    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
        theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.dark
})

export const UserInviteStyle = (): React.CSSProperties => ({
    height: '98%', 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
})