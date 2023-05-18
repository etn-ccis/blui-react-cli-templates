import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';

export const userNameStyle = (): React.CSSProperties => ({
    fontWeight: 600,
    lineHeight: 1,
    color: '#eef0f0',
    backgroundColor: '#007bc1',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
});
export const headerContent = (): React.CSSProperties => ({
    backgroundColor: '#ffff',
    color: '#000000',
    zIndex: 500
})

export const headerTitle = (): React.CSSProperties => ({
    flex: '1',
    color: '#000000'
})

export const copyRightsStyle = (): SxProps<Theme> => ({
    mr: '5px'
})

export const rghtsReservedStyle = (): SxProps<Theme> => ({
    mr: '5px',
    display: 'flex', 
    justifyContent: 'flex-end'
})