let _usuario: any;
let _token: any;
let _refresh: any;

export const getToken = (): any => {
    if (_token != null) {
        return _token;
    } else if (_token == null && sessionStorage.getItem('access_token') != null) {
        _token = sessionStorage.getItem('access_token');
        return _token;
    }
    return null;
}

export const getUsuario = (): any => {
    if (_usuario != null) {
        return _usuario;
    } else if (_usuario == null && sessionStorage.getItem('usuario') != null) {
        _usuario = sessionStorage.getItem('usuario');
        return JSON.parse(_usuario);
    }
    return null;
}

export const setToken = (): void => {
    _token = null;
    _usuario = null;
    _refresh = null;
}

export const getRefresh = (): any => {
    if (_refresh != null) {
        return _refresh;
    } else if (_refresh == null && sessionStorage.getItem('refresh_token') != null) {
        _refresh = sessionStorage.getItem('refresh_token');
        return _refresh;
    }
    return null;
}