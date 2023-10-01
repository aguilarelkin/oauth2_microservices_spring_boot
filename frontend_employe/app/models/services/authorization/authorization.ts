import { getVerifier } from "../../oauth/oauth";
import { getToken } from "../../oauth/token";
import { enviroments } from "../enviroments";

export const authorizationCreateMicro = (): Headers => {

    const tokens = getToken();

    if (tokens !== null) {
        return new Headers({ "Content-Type": "application/json", "Authorization": "Bearer " + tokens });
    } else {
        return new Headers();
    }
}
export const headersApi = () => {
    const tokens = getToken();

    if (tokens !== null) {
        return new Headers({ "Authorization": "Bearer " + tokens });
    } else {
        return new Headers();
    }
}
export const paramLogin = (code: string): string => {
    const datosLogin = new URLSearchParams();
    datosLogin.set('grant_type', enviroments.grant_type)
    datosLogin.set('client_id', enviroments.client_id)
    datosLogin.set('redirect_uri', enviroments.redirect_uri)
    datosLogin.set('scope', enviroments.scope)
    datosLogin.set('code_verifier', getVerifier())
    datosLogin.set('code', code)

    return datosLogin.toString();
}
export const credentialsLogin = (): string => {
    return btoa('oidc-client' + ':' + 'secret');
}