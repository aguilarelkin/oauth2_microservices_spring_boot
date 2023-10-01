import { equal, ok } from "assert";

import { getToken, getUsuario } from "./token";
import { experidedTokenLogin } from "../close/logout";

export const isAutenticated = (): boolean | undefined => {
    let payload = obtenerDatoToken(getToken());

    if (!isTokenExpired()) {
        if (payload !== null && payload.sub && payload.sub.length > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        //logout();
        experidedTokenLogin();
    }
    // }
    //return false
}

const isTokenExpired = () => {
    let payload = obtenerDatoToken(getToken());
    let nowDate :number = new Date().getTime()/1000 ;
 // console.log(payload.exp)
    console.log(nowDate.toString().split(".")[0])
    nowDate =Number.parseInt(nowDate.toString().split(".")[0]);
    //console.log(payload.exp < nowDate)
    //console.log(payload !== null)
    
    if (payload !== null) {
        console.log(payload.exp)
        if (payload.exp < nowDate) {
            
            return true;
        }
        return false;
    }
    return false;

}

export const obtenerDatoToken = (token: any) => {
    if (token !== null) {
        return JSON.parse(atob(token.split(".")[1]))
    }
    return null;
}

export const hasRole = (): string[] => {
    let user = getUsuario();
    let typeVar = typeof (user);

    if (user != undefined && user != Object) {
        if (typeVar === "string") {
            user = JSON.parse(user);
        }

        let rol: string[] = user.roles;
        if (rol.length > 0) {
            if (rol.includes('ROLE_ADMIN') || rol.includes('ROLE_USER')) {
                return rol;
            }

        }

    }
    return [];


}