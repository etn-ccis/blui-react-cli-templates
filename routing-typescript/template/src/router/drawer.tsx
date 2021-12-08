import React, { useState, useCallback } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { useDrawer } from '../contexts/drawerContextProvider';
import Menu from '@material-ui/icons/Menu';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup } from '@brightlayer-ui/react-components';
import { PAGES } from './routes';

export const NavigationDrawer: React.FC = () => {
    const { drawerOpen, setDrawerOpen } = useDrawer();
    const theme = useTheme();
    const history = useHistory();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selected, setSelected] = useState(location.pathname);

    const navigate = useCallback(
        (id: string): void => {
            history.push(id);
            setSelected(id);
        },
        [history, setSelected]
    );

    return (
        <Drawer
            open={drawerOpen}
            ModalProps={{
                onBackdropClick: (): void => {
                    setDrawerOpen(false);
                },
            }}
            variant={isMobile ? 'temporary' : 'persistent'}
            activeItem={selected}
        >
            <DrawerHeader
                title={'Brightlayer UI'}
                subtitle={'React Project'}
                icon={<Menu />}
                onIconClick={(): void => {
                    setDrawerOpen(!drawerOpen);
                }}
            />
            <DrawerBody>
                <DrawerNavGroup
                    items={PAGES.map((page) => {
                        const Icon = page.icon;
                        return {
                            title: page.title,
                            itemID: page.route || '',
                            icon: <Icon />,
                            onClick: page.route
                                ? (): void => {
                                      navigate(page.route);
                                      if (isMobile) setDrawerOpen(false);
                                  }
                                : undefined,
                        };
                    })}
                    hidePadding
                />
            </DrawerBody>
        </Drawer>
    );
};
