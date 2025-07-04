export const api = 'http://localhost:8080'

export let operCode = 0;

export class setLogin {
    getLogin() {
        return operCode;
    }
    setLogin(opercod: number) {
        operCode = opercod;
    }
}