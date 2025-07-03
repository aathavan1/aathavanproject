export const api = 'http://localhost:8080'

export let isLogin = true;

export class setLogin {
    getLogin() {
        return isLogin;
    }
    setLogin(loginStat: boolean) {
        isLogin = loginStat;
    }
}