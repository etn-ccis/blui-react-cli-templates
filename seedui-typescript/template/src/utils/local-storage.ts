import { UserDataType, BaseInfoType } from '../types/storage-types';

const getAuthTocken = (): UserDataType => {
    const userData = JSON.parse(window.localStorage.getItem('user_data') || '{}');
    return userData;
};

const setBaseConfig = (organizationId: string, adopterId: string): void => {
    const baseInfo = { organizationId, adopterId };
    window.localStorage.setItem('base_info', JSON.stringify(baseInfo));
};

const getBaseConfig = (): BaseInfoType => {
    const userData = JSON.parse(window.localStorage.getItem('base_info') || '{}');
    return userData;
};

const clearAuthToken = (): void => {
    window.localStorage.removeItem('user_data');
    window.localStorage.removeItem('base_info');
};

export const LocalStorage = {
    getAuthTocken,
    clearAuthToken,
    setBaseConfig,
    getBaseConfig,
};
