import { createContext, useContext } from 'react';

export const DrawerContext = createContext(null);

export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (context === null) {
        throw new Error('useDrawer must be used within a DrawerContextProvider');
    }
    return context;
};
