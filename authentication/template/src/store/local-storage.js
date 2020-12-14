import { LOCAL_USER_DATA, REMEMBER_ME_DATA } from '../constants';

async function readAuthData() {
    const jsonUserData = window.localStorage.getItem(LOCAL_USER_DATA) || '{}';
    const userData = await JSON.parse(jsonUserData);
    const jsonRememberMeData = window.localStorage.getItem(REMEMBER_ME_DATA) || '{}';
    const rememberMeData = await JSON.parse(jsonRememberMeData);
    return {
        userId: userData.userId,
        email: userData.user,
        rememberMeData: rememberMeData,
    };
}

function saveAuthCredentials(user, userId) {
    const userData = {
        user: user,
        userId: userId,
    };
    window.localStorage.setItem(LOCAL_USER_DATA, JSON.stringify(userData));
}
function saveRememberMeData(user, rememberMe) {
    const RememberMeData = {
        user: rememberMe ? user : '',
        rememberMe: rememberMe,
    };
    window.localStorage.setItem(REMEMBER_ME_DATA, JSON.stringify(RememberMeData));
}
function clearAuthCredentials() {
    window.localStorage.removeItem(LOCAL_USER_DATA);
}
function clearRememberMeData() {
    window.localStorage.removeItem(REMEMBER_ME_DATA);
}
export const LocalStorage = {
    readAuthData,
    saveAuthCredentials,
    saveRememberMeData,
    clearAuthCredentials,
    clearRememberMeData,
};
