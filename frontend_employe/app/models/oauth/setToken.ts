import { obtenerDatoToken } from "./authenticated";

export const guardarUser = (datos: string): void => {
    let payload = obtenerDatoToken(datos);

    //let id = payload.id;
    // let nombre = payload.nombre;
    //let apellido = payload.apellido;
    //let email = payload.email;
    let username = payload.sub;
    let roles = payload.roless;

    let dato = JSON.stringify({
        //id, nombre, apellido, email, 
        username, roles
    });

    sessionStorage.setItem('usuario', dato);

}

export const guardarTokenAuth = (access: string, refresh: string): void => {
    sessionStorage.removeItem('access_token');
    sessionStorage.setItem('access_token', access);
    sessionStorage.removeItem('refresh_token')
    sessionStorage.setItem('refresh_token', refresh);
    sessionStorage.removeItem('usuario');
    guardarUser(access);

}